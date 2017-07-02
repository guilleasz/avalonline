import React from 'react';
import VoteCard from './VoteCard';

const PlayerDisplayTurn = ({ player, isQuestLeader, onQuest, numPlayers, questApprovalVote, showCard }) => (
  <div className={`flex-item player-card players_${numPlayers} ${isQuestLeader ? 'quest-leader' : ''} ${onQuest ? 'on-quest' : ''}`}>
    <div className={`${isQuestLeader ? 'quest-leader' : ''} ${onQuest ? 'on-quest' : ''}`} >
      <div className="player-picture">
        <img alt="Player" width="100%" src={player.downloadURL ? player.downloadURL : '/assets/card_back_player.png'} />
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

export default PlayerDisplayTurn;
