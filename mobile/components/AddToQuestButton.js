import React from 'react';

const AddToQuestButton = ({
  addPlayerToQuest,
  playerId,
  state,
  currentPlayerId,
  questLeader,
  numPlayersOnQuest,
  questPlayers,
}) => (
  state === 'choosing' &&
  currentPlayerId === questLeader &&
  numPlayersOnQuest > questPlayers.length &&
  !questPlayers.includes(playerId) ?
    <div>
      <button onClick={() => addPlayerToQuest(playerId)}>+</button>
    </div>
    : null
);

export default AddToQuestButton;
