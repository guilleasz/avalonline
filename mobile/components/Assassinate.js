import React from 'react';
import GoodPlayerCard from './GoodPlayerCard';
import { ASSASSIN } from '../../characters';

const Assassinate = ({ state, goodPlayers, currentPlayer, assassinate }) => (
  state === 'assassinate' && currentPlayer.special === ASSASSIN ?
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
