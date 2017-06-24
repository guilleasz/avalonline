import React from 'react';

const RemoveFromQuestButton = ({
  removeFromQuest,
  playerId,
  state,
  questLeader,
  currentPlayerId,
  questPlayers,
}) => (
  state === 'choosing' &&
  questLeader === currentPlayerId &&
  questPlayers && questPlayers.includes(playerId) ?
    <div className="col-xs-2">
      <button className="removeFromQuest" onClick={() => removeFromQuest(playerId)}>x</button>
    </div>
    : null
);

export default RemoveFromQuestButton;
