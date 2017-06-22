import React from 'react';

const Lobby = ({ handleChange, setNickname, name, nickname }) => (
  <div>
    <h1>Welcome: {nickname}</h1>
    <input placeholder="Enter Name" onChange={e => handleChange(e.target.value)} value={name} />
    <button className="btn btn-success" onClick={setNickname}>Submit</button>
    <p>Waiting to Start...</p>
  </div>
);

export default Lobby;
