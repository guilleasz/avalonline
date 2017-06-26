import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import PlayerDisplayTurn from '../components/PlayerDisplayTurn';

class PlayerDisplayTurnContainer extends React.Component {

  render() {
    const { players, turnOrder } = this.props;
    return (
      <div>
        <h1>Turn Order</h1>
        <div className="flex-container">
          { turnOrder.map(id => <PlayerDisplayTurn key={id} player={players[id]} />) }
        </div>
      </div>
    );
  }
}

const wrappedPlayerDisplayTurnContainer = firebaseConnect(['/'])(PlayerDisplayTurnContainer);

export default connect(({ firebase }, ownProps) => ({
  players: dataToJS(firebase, `${ownProps.lobbyId}/players`),
  turnOrder: dataToJS(firebase, `${ownProps.lobbyId}/gameState/turnOrder`),
  lobbyId: ownProps.lobbyId,
}))(wrappedPlayerDisplayTurnContainer);
