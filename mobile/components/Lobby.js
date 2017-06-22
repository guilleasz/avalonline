import React from 'react';

const Lobby = ({ handleChange, setNickname, name }) => (
  <div>
    <h1>Join a Lobby</h1>
    <input onChange={e => handleChange(e.target.value)} value={name} />
    <button className="btn btn-success" onClick={setNickname}>Enter Your Name</button>
  </div>
);

export default Lobby;
