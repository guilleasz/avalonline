import React from 'react';
import { MORDERED, MERLIN, MORGANA, PERCIVAL, OBERON, ASSASSIN} from '../../characters';
import charInfo, { GOOD_GUY, BAD_GUY } from '../../charactersinfo';

const PlayerCard = ({
  currentPlayer,
}) => (
  <div>
    <h1>{
      currentPlayer && currentPlayer.special
      ?
      currentPlayer.special
      :
        currentPlayer.role === 'bad'
        ?
        BAD_GUY
        :
        GOOD_GUY
      }
    </h1>
    <h3>{
      currentPlayer && currentPlayer.special
      ?
      charInfo[currentPlayer.special]
      :
        currentPlayer.role === 'bad'
        ?
        charInfo[BAD_GUY]
        :
        charInfo[GOOD_GUY]
      }
    </h3>
  </div>
);

export default PlayerCard;
