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
const isPercivalClass = special =>
  (special === MERLIN || special === MORGANA ? `percival` : 'noInfo');

const isMerlinClass = (special, playerRole) =>
  (special !== MORDERED && playerRole === 'bad' ? 'evil' : 'noInfo');

const isEvilClass = (special, currentPlayerSpecial, playerRole) =>
  ((special !== OBERON && currentPlayerSpecial !== OBERON) && playerRole === 'bad' ?
    'evil' : 'noInfo');


const getClass = (playerRole, currentPlayerRole, special, currentPlayerSpecial) => {
  if (currentPlayerSpecial === PERCIVAL) return isPercivalClass(special);
  if (currentPlayerRole === 'bad') return isEvilClass(special, currentPlayerSpecial, playerRole);
  if (currentPlayerSpecial === MERLIN) return isMerlinClass(special, playerRole);
  return 'noInfo';
};

const PlayerExtraInfoItem = ({ playerRole, currentPlayerRole, special, currentPlayerSpecial }) => (
  <div className="col-xs-3">
    <p
      className={
        `info ${getClass(playerRole, currentPlayerRole, special, currentPlayerSpecial)}`
      }
    >
      {getInfo(playerRole, currentPlayerRole, special, currentPlayerSpecial)}
    </p>
  </div>
);

export default PlayerExtraInfoItem;
