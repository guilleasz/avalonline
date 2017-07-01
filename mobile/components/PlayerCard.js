/* eslint-disable no-nested-ternary */
import React from 'react';
import Anime from 'react-anime';
import { charInfo, GOOD_GUY, BAD_GUY } from '../../charactersinfo';

const PlayerCard = ({
  currentPlayer,
  toggleCard,
  seeCard,
  animateCard,
  cardHasAnimate,
}) => (
  currentPlayer ?
    <Anime
      easing="easeInQuad"
      translateY={seeCard ? [-2000, 0] : [0, -2000]}
      autoplay={animateCard}
      complete={cardHasAnimate}
    >
      <div className="playerCardContainer">
        <div className="playerCard">
          {currentPlayer && currentPlayer.special ?
            <img
              className="img-responsive"
              alt={currentPlayer.special}
              src={`/assets/${currentPlayer.special}.png`}
            /> :
              <img
                className="img-responsive"
                alt={currentPlayer.special}
                src={`/assets/${currentPlayer.role}-guy_${currentPlayer.charIndex}.png`}
              />
          }
          <p>{
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
          </p>
          <button onClick={toggleCard}>Hide Card</button>
        </div>
      </div>
    </Anime>
    : null
);

export default PlayerCard;
