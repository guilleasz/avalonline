import React from 'react';

const VotingCards = ({
  state,
  currentPlayer,
  questApprovalVote,
  approveQuest,
  rejectQuest,
}) => (
  state !== 'voting' ||
  (!!questApprovalVote && Object.hasOwnProperty.call(questApprovalVote, currentPlayer)) ?
    null
    : <div className="votingCardsContainer">
      <button onClick={approveQuest} className="votingCard approve">
        <img className="img-responsive" alt="approve" src="/assets/vote_approve.png" />
      </button>
      <button onClick={rejectQuest} className="votingCard reject">
        <img className="img-responsive" alt="reject" src="/assets/vote_reject.png" />
      </button>
    </div>
);

export default VotingCards;
