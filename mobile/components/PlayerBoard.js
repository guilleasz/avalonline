import React from 'react';
import PlayersList from './PlayersList';
import VotingCards from './VotingCards';

const PlayerBoard = ({
  players,
  currentPlayer,
  turnOrder,
  currentPlayerId,
  gameState,
  addToQuest,
  removeFromQuest,
  confirmQuest,
  rejectQuest,
  approveQuest,
}) => (
  <div>
    <VotingCards
      currentPlayer={currentPlayerId}
      state={gameState.state}
      questApprovalVote={gameState.questApprovalVote}
      rejectQuest={rejectQuest}
      approveQuest={approveQuest}
    />
    <PlayersList
      players={turnOrder && turnOrder.map(id => ({ ...players[id], uid: id }))}
      currentPlayer={{ ...currentPlayer, uid: currentPlayerId }}
      gameState={gameState}
      addToQuest={addToQuest}
      removeFromQuest={removeFromQuest}
      confirmQuest={confirmQuest}
    />
  </div>
);

export default PlayerBoard;
