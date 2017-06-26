import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import VoteDisplay from '../components/VoteDisplay';

class VoteDisplayContainer extends React.Component {

  render() {
    const { voteHistory } = this.props;
    const votes = [];
    for (let i = 0; i < 5; i++) {
      if (voteHistory[i]) votes.push(voteHistory[i]);
      else votes.push('');
    }
    return (
      <div>
        <h1>Vote Pass/Fail</h1>
        <div className="flex-container">
          {
            votes.map((vote, i) => (<VoteDisplay key={i} voteNumber={i + 1} voteInfo={vote} />))
          }
        </div>
      </div>
    );
  }
}

const wrappedVoteDisplayContainer = firebaseConnect(['/'])(VoteDisplayContainer);

export default connect(({ firebase }, ownProps) => ({
  voteHistory: dataToJS(firebase, `${ownProps.lobbyId}/gameState/voteHistory`),
}))(wrappedVoteDisplayContainer);
