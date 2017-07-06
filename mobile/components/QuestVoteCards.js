import React from 'react';

const QuestVoteCards = ({
  currentPlayer,
  questPlayers,
  state,
  questSuccessVote,
  failQuest,
  successQuest,
  currentPlayerRole,
}) => (
  state === 'questing' &&
  questPlayers[currentPlayer] &&
  (!questSuccessVote || !Object.hasOwnProperty.call(questSuccessVote, currentPlayer)) ?
    <div className="questVoteCardContainer">
      <button onClick={successQuest} className="questVoteCard successQuest">
        <img alt="success" className="img-responsive" src="/assets/quest_success.png" />
      </button>
      <button
        onClick={currentPlayerRole !== 'good' && failQuest}
        className="questVoteCard failQuest"
      >
        <img alt="approve" className="img-responsive" src="/assets/quest_fail.png" />
      </button>
    </div>
    : null
);

export default QuestVoteCards;
