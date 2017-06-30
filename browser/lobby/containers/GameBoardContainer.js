import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import GameBoard from '../components/GameBoard';
import { howManyPlayersOnQuest, questNeedsTwoFails } from '../../../utils';

class GameBoardContainer extends React.Component {
  componentWillMount() {
    const { lobbyId, firebase, players } = this.props;
    firebase.ref(`/${lobbyId}/gameState`)
    .on('value', (snapshot) => {
      const {
        questSuccessVote,
        questPlayers,
        numOfRejectsNeeded,
        roundHistory,
        voteHistory,
        turnOrder,
        questLeader,
        questApprovalVote,
        lady,
        state,
      } = snapshot.val();
      // When we are voting and the quest is voted by all the players
      if (state === 'voting' &&
          questApprovalVote &&
          Object.keys(questApprovalVote).length === Object.keys(players).length) {
        // we get the result by reducing the values
        const result = Object.keys(questApprovalVote)
        .reduce((total, player) => total + (questApprovalVote[player] ? 1 : -1), 0);
        // positive means that the test was approve 0 or negative is rejected
        if (result > 0) {
          // if it is approve we go to the questing state and add the pass vote to the voteHistory
          firebase.update(
          `/${lobbyId}/gameState`,
          { state: 'questing', voteHistory: [...(voteHistory || []), 'pass'] },
          );
        } else {
          // else if it is rejected
          //   we add the vote into the game log and reset the game state back to choosing
          const roundNum = ((roundHistory && roundHistory.length) || 0) + 1;
          const voteNum = ((voteHistory && voteHistory.length) || 0) + 1;
          firebase.update(
            `${lobbyId}/gameLog/round${roundNum}/quest${voteNum}`,
            { questPlayers, questLeader: turnOrder[questLeader], questApprovalVote },
          );
          const nextTurn = questLeader < turnOrder.length - 1 ? questLeader + 1 : 0;
          firebase.update(
            `/${lobbyId}/gameState`,
            {
              state: 'choosing',
              questLeader: nextTurn,
              voteHistory: [...(voteHistory || []), 'fail'],
              questPlayers: null,
              questApprovalVote: null,
            },
          );
        }
      }
      // if all the players in the quest already voted
      if (questSuccessVote &&
         Object.keys(questSuccessVote).length === Object.keys(questPlayers).length) {
        // we take the result by reducing the value to the num of fails
        const result = Object.keys(questSuccessVote)
        .reduce((total, player) => total + questSuccessVote[player], 0);
        // the quest will pass if we have less fails than needed to fail
        const veredict = numOfRejectsNeeded > result ? 'pass' : 'fail';
        const roundNum = ((roundHistory && roundHistory.length) || 0) + 1;
        const voteNum = ((voteHistory && voteHistory.length) || 1);
        // update the gameLog of the game and the new State into a new round
        firebase.update(
          `${lobbyId}/gameLog/round${roundNum}/quest${voteNum}`,
          {
            questPlayers,
            questLeader: turnOrder[questLeader],
            questApprovalVote,
            questResult: [veredict, result],
          },
        );
        const nextTurn = questLeader < turnOrder.length - 1 ? questLeader + 1 : 0;
        const totalPlayers = Object.keys(players).length;
        const round = (roundHistory && Object.keys(roundHistory).length + 2) || 2;
        firebase.update(
          `/${lobbyId}/gameState`,
          {
            state: lady && roundHistory ? 'lady' : 'choosing',
            questLeader: nextTurn,
            roundHistory: [...(roundHistory || []), [veredict, result]],
            numPlayersOnQuest: howManyPlayersOnQuest(totalPlayers, round),
            numOfRejectsNeeded: questNeedsTwoFails(totalPlayers, round) ? 2 : 1,
            questPlayers: null,
            questApprovalVote: null,
            questSuccessVote: null,
            voteHistory: null,
          },
        );
      }
    });
    // listening for each round that passes
    firebase.ref(`/${lobbyId}/gameState/roundHistory`)
    .on('value', (snapshot) => {
      let pass = 0;
      let fail = 0;
      // counting the results of the rounds
      snapshot.val().forEach((round) => { round[0] === 'pass' ? pass += 1 : fail += 1; });
      // when there are three fails evil wins
      if (fail === 3) {
        firebase.update(`/${lobbyId}/gameState/`, {
          state: 'end',
          result: 'Evil Wins!',
        });
      } else if (pass === 3) { // good wins, the evil has one last chance to guess who merlin is
        firebase.update(`/${lobbyId}/gameState`, {
          state: 'assassinate',
        });
      }
    });
  }
  render() {
    const { lobbyId, players } = this.props;
    return (<GameBoard lobbyId={lobbyId} players={players} />);
  }
}

const wrappedGameBoardContainer = firebaseConnect(['/'])(GameBoardContainer);

export default connect(({ firebase }, ownProps) => ({
  players: dataToJS(firebase, `${ownProps.lobbyId}/players`),
  lobbyId: ownProps.lobbyId,
}))(wrappedGameBoardContainer);
