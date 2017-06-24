import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import PlayerBoard from '../components/PlayerBoard';


class PlayerBoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.addToQuest = this.addToQuest.bind(this);
    this.removeFromQuest = this.removeFromQuest.bind(this);
    this.confirmQuest = this.confirmQuest.bind(this);
  }

  addToQuest(playerId) {
    const { params } = this.props;
    this.props.firebase.update(`/${params.lobbyId}/gameState/questPlayers`, { [playerId]: true });
  }

  removeFromQuest(playerId) {
    const { params } = this.props;
    this.props.firebase.remove(`/${params.lobbyId}/gameState/questPlayers/${playerId}`);
  }

  confirmQuest() {
    const { params } = this.props;
    this.props.firebase.update(`/${params.lobbyId}/gameState/`, { state: 'voting' });
  }

  render() {
    const { players, turnOrder, currentPlayer, currentPlayerId, gameState } = this.props;
    return (<PlayerBoard
      turnOrder={turnOrder}
      players={players}
      currentPlayer={currentPlayer}
      currentPlayerId={currentPlayerId}
      gameState={gameState}
      addToQuest={this.addToQuest}
      removeFromQuest={this.removeFromQuest}
      confirmQuest={this.confirmQuest}
    />);
  }
}

const wrappedPlayerBoardContainer = firebaseConnect(['/'])(PlayerBoardContainer);

export default connect(({ firebase, currentPlayer }, { params }) => ({
  players: dataToJS(firebase, `${params.lobbyId}/players`),
  turnOrder: dataToJS(firebase, `${params.lobbyId}/gameState/turnOrder`),
  currentPlayer: dataToJS(firebase, `${params.lobbyId}/players/${currentPlayer}`),
  gameState: dataToJS(firebase, `${params.lobbyId}/gameState`),
  currentPlayerId: currentPlayer,
}))(wrappedPlayerBoardContainer);
