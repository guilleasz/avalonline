import React from 'react';
import Lobby from '../components/Lobby';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';

class LobbyContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.setNickname = this.setNickname.bind(this);
  }

  state = {
    name: '',
  }

  setNickname() {
    const lobbyId = this.props.routeParams.lobbyId;
    const { name } = this.state;
    const { currentPlayer } = this.props;
    this.props.firebase.update(`/${lobbyId}/players/${currentPlayer}`, { name });
  }

  handleChange(name) {
    this.setState({ name });
  }

  render() {
    return (<Lobby
      handleChange={this.handleChange}
      setNickname={this.setNickname}
      name={this.state.name}
    />);
  }
}

const wrappedLobbyContainer = firebaseConnect(['/'])(LobbyContainer);

export default connect(({ currentPlayer }) => ({
  currentPlayer,
}))(wrappedLobbyContainer);
