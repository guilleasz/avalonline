import React from 'react';

const AddToQuestButton = ({
  addToQuest,
  playerId,
  state,
  currentPlayerId,
  questLeader,
  numPlayersOnQuest,
  questPlayers,
}) => (
  state === 'choosing' &&
  currentPlayerId === questLeader &&
  (!questPlayers || numPlayersOnQuest > questPlayers.length) &&
  (!questPlayers || !questPlayers.includes(playerId)) ?
    <div>
      <button onClick={() => addToQuest(playerId)}>+</button>
    </div>
    : null
);

export default AddToQuestButton;
