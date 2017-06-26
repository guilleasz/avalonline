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
  confirmQuest,
}) => (
  <div>
    <PlayersList
      players={turnOrder && turnOrder.map(id => ({ ...players[id], uid: id }))}
      currentPlayer={{ ...currentPlayer, uid: currentPlayerId }}
      gameState={gameState}
      addToQuest={addToQuest}
      removeFromQuest={removeFromQuest}
      confirmQuest={confirmQuest}
    />
  </div>
);

export default PlayerBoard;
