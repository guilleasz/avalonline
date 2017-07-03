import React from 'react';
import VoteCard from './VoteCard';
import loadImage from 'blueimp-load-image';


const PlayerDisplayTurn = ({ player, isQuestLeader, onQuest, numPlayers, questApprovalVote, showCard }) => {
  let playerPicture = null;
  let loaded = false;
  return (
    <div className={`flex-item player-card players_${numPlayers} ${isQuestLeader ? 'quest-leader' : ''} ${onQuest ? 'on-quest' : ''}`}>
      <div className={`${isQuestLeader ? 'quest-leader' : ''} ${onQuest ? 'on-quest' : ''}`} >
        <div className="player-picture" ref={(elem) => { playerPicture = elem; }} >
          {
            player.downloadURL ? (() => {
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
            <img alt="Player" width="100%" src="/assets/card_back_player.png" />
          }
        </div>
        <VoteCard
          questApprovalVote={questApprovalVote}
          showCard={showCard}
        />
        <div className="player-card-name">
          <div>{player.name}</div>
        </div>
      </div>
    </div>
  );
};
export default PlayerDisplayTurn;
