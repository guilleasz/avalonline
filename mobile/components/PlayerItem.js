import React from 'react';
import PlayerNameItem from './PlayerNameItem';
import PlayerExtraInfoItem from './PlayerExtraInfoItem';

const PlayerItem = ({ player, currentPlayer }) => (
  <div>
    <PlayerNameItem name={player.name} />
    <PlayerExtraInfoItem
      special={player.special}
      playerRole={player.role}
      currentPlayerSpecial={currentPlayer.special}
      currentPlayerRole={currentPlayer.role}
    />
  </div>
);

export default PlayerItem;
