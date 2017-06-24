import React from 'react';
import PlayersList from './PlayersList';

const PlayerBoard = ({
  players,
  currentPlayer,
  turnOrder,
  currentPlayerId,
  gameState,
  addToQuest,
  removeFromQuest,
}) => (
  <div>
    <PlayersList
      players={turnOrder && turnOrder.map(id => ({ ...players[id], uid: id }))}
      currentPlayer={{ ...currentPlayer, uid: currentPlayerId }}
      gameState={gameState}
      addToQuest={addToQuest}
      removeFromQuest={removeFromQuest}
    />
  </div>
);

export default PlayerBoard;
