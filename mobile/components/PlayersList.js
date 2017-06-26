import React from 'react';
import PlayerItem from './PlayerItem';
import ConfirmButton from './ConfirmButton';

const PlayerList = ({
  players,
  currentPlayer,
  gameState,
  addToQuest,
  removeFromQuest,
  confirmQuest,
}) => (
  <div className="playerList">
    <ConfirmButton
      currentPlayer={currentPlayer.uid}
      confirmQuest={confirmQuest}
      gameState={{
        ...gameState,
        questLeader: players[gameState.questLeader].uid,
        questPlayers: gameState.questPlayers && Object.keys(gameState.questPlayers),
      }}
    />
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
