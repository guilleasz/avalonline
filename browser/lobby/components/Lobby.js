import React from 'react';
import GameBoardContainer from '../containers/GameBoardContainer'

const Lobby = ({ players, lobbyId, startGame, started }) => (
  !started ?
    <div className="flex-container">
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
    <GameBoardContainer lobbyId={lobbyId} />
);

export default Lobby;
