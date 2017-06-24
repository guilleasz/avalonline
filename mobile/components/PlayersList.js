import React from 'react';
import PlayerItem from './PlayerItem';

const PlayerList = ({ players, currentPlayer, gameState, addToQuest, removeFromQuest }) => (
  <div>
    {players && players.map(player => (<PlayerItem
      player={player}
      currentPlayer={currentPlayer}
      gameState={{ ...gameState, questLeader: players[gameState.questLeader].uid }}
      addToQuest={addToQuest}
      removeFromQuest={removeFromQuest}
      key={player.uid}
    />))}
  </div>
);

export default PlayerList;
