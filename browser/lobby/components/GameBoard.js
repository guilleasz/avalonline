import React from 'react';
import PlayerDisplayTurnContainer from '../containers/PlayerDisplayTurnContainer';
import RoundDisplayContainer from '../containers/RoundDisplayContainer';
import VoteDisplayContainer from '../containers/VoteDisplayContainer';

// <img alt={`game_board_${Object.keys(players).length}.png`}
// src={`/game_board_${Object.keys(players).length}.png`} />

const Gameboard = ({ lobbyId, players }) => (
  <div className={`game_board_${Object.keys(players).length}`} >
    <PlayerDisplayTurnContainer lobbyId={lobbyId} />
    <RoundDisplayContainer lobbyId={lobbyId} />
    <VoteDisplayContainer lobbyId={lobbyId} />
  </div>
);

export default Gameboard;
