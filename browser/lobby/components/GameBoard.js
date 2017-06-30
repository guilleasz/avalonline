import React from 'react';
import PlayerDisplayTurnContainer from '../containers/PlayerDisplayTurnContainer';
import RoundDisplayContainer from '../containers/RoundDisplayContainer';
import VoteDisplayContainer from '../containers/VoteDisplayContainer';
import QuestResultAnimation from './QuestResultAnimation';
// <img alt={`game_board_${Object.keys(players).length}.png`}
// src={`/game_board_${Object.keys(players).length}.png`} />

const Gameboard = ({
  lobbyId,
  players,
  isFlipped,
  startFlipping,
  shuffle,
  startShuffling,
  questResult
}) => (
  <div className={`game_board game_board_${Object.keys(players).length}`} >
    <PlayerDisplayTurnContainer lobbyId={lobbyId} />
    <RoundDisplayContainer lobbyId={lobbyId} />
    <VoteDisplayContainer lobbyId={lobbyId} />
    <QuestResultAnimation
      isFlipped={isFlipped}
      startFlipping={startFlipping}
      shuffle={shuffle}
      startShuffling={startShuffling}
      questResult={questResult}
    />
  </div>
);

export default Gameboard;
