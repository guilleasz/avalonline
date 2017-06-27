import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import Lobby from '../components/Lobby';
import { shuffle, generateChars, generateCharsFromEvent } from '../../../utils';

class LobbyContainer extends React.Component {
  constructor() {
    super();
    this.startGame = this.startGame.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  startGame(goodChars, badChars, lady) {
    const { lobbyId, players, firebase } = this.props;
    const playerIds = Object.keys(players);
    const allChars = generateChars(playerIds.length, goodChars, badChars);
    playerIds.forEach((playerId, i) => {
      Object.assign(players[playerId], allChars[i]);
    });
    firebase.update(`/${lobbyId}/`, {
      started: true,
      gameState: {
        roundHistory: ['', '', '', '', ''],
        voteHistory: [''],
        turnOrder: shuffle(Object.keys(this.props.players)),
        lady,
      },
      players,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const specialChars = generateCharsFromEvent(e);
    this.startGame(specialChars[0], specialChars[1], e.target.lady.checked);
  }

  render() {
    const { players, lobbyId, started } = this.props;
    return (<Lobby
      started={started}
      players={players}
      lobbyId={lobbyId}
      handleSubmit={this.handleSubmit}
    />);
  }
}

const wrappedLobbyContainer = firebaseConnect(['/'])(LobbyContainer);

export default connect(({ firebase }, ownProps) => ({
  players: dataToJS(firebase, `${ownProps.routeParams.lobbyId}/players`),
  started: dataToJS(firebase, `${ownProps.routeParams.lobbyId}/started`),
  lobbyId: ownProps.routeParams.lobbyId,
}))(wrappedLobbyContainer);
