import React from 'react';
import GameBoardContainer from '../containers/GameBoardContainer';

const Lobby = ({ players, lobbyId, handleSubmit, started }) => (
  !started ?
    <div className="flex-container">
      <div>
        <h1>Visit <strong>TEMPURL/mobile</strong> and enter code <strong>{lobbyId}</strong></h1>
      </div>
      <div>
        <h2>Players in Lobby:</h2>
        { players && Object.keys(players).map(id => (<h2 key={id}>{players[id].name}</h2>))}
      </div>
      <form onSubmit={handleSubmit}
      >
        <legend>Choose Game Options</legend>
        <div>
          <input type="checkbox" id="merlin" name="merlin" value="merlin" />
          <label htmlFor="merlin">Merlin and Assassin</label>
          <input type="checkbox" id="percival" name="percival" value="percival" />
          <label htmlFor="percival">Percival</label>
          <input type="checkbox" id="morgana" name="morgana" value="morgana" />
          <label htmlFor="morgana">Morgana</label>
          <input type="checkbox" id="mordred" name="mordred" value="mordred" />
          <label htmlFor="mordred">Mordred</label>
          <input type="checkbox" id="oberon" name="oberon" value="oberon" />
          <label htmlFor="oberon">Oberon</label>
        </div>
        <div>
          <button type="submit">Start Game!</button>
        </div>
      </form>
    </div>
    :
    <GameBoardContainer lobbyId={lobbyId} />
);

export default Lobby;
