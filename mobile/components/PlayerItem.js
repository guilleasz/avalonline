import React from 'react';
import PlayerNameItem from './PlayerNameItem';
import PlayerExtraInfoItem from './PlayerExtraInfoItem';
import AddToQuestButton from './AddToQuestButton';
import RemoveFromQuestButton from './RemoveFromQuestButton';
import ChooseLady from './ChooseLady';

const PlayerItem = ({
  player,
  currentPlayer,
  gameState: {
    questLeader,
    numPlayersOnQuest,
    state,
    questPlayers,
    lady,
  },
  addToQuest,
  removeFromQuest,
  selectLady,
}) => (
  <div className="row playerItem">
    <PlayerNameItem
      name={player.name}
      playerId={player.uid}
      questLeader={questLeader}
      questPlayers={questPlayers && Object.keys(questPlayers)}
      isLady={player.uid === lady}
    />
    <PlayerExtraInfoItem
      special={player.special}
      playerRole={player.role}
      currentPlayerSpecial={currentPlayer.special}
      currentPlayerRole={currentPlayer.role}
    />
    <ChooseLady
      player={player.uid}
      currentPlayer={currentPlayer.uid}
      lady={lady}
      state={state}
      selectLady={selectLady}
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
