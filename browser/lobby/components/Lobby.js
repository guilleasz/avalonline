import React from 'react';
import GameBoardContainer from '../containers/GameBoardContainer';
import Anime from 'react-anime';
import { charInfo } from '../../../charactersinfo';
import { MORDERED, MORGANA, PERCIVAL, OBERON, LADY } from '../../../characters';

const autoNameCheck = true;

const Lobby = ({ players, lobbyId, handleSubmit, started, selectedChar, selectChar, animatedPlayers, addPlayer }) => (
  !started ?
    <div className="row lobby-background">
      <div className="col-sm-8 col-sm-offset-2">
        <div className="page-header">
          <h1 className="cursive together">Join the lobby:&nbsp;</h1>
          <h1 className="cursive bold together">avalon-online.herokuapp.com/mobile</h1>
          <h1 className="cursive together">&nbsp;And Enter Code &nbsp;</h1>
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
                    autoplay={(() => {
                      if (animatedPlayers.find(pId => id === pId)) {
                        return false;
                      }
                      addPlayer(id);
                      return true;
                    })()
                    }
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
                    autoplay={(() => {
                      if (animatedPlayers.find(pId => id === pId)) {
                        return false;
                      }
                      addPlayer(id);
                      return true;
                    })()
                    }

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
          <legend className="legend">Choose Game Options </legend>
          <div className="col-xs-4">
            {selectedChar ? <h2>{charInfo[selectedChar]}</h2> : null}
          </div>
          <div className="col-xs-4">
            <div className="input-group popup">
              <span className="input-group-addon">
                <label className="game-options"> &nbsp; <span className="glyphicon glyphicon-question-sign" onClick={() => selectChar(PERCIVAL)} /> &nbsp;Percival  &nbsp; </label>
                <input type="checkbox" id="percival" name="percival" value="percival" />
              </span>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <label className="game-options"> &nbsp; <span className="glyphicon glyphicon-question-sign" onClick={() => selectChar(MORGANA)}/> &nbsp;Morgana  &nbsp; </label>
                <input type="checkbox" id="morgana" name="morgana" value="morgana" />
              </span>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <label className="game-options"> &nbsp; <span className="glyphicon glyphicon-question-sign" onClick={() => selectChar(MORDERED)} /> &nbsp;Mordred &nbsp; </label>
                <input type="checkbox" id="mordred" name="mordred" value="mordred" />
              </span>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <label className="game-options"> &nbsp; <span className="glyphicon glyphicon-question-sign" onClick={() => selectChar(OBERON)} /> &nbsp;Oberon &nbsp; </label>
                <input type="checkbox" id="oberon" name="oberon" value="oberon" />
              </span>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <label className="game-options"> &nbsp; <span className="glyphicon glyphicon-question-sign" onClick={() => selectChar(LADY)} /> &nbsp;Lady of the Lake &nbsp; </label>
                <input type="checkbox" id="lady" name="lady" value="lady" />
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
