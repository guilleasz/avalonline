import React from 'react';
import GameBoard from '../components/GameBoard';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';

class GameBoardContainer extends React.Component {
  // constructor(){
  //   super();
  // }
  render() {
    const { lobbyId } = this.props;
    return (<GameBoard lobbyId={lobbyId} />);
  }
}

const wrappedGameBoardContainer = firebaseConnect(['/'])(GameBoardContainer);

export default connect(({ firebase }, ownProps) => ({
  players: dataToJS(firebase, `${ownProps.lobbyId}/players`),
  lobbyId: ownProps.lobbyId,
}))(wrappedGameBoardContainer);
