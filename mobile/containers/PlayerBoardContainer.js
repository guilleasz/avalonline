import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import PlayerBoard from '../components/PlayerBoard';
import { howManyPlayersOnQuest, questNeedsTwoFails } from '../../utils';

class PlayerBoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.addToQuest = this.addToQuest.bind(this);
    this.removeFromQuest = this.removeFromQuest.bind(this);
    this.confirmQuest = this.confirmQuest.bind(this);
    this.approveQuest = this.approveQuest.bind(this);
    this.rejectQuest = this.rejectQuest.bind(this);
    this.successQuest = this.successQuest.bind(this);
    this.failQuest = this.failQuest.bind(this);
  }

  addToQuest(playerId) {
    const { params, firebase } = this.props;
    firebase.update(`/${params.lobbyId}/gameState/questPlayers`, { [playerId]: true });
  }

  removeFromQuest(playerId) {
    const { params, firebase } = this.props;
    firebase.remove(`/${params.lobbyId}/gameState/questPlayers/${playerId}`);
  }

  confirmQuest() {
    const { params, firebase, gameState } = this.props;
    const { voteHistory } = gameState;

    if (voteHistory.length === 4) {
      firebase.update(`/${params.lobbyId}/gameState/`, {
        state: 'questing',
        voteHistory: [...voteHistory, 'pass'] });
    } else {
      firebase.update(`/${params.lobbyId}/gameState/`, { state: 'voting' });
    }
  }
  approveQuest() {
    this.voteForQuest(true);
  }
  rejectQuest() {
    this.voteForQuest(false);
  }
  voteForQuest(vote) {
    const { params, currentPlayerId, players, firebase } = this.props;
    firebase.update(
      `/${params.lobbyId}/gameState/questApprovalVote`,
      { [currentPlayerId]: vote },
    )
    .then(() => {
      firebase.ref(`/${params.lobbyId}/gameState`).once('value', (snapshot) => {
        const {
          questApprovalVote,
          voteHistory,
          roundHistory,
          questPlayers,
          questLeader,
          turnOrder,
        } = snapshot.val();

        if (questApprovalVote &&
            Object.keys(questApprovalVote).length === Object.keys(players).length) {
          const result = Object.keys(questApprovalVote)
          .reduce((total, player) => total + (questApprovalVote[player] ? 1 : -1), 0);
          if (result > 0) {
            firebase.update(
            `/${params.lobbyId}/gameState`,
            { state: 'questing', voteHistory: [...(voteHistory || []), 'pass'] },
            );
          } else {
            const roundNum = ((roundHistory && roundHistory.length) || 0) + 1;
            const voteNum = ((voteHistory && voteHistory.length) || 0) + 1;
            firebase.update(
              `${params.lobbyId}/gameLog/round${roundNum}/quest${voteNum}`,
              { questPlayers, questLeader: turnOrder[questLeader], questApprovalVote },
            );
            const nextTurn = questLeader < turnOrder.length - 1 ? questLeader + 1 : 0;
            firebase.update(
              `/${params.lobbyId}/gameState`,
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
      });
    });
  }

  successQuest() {
    this.quest(false);
  }

  failQuest() {
    this.quest(true);
  }

  quest(vote) {
    const { params, firebase, currentPlayerId } = this.props;
    firebase.update(
      `/${params.lobbyId}/gameState/questSuccessVote`,
      { [currentPlayerId]: vote },
    )
    .then(() => {
      firebase.ref(`/${params.lobbyId}/gameState`)
      .once('value', (snapshot) => {
        const {
          questSuccessVote,
          questPlayers,
          numsOfRejectsNeeded,
          roundHistory,
          voteHistory,
          turnOrder,
          questLeader,
          questApprovalVote,
          lady,
          players,
        } = snapshot.val();
        if (questSuccessVote &&
           Object.keys(questSuccessVote).length === Object.keys(questPlayers).length) {
          const result = Object.keys(questSuccessVote)
          .reduce((total, player) => total + questSuccessVote[player]);
          const veredict = numsOfRejectsNeeded > result ? 'pass' : 'fail';
          const roundNum = ((roundHistory && roundHistory.length) || 0) + 1;
          const voteNum = ((voteHistory && voteHistory.length) || 0) + 1;
          firebase.update(
            `${params.lobbyId}/gameLog/round${roundNum}/quest${voteNum}`,
            {
              questPlayers,
              questLeader: turnOrder[questLeader],
              questApprovalVote,
              questResult: [veredict, result],
            },
          );
          const nextTurn = questLeader < turnOrder.length - 1 ? questLeader + 1 : 0;
          const totalPlayers = Object.keys(players).length;
          const round = Object.keys(roundHistory).length + 1;
          firebase.update(
            `/${params.lobbyId}/gameState`,
            {
              state: lady && roundHistory ? 'lady' : 'choosing',
              questLeader: nextTurn,
              roundHistory: [...(roundHistory || []), [veredict, result]],
              numPlayersOnQuest: howManyPlayersOnQuest(totalPlayers, round),
              numsOfRejectsNeeded: questNeedsTwoFails(totalPlayers, round) ? 2 : 1,
              questPlayers: null,
              questApprovalVote: null,
              questSuccessVote: null,
            },
          );
        }
      });
    });
  }

  render() {
    const { players, currentPlayerId, gameState } = this.props;
    return (<PlayerBoard
      turnOrder={gameState.turnOrder}
      players={players}
      currentPlayer={players[currentPlayerId]}
      currentPlayerId={currentPlayerId}
      gameState={gameState}
      addToQuest={this.addToQuest}
      removeFromQuest={this.removeFromQuest}
      confirmQuest={this.confirmQuest}
      approveQuest={this.approveQuest}
      rejectQuest={this.rejectQuest}
      successQuest={this.successQuest}
      failQuest={this.failQuest}
    />);
  }
}

const wrappedPlayerBoardContainer = firebaseConnect(['/'])(PlayerBoardContainer);

export default connect(({ firebase, currentPlayer }, { params }) => ({
  players: dataToJS(firebase, `${params.lobbyId}/players`),
  gameState: dataToJS(firebase, `${params.lobbyId}/gameState`),
  currentPlayerId: currentPlayer,
}))(wrappedPlayerBoardContainer);
