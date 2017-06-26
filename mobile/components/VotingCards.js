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
      <button onClick={approveQuest} disabled={disabled} className="votingCard approve">Approve</button>
      <button onClick={rejectQuest} disabled={disabled} className="votingCard reject">Reject</button>
    </div>
  );
};

export default VotingCards;
