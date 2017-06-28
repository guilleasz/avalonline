import React from 'react';
import { ASSASSIN } from '../../characters';

const GoodPlayerCard = ({ player, assassinate, currentPlayer, index }) => (
  <div
    tabIndex={index}
    role="button"
    onClick={() => currentPlayer.special === ASSASSIN && assassinate(player)}
    className="goodPlayerCard col-xs-4"
  >
    <p className="name">{player && player.name}</p>
  </div>
);

export default GoodPlayerCard;
