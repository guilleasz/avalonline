/* eslint-disable no-nested-ternary */
import React from 'react';
import { charInfo, GOOD_GUY, BAD_GUY } from '../../charactersinfo';
import Anime from 'react-anime';

const PlayerCard = ({
  currentPlayer,
}) => (
  currentPlayer ?
    <Anime
      easing="easeInQuad"
      translateY={[-500, 0]}
    >
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
    </Anime>
    : null
);

export default PlayerCard;
