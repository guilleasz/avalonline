import React from 'react';

const PrevVote = ({ vote }) => (
  <div className="col-xs-3">
    <img
      className="img-responsive"
      src={`/assets/vote_${vote ? 'approve' : 'reject'}.png`}
      alt={`vote_${vote ? 'approve' : 'reject'}`}
    />
  </div>
);

export default PrevVote;
