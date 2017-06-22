import React from 'react';
import Lobby from '../components/Lobby';
import { firebaseConnect, dataToJs } from 'react-redux-firebase';

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
    const name = this.state.name;
    console.log(name);
    console.log(lobbyId);
    this.props.firebase.push(`/${lobbyId}/players`, { name });
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

export default firebaseConnect()(LobbyContainer);
