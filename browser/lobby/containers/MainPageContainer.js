import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJs } from 'react-redux-firebase';
import MainPage from '../components/MainPage';

class MainPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.addLobby = this.addLobby.bind(this);
  }

  addLobby() {
    const lobbyId = Math.random().toString(36).substr(2, 5);
    this.props.firebase.update(`/${lobbyId}`, { lobbyId, started: false });
    browserHistory.push(`play/${lobbyId}`);
  }

  render() {
    return (
      <MainPage addLobby={this.addLobby} />
    );
  }
}

const wrappedMainPageContainer = firebaseConnect()(MainPageContainer);

export default wrappedMainPageContainer;
