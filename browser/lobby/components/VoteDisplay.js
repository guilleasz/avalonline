import React from 'react';

const VoteDisplay = ({ voteInfo }) => (
  <div className="flex-item vote-display">
    {voteInfo ? <img className="vote-display-token" src="/vote_counter.png" alt="vote_counter" /> : null}
  </div>
);

export default VoteDisplay;
