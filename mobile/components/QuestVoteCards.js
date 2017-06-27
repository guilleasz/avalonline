import React from 'react';

const QuestVoteCards = ({
  currentPlayer,
  questPlayers,
  state,
  questSuccessVote,
  failQuest,
  successQuest,
}) => (
  state === 'questing' &&
  questPlayers[currentPlayer] &&
  (!questSuccessVote || !Object.hasOwnProperty.call(questSuccessVote, currentPlayer)) ?
    <div className="questVoteCardContainer">
      <button onClick={successQuest} className="questVoteCard successQuest">Success</button>
      <button onClick={failQuest} className="questVoteCard failQuest">Fail</button>
    </div>
    : null
);

export default QuestVoteCards;
