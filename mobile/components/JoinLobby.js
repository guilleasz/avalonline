import React from 'react';

const JoinLobby = ({ lobbyValue, handleChange, joinLobby }) => (
  <div className="joinLobby">
    <h1>Join a Lobby</h1>
    <input onChange={e => handleChange(e.target.value)} value={lobbyValue} />
    <button className="btn btn-success" onClick={joinLobby}>Join</button>
  </div>
);

export default JoinLobby;
