import React from 'react';

const PlayerDisplayTurn = ({ player, isQuestLeader }) => (
  <div className={isQuestLeader ? 'flex-item player-card quest-leader' : 'flex-item player-card'}>
    <h1>{player.name}</h1>
  </div>
);

export default PlayerDisplayTurn;
