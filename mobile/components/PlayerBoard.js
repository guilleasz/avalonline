import React from 'react';
import PlayersList from './PlayersList';

const PlayerBoard = ({ players, currentPlayer, turnOrder }) => (
  <div>
    <PlayersList
      players={turnOrder && turnOrder.map(id => players[id])}
      currentPlayer={currentPlayer}
    />
  </div>
);

export default PlayerBoard;
