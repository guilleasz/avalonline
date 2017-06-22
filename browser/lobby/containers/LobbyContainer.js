import React from 'react';
import Lobby from '../components/Lobby';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';

class LobbyContainer extends React.Component {

  render() {
    const { players } = this.props;
    return (<Lobby players={players} />);
  }

  componentDidMount() {
    console.log(this.props);
  }
}

const wrappedLobbyContainer = firebaseConnect(['/'])(LobbyContainer);

export default connect(({ firebase }, ownProps) => ({
  players: dataToJS(firebase, `${ownProps.routeParams.lobbyId}/players`),
}))(wrappedLobbyContainer);
