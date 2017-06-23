import React from 'react';
import PlayerItem from './PlayerItem';

const PlayerList = ({ players, currentPlayer }) => (
  <div>
    {players && players.map(player => (<PlayerItem
      player={player}
      currentPlayer={currentPlayer}
      key={player.uid}
    />))}
  </div>
);

export default PlayerList;
