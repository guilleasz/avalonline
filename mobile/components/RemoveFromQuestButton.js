import React from 'react';

const RemoveFromQuestButton = ({ removeFromQuest,
  playerId,
  state,
  questLeader,
  currentPlayerId,
  questPlayers,
}) => (
  state === 'choosing' &&
  questLeader === currentPlayerId &&
  questPlayers.includes(playerId) ?
    <div>
      <button onClick={() => removeFromQuest(playerId)}>x</button>
    </div>
    : null
);

export default RemoveFromQuestButton;
