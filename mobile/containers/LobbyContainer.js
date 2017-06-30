import React from 'react';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import { connect } from 'react-redux';
import Lobby from '../components/Lobby';

class LobbyContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.setNickname = this.setNickname.bind(this);
    this.onUploadFile = this.onUploadFile.bind(this);
  }

  state = {
    name: '',
  }

  onUploadFile(e) {
    const { firebase, playerId } = this.props;
    const lobbyId = this.props.routeParams.lobbyId;
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref('images/' + file.name);
    const metadata = {
      contentType: 'image/jpeg',
    };
    const uploadTask = storageRef.put(file, metadata);

    uploadTask.on('state_changed', () => {}, (error) => {
      console.log(error);
    }, () => {
      const downloadURL = uploadTask.snapshot.downloadURL;
      firebase.update(`/${lobbyId}/players/${playerId}`, { downloadURL });
    });
  }

  setNickname() {
    const lobbyId = this.props.routeParams.lobbyId;
    const { name } = this.state;
    const { playerId } = this.props;
    this.props.firebase.update(`/${lobbyId}/players/${playerId}`, { name });
  }

  handleChange(name) {
    this.setState({ name });
  }

  render() {
    return (<Lobby
      handleChange={this.handleChange}
      setNickname={this.setNickname}
      onUploadFile={this.onUploadFile}
      name={this.state.name}
      nickname={this.props.playerInfo && this.props.playerInfo.name}
      started={this.props.started}
      params={this.props.params}
    />);
  }
}

const wrappedLobbyContainer = firebaseConnect(['/'])(LobbyContainer);

export default connect(({ firebase, currentPlayer }, { params }) => ({
  playerInfo: dataToJS(firebase, `${params.lobbyId}/players/${currentPlayer}`),
  playerId: currentPlayer,
  started: dataToJS(firebase, `${params.lobbyId}/started`),
}))(wrappedLobbyContainer);
