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
  selectLady,
  hideInfo,
  toggleInfo,
}) => (
  <div className="playerList">
    <ConfirmButton
      currentPlayer={currentPlayer && currentPlayer.uid}
      confirmQuest={confirmQuest}
      gameState={{
        ...gameState,
        questLeader: players && players[gameState.questLeader].uid,
        questPlayers: gameState.questPlayers && Object.keys(gameState.questPlayers),
      }}
    />
    <button
      className="toggleInfo"
      onClick={toggleInfo}
    >
    {hideInfo ? 'Show Info' : 'Hide Info'}
    </button>
    {players && players.map(player => (<PlayerItem
      player={player}
      currentPlayer={currentPlayer}
      gameState={{ ...gameState, questLeader: players && players[gameState.questLeader].uid }}
      addToQuest={addToQuest}
      removeFromQuest={removeFromQuest}
      key={player.uid}
      selectLady={selectLady}
      hideInfo={hideInfo}
    />))}
  </div>
);

export default PlayerList;
