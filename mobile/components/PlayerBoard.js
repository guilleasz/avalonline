import React from 'react';
import PlayersList from './PlayersList';
import VotingCards from './VotingCards';
import QuestVoteCards from './QuestVoteCards';
import PlayerCard from './PlayerCard';
import ConfirmLady from './ConfirmLady';
import Lady from './Lady';
import Assassinate from './Assassinate';

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
  successQuest,
  failQuest,
  selectLady,
  confirmLadyWindow,
  cancelLady,
  showLady,
  ladyWindow,
  closeLady,
  assassinate,
}) => (
  <div>
    <Assassinate
      currentPlayer={currentPlayer}
      state={gameState.state}
      goodPlayers={Object.keys(players)
        .filter(uid => players[uid].role === 'good')
        .map(uid => ({ uid, ...players[uid] }))
      }
      assassinate={assassinate}
    />
    <PlayerCard
      currentPlayer={currentPlayer}
    />
    <QuestVoteCards
      currentPlayer={currentPlayerId}
      state={gameState.state}
      questPlayers={gameState.questPlayers}
      questSuccessVote={gameState.questSuccessVote}
      successQuest={successQuest}
      failQuest={failQuest}
    />
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
      selectLady={selectLady}
    />
    <ConfirmLady
      display={confirmLadyWindow}
      player={players && players[gameState.lady].name}
      cancelLady={cancelLady}
      showLady={showLady}
    />
    <Lady
      display={ladyWindow}
      player={players[gameState.lady]}
      closeLady={closeLady}
    />
  </div>
);

export default PlayerBoard;
