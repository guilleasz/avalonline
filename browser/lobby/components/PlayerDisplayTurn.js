import React from 'react';
import loadImage from 'blueimp-load-image';
import VoteCard from './VoteCard';
import VoteTracker from './VoteTracker';

let loaded = 0;

const PlayerDisplayTurn = ({
  player,
  isQuestLeader,
  onQuest,
  numPlayers,
  questApprovalVote,
  showCard,
  totalPics,
  roundNum,
  gameLog,
  playerId,
}) => {
  let playerPicture = null;
  return (
    <div className={`flex-item player-card players_${numPlayers} ${isQuestLeader ? 'quest-leader' : ''} ${onQuest ? 'on-quest' : ''}`}>
      <div className={`${isQuestLeader ? 'quest-leader' : ''} ${onQuest ? 'on-quest' : ''}`} >
        <div className="player-picture" ref={(elem) => { playerPicture = elem; }} >
          {
            player.downloadURL ? (() => {
              loadImage(player.downloadURL, (img) => {
                if (playerPicture && loaded < totalPics) {
                  loaded += 1;
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
        <VoteTracker
          prevVote={gameLog && gameLog[`round${roundNum}`]}
          playerId={playerId}
        />
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
