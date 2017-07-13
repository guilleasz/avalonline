import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import PlayerDisplayTurn from '../components/PlayerDisplayTurn';

class PlayerDisplayTurnContainer extends React.Component {
  render() {
    const {
      players,
      turnOrder,
      questLeader,
      questPlayers,
      questApprovalVote,
      showCard,
      roundHistory,
      gameLog,
    } = this.props;
    const numPlayers = Object.keys(players).length;
    let totalPics = 0;
    Object.keys(players).forEach((player) => {
      if (players[player].downloadURL) totalPics += 1;
    });
    return (
      <div className="player-card-container">
        <div className="flex-container">
          { turnOrder.map((id, i) => (<PlayerDisplayTurn
            key={id}
            player={players[id]}
            numPlayers={numPlayers}
            isQuestLeader={questLeader === i}
            onQuest={questPlayers && Object.keys(questPlayers).indexOf(id) >= 0}
            questApprovalVote={questApprovalVote && questApprovalVote[id]}
            showCard={showCard}
            totalPics={totalPics}
            roundNum={roundHistory ? roundHistory.length + 1 : 1}
            gameLog={gameLog}
            playerId={id}
          />))}
        </div>
      </div>
    );
  }
}

const wrappedPlayerDisplayTurnContainer = firebaseConnect(['/'])(PlayerDisplayTurnContainer);

export default connect(({ firebase }, ownProps) => ({
  players: dataToJS(firebase, `${ownProps.lobbyId}/players`),
  turnOrder: dataToJS(firebase, `${ownProps.lobbyId}/gameState/turnOrder`),
  questLeader: dataToJS(firebase, `${ownProps.lobbyId}/gameState/questLeader`),
  questPlayers: dataToJS(firebase, `${ownProps.lobbyId}/gameState/questPlayers`),
  questApprovalVote: dataToJS(firebase, `${ownProps.lobbyId}/gameState/questApprovalVote`),
  roundHistory: dataToJS(firebase, `${ownProps.lobbyId}/gameState/roundHistory`),
  gameLog: dataToJS(firebase, `${ownProps.lobbyId}/gameLog`),
  lobbyId: ownProps.lobbyId,
}))(wrappedPlayerDisplayTurnContainer);
