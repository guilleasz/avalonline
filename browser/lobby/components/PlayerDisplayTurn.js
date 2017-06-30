import React from 'react';

const PlayerDisplayTurn = ({ player, isQuestLeader, onQuest }) => (
  <div className={`flex-item player-card ${isQuestLeader ? 'quest-leader' : ''} ${onQuest ? 'on-quest' : ''}`} >
    <div className="ant-card ant-card-bordered">
      <div className="ant-card-body">
        <div className="custom-image">
          <img alt="Player" width="100%" src={player.downloadURL ? player.downloadURL : '/assets/card_back_player.png'} />
        </div>
        <div className="custom-card">
          <div className="font-consistent">{player.name}</div>
        </div>
      </div>
    </div>
  </div>
);

export default PlayerDisplayTurn;
