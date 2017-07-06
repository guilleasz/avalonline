import React from 'react';
import FlipCard from 'react-flipcard';

const VoteCard = ({ questApprovalVote, showCard }) => (
  questApprovalVote !== undefined ?
    <div className="voteCard">
      <FlipCard
        disabled
        flipped={showCard}
      >
        <img className="img-responsive" alt="back vote card" src="/assets/card_back_vote.png" />
        <img
          className="img-responsive"
          alt={`${questApprovalVote ? 'approve' : 'reject'} vote card`}
          src={questApprovalVote ? '/assets/vote_approve.png' : '/assets/vote_reject.png'}
        />
      </FlipCard>
    </div>
  : null
);

export default VoteCard;
