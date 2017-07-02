import React from 'react';
import Anime from 'react-anime';
import PlayerDisplayTurnContainer from '../containers/PlayerDisplayTurnContainer';
import RoundDisplayContainer from '../containers/RoundDisplayContainer';
import VoteDisplayContainer from '../containers/VoteDisplayContainer';
import QuestResultAnimation from './QuestResultAnimation';
import SnackBar from 'react-material-snackbar';
import { default as Fade } from 'react-fade';

const Gameboard = ({
  lobbyId,
  players,
  result,
  isFlipped,
  startFlipping,
  shuffle,
  startShuffling,
  questResult,
  gameState,
  showCard,
}) => (
  <div className={`game_board game_board_${Object.keys(players).length}`} >
    <div className="endGame">
      <Fade
        duration="1"
        style={{ visibility: 'visible' }}
      >
        <div>
          {result || null}
        </div>
      </Fade>
    </div>
    <div className="gameState">
      <Fade
        duration="1"
        style={{ visibility: 'visible' }}
      >
        { gameState.state === 'choosing' ?
          <h2>{players[gameState.turnOrder[gameState.questLeader]].name} will choose the players for the quest</h2>
          : null }
        { gameState.state === 'voting' ?
          <h2>Everyone vote! Either accept or reject the quest!</h2>
          : null }
        { gameState.state === 'questing' ?
          <h2>Players are on the quest! Good luck!</h2>
          : null }
        { gameState.state === 'lady' ?
          <h2>Choose whether or not to use the Lady Token!</h2>
          : null }
        { gameState.state === 'pre-choosing' ?
          <h2>The Lady is revealing the allegiance of a player!</h2>
          : null }
      </Fade>
    </div>
    <PlayerDisplayTurnContainer showCard={showCard} lobbyId={lobbyId} />
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
