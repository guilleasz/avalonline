import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import PlayerBoard from '../components/PlayerBoard';


class PlayerBoardContainer extends React.Component {
  render() {
    const { players, turnOrder, currentPlayer } = this.props;
    return (<PlayerBoard
      turnOrder={turnOrder}
      players={players}
      currentPlayer={currentPlayer}
    />);
  }
}

const wrappedPlayerBoardContainer = firebaseConnect(['/'])(PlayerBoardContainer);

export default connect(({ firebase, currentPlayer }, { params }) => ({
  players: dataToJS(firebase, `${params.lobbyId}/players`),
  turnOrder: dataToJS(firebase, `${params.lobbyId}/gameState/turnOrder`),
  currentPlayer: dataToJS(firebase, `${params.lobbyId}/players/${currentPlayer}`),
}))(wrappedPlayerBoardContainer);
