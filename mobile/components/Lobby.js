import React from 'react';
import PlayerBoardContainer from '../containers/PlayerBoardContainer';

const Lobby = ({ handleChange, setNickname, name, nickname, started, params }) => (
  !started ?
    <div>
      <h1>Welcome: {nickname}</h1>
      <input placeholder="Enter Name" onChange={e => handleChange(e.target.value)} value={name} />
      <button className="btn btn-success" onClick={setNickname}>Submit</button>
      <p>Waiting to Start...</p>
    </div> : <PlayerBoardContainer params={params} />
);

export default Lobby;
