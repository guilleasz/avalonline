import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import PlayerDisplayTurn from '../components/PlayerDisplayTurn';

class PlayerDisplayTurnContainer extends React.Component {

  render() {
    const { players } = this.props;
    return (
      <div>
        <h1>Turn Order</h1>
        {
          players && Object.keys(players)
          .sort((a, b) => players[a].turnIndex - players[b.turnIndex])
          .map(id => (<PlayerDisplayTurn key={id} player={players[id]} />))
        }
      </div>
    );
  }
}

const wrappedPlayerDisplayTurnContainer = firebaseConnect(['/'])(PlayerDisplayTurnContainer);

export default connect(({ firebase }, ownProps) => ({
  players: dataToJS(firebase, `${ownProps.lobbyId}/players`),
  lobbyId: ownProps.lobbyId,
}))(wrappedPlayerDisplayTurnContainer);
