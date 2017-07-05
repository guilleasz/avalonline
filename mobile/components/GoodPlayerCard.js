import React from 'react';
import loadImage from 'blueimp-load-image';
import { ASSASSIN } from '../../characters';

let playerPicture = null;
let loaded = false;
const GoodPlayerCard = ({ player, assassinate, currentPlayer, index }) => (
  <div
    tabIndex={index}
    role="button"
    onClick={() => currentPlayer.special === ASSASSIN && assassinate(player)}
    className="goodPlayerCard col-xs-4"
  >
    <p className="name">{player && player.name}</p>
    <div className="player-picture" ref={(elem) => { playerPicture = elem; }} >
      {
        player && player.downloadURL ? (() => {
          loadImage(player.downloadURL, (img) => {
            if (playerPicture && !loaded) {
              loaded = true;
              playerPicture.appendChild(img);
            }
          }, {
            maxHeight: 500,
            maxWidth: 500,
            orientation: player.orientation ? player.orientation : true,
          });
          return null;
        })()
        :
        <img className="img-responsive" alt="Player" width="100%" src="/assets/card_back_player.png" />
      }
    </div>
  </div>
);

export default GoodPlayerCard;
