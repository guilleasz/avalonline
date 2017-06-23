import React from 'react';

const VoteDisplay = ({ voteInfo, voteNumber }) => (
  <div>
    <h1>{voteInfo === '' ? voteNumber : voteInfo}</h1>
  </div>
);

export default VoteDisplay;
