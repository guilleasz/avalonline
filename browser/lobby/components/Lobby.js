import React from 'react';
import GameBoardContainer from '../containers/GameBoardContainer';
import Anime from 'react-anime'

const Lobby = ({ players, lobbyId, handleSubmit, started }) => (
  !started ?
    <div>
      <div className="col-sm-8 col-md-offset-2">
        <div className="page-header">
          <h1 className="cursive together">Visit&nbsp;</h1>
          <h1 className="cursive bold together">TEMPURL/mobile&nbsp;</h1>
          <h1 className="cursive together">and enter code:&nbsp;</h1>
          <h1 className="cursive bold together">{lobbyId}</h1>
        </div>
        <div>
          <h2 className="player-name">Players in Lobby:</h2>
          <div className="col-sm-6">
            { players && Object.keys(players).map((id, i) => {
              if (i % 2 === 0) {
                return (
                  <Anime
                    easing="easeInCubic"
                    translateX={[-300, 0]}
                  >
                    <h2 className="player-name" key={id}>{players[id].name}</h2>
                  </Anime>);
              }
              return null;
            })}
          </div>
          <div className="col-sm-6">
            { players && Object.keys(players).map((id, i) => {
              if (i % 2) {
                return (
                  <Anime
                    easing="easeInCubic"
                    translateX={[300, 0]}

                  >
                    <h2 className="player-name" key={id}>{players[id].name}</h2>
                  </Anime>);
              }
              return null;
            })}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="cursive game-options">
          <button type="submit" className="btn btn-primary btn-lg col-xs-4 col-xs-offset-4 start-game">Start Adventure!</button>
          <legend className="legend">Choose Game Options</legend>
          <div className="col-sm-4 col-md-offset-4">
            <div className="input-group">
              <span className="input-group-addon">
                <input type="checkbox" id="percival" name="percival" value="percival" />
                <label className="game-options" htmlFor="percival">Percival</label>
              </span>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <input type="checkbox" id="morgana" name="morgana" value="morgana" />
                <label className="game-options" htmlFor="morgana">Morgana</label>
              </span>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <input type="checkbox" id="mordred" name="mordred" value="mordred" />
                <label className="game-options" htmlFor="mordred">Mordred</label>
              </span>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <input type="checkbox" id="oberon" name="oberon" value="oberon" />
                <label className="game-options" htmlFor="oberon">Oberon</label>
              </span>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <input type="checkbox" id="lady" name="lady" value="lady" />
                <label className="game-options" htmlFor="lady">Lady of the Lake</label>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
    :
    <GameBoardContainer lobbyId={lobbyId} />
);

export default Lobby;
