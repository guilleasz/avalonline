import React from 'react';
import GoodPlayerCard from './GoodPlayerCard';

const Assassinate = ({ state, goodPlayers, currentPlayer, assassinate }) => (
  state === 'assassinate' ?
    <div className="assassinContainer">
      <div className="row">
        {goodPlayers && goodPlayers.map((player, i) => (<GoodPlayerCard
          key={player.uid}
          player={player}
          currentPlayer={currentPlayer}
          index={i}
          assassinate={assassinate}
        />))}
      </div>
    </div>
    : null
);

export default Assassinate;
