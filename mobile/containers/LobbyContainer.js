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
    this.getOrientation = this.getOrientation.bind(this);
  }

  state = {
    name: '',
    error: false
  }

  getOrientation(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const view = new DataView(e.target.result);
      if (view.getUint16(0, false) !== 0xFFD8) return callback(-2);
      const length = view.byteLength;
      let offset = 2;
      while (offset < length) {
        const marker = view.getUint16(offset, false);
        offset += 2;
        if (marker === 0xFFE1) {
          if (view.getUint32(offset += 2, false) !== 0x45786966) return callback(-1);
          const little = view.getUint16(offset += 6, false) === 0x4949;
          offset += view.getUint32(offset + 4, little);
          const tags = view.getUint16(offset, little);
          offset += 2;
          for (let i = 0; i < tags; i++) {
            if (view.getUint16(offset + (i * 12), little) === 0x0112) {
              return callback(view.getUint16(offset + (i * 12) + 8, little));
            }
          }
        }
        else if ((marker & 0xFF00) !== 0xFF00) break;
        else offset += view.getUint16(offset, false);
      }
      return callback(-1);
    };
    reader.readAsArrayBuffer(file);
  }

  onUploadFile(e) {
    console.log('uploaded file');
    const { firebase, playerId } = this.props;
    const lobbyId = this.props.routeParams.lobbyId;
    const file = e.target.files[0];
    this.getOrientation(file, (orientation) => {
      const storageRef = firebase.storage().ref('images/' + playerId);
      const metadata = {
        contentType: 'image/jpeg',
      };
      const uploadTask = storageRef.put(file, metadata);
      uploadTask.on('state_changed', () => {}, (error) => {
        console.log(error);
      }, () => {
        const downloadURL = uploadTask.snapshot.downloadURL;
        firebase.update(`/${lobbyId}/players/${playerId}`, { downloadURL, orientation });
      });
    });
  }

  setNickname() {
    const lobbyId = this.props.routeParams.lobbyId;
    const { name } = this.state;
    const { playerId, players } = this.props;
    if (Object.keys(players).every(id => players[id].name !== name)) {
      this.props.firebase.update(`/${lobbyId}/players/${playerId}`, { name });
      this.setState({
        error: false,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  }

  handleChange(name) {
    this.setState({ name, error: false });
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
      error={this.state.error}
    />);
  }
}

const wrappedLobbyContainer = firebaseConnect(['/'])(LobbyContainer);

export default connect(({ firebase, currentPlayer }, { params }) => ({
  playerInfo: dataToJS(firebase, `${params.lobbyId}/players/${currentPlayer}`),
  players: dataToJS(firebase, `${params.lobbyId}/players`),
  playerId: currentPlayer,
  started: dataToJS(firebase, `${params.lobbyId}/started`),
}))(wrappedLobbyContainer);
