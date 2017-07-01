import React from 'react';

const PlayerDisplayTurn = ({ player, isQuestLeader, onQuest, numPlayers }) => (
  <div className={`flex-item player-card players_${numPlayers} ${isQuestLeader ? 'quest-leader' : ''} ${onQuest ? 'on-quest' : ''}`}>
    <div className={`${isQuestLeader ? 'quest-leader' : ''} ${onQuest ? 'on-quest' : ''}`} >
      <div className="player-picture">
        <img alt="Player" width="100%" src={player.downloadURL ? player.downloadURL : '/assets/card_back_player.png'} />
      </div>
      <div className="player-card-name">
        <div>{player.name}</div>
      </div>
    </div>
  </div>
);

export default PlayerDisplayTurn;
