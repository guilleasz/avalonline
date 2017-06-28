import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import Lobby from '../components/Lobby';
import { generateCharsFromEvent, setupPlayerRoles, setupInitalGameState } from '../../../utils';

class LobbyContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedChar: '',
    };
    this.startGame = this.startGame.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectChar = this.selectChar.bind(this);
  }

  startGame(goodChars, badChars, lady) {
    const { lobbyId, players, firebase } = this.props;

    setupPlayerRoles(players, goodChars, badChars);
    const gameState = setupInitalGameState(players, lady);
    firebase.update(`/${lobbyId}/`, {
      started: true,
      gameState,
      players,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const specialChars = generateCharsFromEvent(e);
    this.startGame(specialChars[0], specialChars[1], e.target.lady.checked);
  }

  selectChar(selectedChar) {
    if (this.state.selectedChar === selectedChar) this.setState({ selectedChar: '' });
    else this.setState({ selectedChar });
  }

  render() {
    const { players, lobbyId, started } = this.props;
    const { selectedChar } = this.state;
    return (<Lobby
      started={started}
      players={players}
      lobbyId={lobbyId}
      handleSubmit={this.handleSubmit}
      selectedChar={selectedChar}
      selectChar={this.selectChar}
    />);
  }
}

const wrappedLobbyContainer = firebaseConnect(['/'])(LobbyContainer);

export default connect(({ firebase }, ownProps) => ({
  players: dataToJS(firebase, `${ownProps.routeParams.lobbyId}/players`),
  started: dataToJS(firebase, `${ownProps.routeParams.lobbyId}/started`),
  lobbyId: ownProps.routeParams.lobbyId,
}))(wrappedLobbyContainer);
