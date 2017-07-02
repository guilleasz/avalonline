import React from 'react';
import { browserHistory } from 'react-router';
import JoinLobby from '../components/JoinLobby';

export default class JoinLobbyContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.joinLobby = this.joinLobby.bind(this);
  }

  state = {
    lobbyValue: '',
  }

  handleChange(lobbyValue) {
    this.setState({ lobbyValue: lobbyValue.toLowerCase() });
  }

  joinLobby() {
    const lobbyId = this.state.lobbyValue;
    browserHistory.push(`/mobile/play/${lobbyId.toLowerCase()}`);
  }

  render() {
    return (<JoinLobby
      handleChange={this.handleChange}
      joinLobby={this.joinLobby}
      lobbyValue={this.state.lobbyValue}
    />);
  }
}

