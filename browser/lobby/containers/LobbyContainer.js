import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import Lobby from '../components/Lobby';


class LobbyContainer extends React.Component {
  constructor() {
    super();
    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    const { lobbyId } = this.props;
    this.props.firebase.update(`/${lobbyId}/`, { started: true });
  }

  render() {
    const { players, lobbyId, started } = this.props;
    return (<Lobby
      started={started}
      players={players}
      lobbyId={lobbyId}
      startGame={this.startGame}
    />);
  }
}

const wrappedLobbyContainer = firebaseConnect(['/'])(LobbyContainer);

export default connect(({ firebase }, ownProps) => ({
  players: dataToJS(firebase, `${ownProps.routeParams.lobbyId}/players`),
  started: dataToJS(firebase, `${ownProps.routeParams.lobbyId}/started`),
  lobbyId: ownProps.routeParams.lobbyId,
}))(wrappedLobbyContainer);
