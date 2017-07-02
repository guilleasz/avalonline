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
        {
          gameState.state === 'choosing' ?
            <h3>{players[gameState.turnOrder[gameState.questLeader]].name} will choose the players for the quest</h3>
          : null
        }
      </Fade>
    </div>
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
