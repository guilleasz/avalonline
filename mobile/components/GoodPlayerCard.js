import React from 'react';
import loadImage from 'blueimp-load-image';
import { ASSASSIN } from '../../characters';

const GoodPlayerCard = ({ player, assassinate, currentPlayer, index }) => {
  let playerPicture = null;
  return (
    <div
      tabIndex={index}
      role="button"
      onClick={() => currentPlayer.special === ASSASSIN && assassinate(player)}
      className="goodPlayerCard"
    >
      <p className="name">{player && player.name}</p>
      <div className="player-picture" ref={(elem) => { playerPicture = elem; }} >
        {
          player && player.downloadURL ? (() => {
            loadImage(player.downloadURL, (img) => {
              if (playerPicture) {
                img.setAttribute('class', 'img-responsive');
                playerPicture.innerHTML = '';
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
};

export default GoodPlayerCard;
