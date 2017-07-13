import React from 'react';
import PrevVote from './PrevVote';

const VoteTracker = ({ prevVote, playerId }) => (
  <div className="row voteTrack">
    {prevVote && Object.keys(prevVote).map((quest) => {
      const vote = prevVote[quest].questApprovalVote[playerId];
      return <PrevVote key={quest} vote={vote} />;
    })}
  </div>
);

export default VoteTracker;
