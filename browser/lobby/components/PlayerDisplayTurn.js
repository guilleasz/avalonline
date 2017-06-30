import React from 'react';

const PlayerDisplayTurn = ({ player, isQuestLeader, onQuest }) => (
  <div className={isQuestLeader ? 'flex-item player-card quest-leader' : 'flex-item player-card'}>
    <div className="ant-card ant-card-bordered">
      <div className="ant-card-body">
        <div className="custom-image">
          <img alt="Player" width="100%" src={player.downloadURL ? player.downloadURL : '/assets/card_back_player.png'} />
        </div>
        <div className="custom-card">
          <h3>{player.name}</h3>
        </div>
      </div>
    </div>
  </div>
);

export default PlayerDisplayTurn;
