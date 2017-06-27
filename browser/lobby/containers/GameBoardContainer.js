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
      if (state === 'voting' &&
          questApprovalVote &&
          Object.keys(questApprovalVote).length === Object.keys(players).length) {
        const result = Object.keys(questApprovalVote)
        .reduce((total, player) => total + (questApprovalVote[player] ? 1 : -1), 0);
        if (result > 0) {
          firebase.update(
          `/${lobbyId}/gameState`,
          { state: 'questing', voteHistory: [...(voteHistory || []), 'pass'] },
          );
        } else {
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
      if (questSuccessVote &&
         Object.keys(questSuccessVote).length === Object.keys(questPlayers).length) {
        const result = Object.keys(questSuccessVote)
        .reduce((total, player) => total + questSuccessVote[player], 0);
        const veredict = numOfRejectsNeeded > result ? 'pass' : 'fail';
        const roundNum = ((roundHistory && roundHistory.length) || 0) + 1;
        const voteNum = ((voteHistory && voteHistory.length) || 1);
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
  }
  render() {
    const { lobbyId } = this.props;
    return (<GameBoard lobbyId={lobbyId} />);
  }
}

const wrappedGameBoardContainer = firebaseConnect(['/'])(GameBoardContainer);

export default connect(({ firebase }, ownProps) => ({
  players: dataToJS(firebase, `${ownProps.lobbyId}/players`),
  lobbyId: ownProps.lobbyId,
}))(wrappedGameBoardContainer);
