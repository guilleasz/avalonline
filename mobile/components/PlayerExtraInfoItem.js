import React from 'react';
import { MORDERED, MERLIN, MORGANA, PERCIVAL, OBERON } from '../../characters';

const isPercival = special =>
  (special === MERLIN || special === MORGANA ? `${MERLIN} or ${MORGANA}` : 'No Info');

const isEvil = (special, currentPlayerSpecial, playerRole) =>
  ((special !== OBERON && currentPlayerSpecial !== OBERON) && playerRole === 'bad' ?
    'Evil' : 'No Info');

const isMerlin = (special, playerRole) =>
  (special !== MORDERED && playerRole === 'bad' ? 'Evil' : 'No Info');

const getInfo = (playerRole, currentPlayerRole, special, currentPlayerSpecial) => {
  if (currentPlayerSpecial === PERCIVAL) return isPercival(special);
  if (currentPlayerRole === 'bad') return isEvil(special, currentPlayerSpecial, playerRole);
  if (currentPlayerSpecial === MERLIN) return isMerlin(special, playerRole);
  return 'No Info';
};


const PlayerExtraInfoItem = ({ playerRole, currentPlayerRole, special, currentPlayerSpecial }) => (
  <div>
    <p className="info">{getInfo(playerRole, currentPlayerRole, special, currentPlayerSpecial)}</p>
  </div>
);

export default PlayerExtraInfoItem;
