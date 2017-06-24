import React from 'react';
import PlayerNameItem from './PlayerNameItem';
import PlayerExtraInfoItem from './PlayerExtraInfoItem';
import AddToQuestButton from './AddToQuestButton';
import RemoveFromQuestButton from './RemoveFromQuestButton';

const PlayerItem = ({
  player,
  currentPlayer,
  gameState: {
    questLeader,
    numPlayersOnQuest,
    state,
    questPlayers,
  },
  addToQuest,
  removeFromQuest,
}) => (
  <div>
    <PlayerNameItem name={player.name} />
    <PlayerExtraInfoItem
      special={player.special}
      playerRole={player.role}
      currentPlayerSpecial={currentPlayer.special}
      currentPlayerRole={currentPlayer.role}
    />
    <AddToQuestButton
      playerId={player.uid}
      currentPlayerId={currentPlayer.uid}
      questLeader={questLeader}
      numPlayersOnQuest={numPlayersOnQuest}
      state={state}
      questPlayers={questPlayers && Object.keys(questPlayers)}
      addToQuest={addToQuest}
    />
    <RemoveFromQuestButton
      playerId={player.uid}
      currentPlayerId={currentPlayer.uid}
      questLeader={questLeader}
      state={state}
      questPlayers={questPlayers && Object.keys(questPlayers)}
      removeFromQuest={removeFromQuest}
    />
  </div>
);

export default PlayerItem;
