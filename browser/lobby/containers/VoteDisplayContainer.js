import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import VoteDisplay from '../components/VoteDisplay';

class VoteDisplayContainer extends React.Component {

  render() {
    const { voteFails } = this.props;
    const votes = [];
    for (let i = 0; i < 5; i++) {
      if (i < voteFails) votes.push(true);
      else votes.push(false);
    }
    return (
      <div className="vote-display-container">
        <div className="flex-container">
          <div className="buffer-vote-left" />
          {
            votes.map((vote, i) => (<VoteDisplay key={i} voteNumber={i + 1} voteInfo={vote} />))
          }
          <div className="buffer-vote-right" />
        </div>
      </div>
    );
  }
}

const wrappedVoteDisplayContainer = firebaseConnect(['/'])(VoteDisplayContainer);

export default connect(({ firebase }, ownProps) => ({
  voteFails: dataToJS(firebase, `${ownProps.lobbyId}/gameState/voteFails`),
}))(wrappedVoteDisplayContainer);
