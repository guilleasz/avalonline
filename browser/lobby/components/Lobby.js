import React from 'react';
import GameBoardContainer from '../containers/GameBoardContainer'

const Lobby = ({ players, lobbyId, startGame, started }) => (
  !started ?
  <div>
    <div>
      <h1>Visit <strong>TEMPURL/mobile</strong> and enter code <strong>{lobbyId}</strong></h1>
    </div>
    <div>
      <h2>Players in Lobby:</h2>
      { players && Object.keys(players).map(id => (<h2 key={id}>{players[id].name}</h2>))}
    </div>
    <button onClick={startGame}>Start Game!</button>
  </div>
  :
  <div>
    <h1>GAME STARTED</h1>
    <GameBoardContainer lobbyId={lobbyId} />
  </div>
);

export default Lobby;
