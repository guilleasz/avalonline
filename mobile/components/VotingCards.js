import React from 'react';

const VotingCards = ({
  state,
  currentPlayer,
  questApprovalVote,
  approveQuest,
  rejectQuest,
}) => {
  const disabled = state !== 'voting' || (!!questApprovalVote && Object.hasOwnProperty.call(questApprovalVote, currentPlayer));
  return (
    <div className="votingCardsContainer">
      <button onClick={approveQuest} disabled={disabled} className="votingCard approve">
        <img className="img-responsive" alt="approve" src="/assets/vote_approve.png" />
      </button>
      <button onClick={rejectQuest} disabled={disabled} className="votingCard reject">
        <img className="img-responsive" alt="reject" src="/assets/vote_reject.png" />
      </button>
    </div>
  );
};

export default VotingCards;
