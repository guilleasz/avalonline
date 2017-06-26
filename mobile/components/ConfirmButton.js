import React from 'react';

const ConfirmButton = ({
  currentPlayer,
  confirmQuest,
  gameState: {
    questLeader,
    questPlayers,
    numPlayersOnQuest,
    state,
  },
}) => (
  currentPlayer === questLeader &&
  questPlayers &&
  questPlayers.length === numPlayersOnQuest &&
  state === 'choosing' ?
    <div>
      <button className="confirmQuest" onClick={confirmQuest}>Confirm Quest</button>
    </div>
    : null
);
export default ConfirmButton;
