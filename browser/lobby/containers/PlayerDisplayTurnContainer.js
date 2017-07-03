import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import PlayerDisplayTurn from '../components/PlayerDisplayTurn';

class PlayerDisplayTurnContainer extends React.Component {
  render() {
    const { players, turnOrder, questLeader, questPlayers, questApprovalVote, showCard } = this.props;
    const numPlayers = Object.keys(players).length;
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
  lobbyId: ownProps.lobbyId,
}))(wrappedPlayerDisplayTurnContainer);
