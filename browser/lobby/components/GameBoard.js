import React from 'react';
import PlayerDisplayTurnContainer from '../containers/PlayerDisplayTurnContainer';
import RoundDisplayContainer from '../containers/RoundDisplayContainer';
import VoteDisplayContainer from '../containers/VoteDisplayContainer';
import Anime from 'react-anime';

// <img alt={`game_board_${Object.keys(players).length}.png`}
// src={`/game_board_${Object.keys(players).length}.png`} />

const Gameboard = ({ lobbyId, players, result }) => (
  <div className={`game_board_${Object.keys(players).length}`} >
    <Anime
      easing="easeInQuint"
      translateY={[-1000, 400]}
      duration={1500}
    >
    <div className="endGame">
      {result || null}
    </div>
    </Anime>
    <PlayerDisplayTurnContainer lobbyId={lobbyId} />
    <RoundDisplayContainer lobbyId={lobbyId} />
    <VoteDisplayContainer lobbyId={lobbyId} />
  </div>
);

export default Gameboard;
