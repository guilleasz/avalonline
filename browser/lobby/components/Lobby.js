import React from 'react';

const Lobby = ({ players }) => (
  <div>
    { players && Object.keys(players).map((id) => {
      return (<h1 key={id}>{players[id].name}</h1>);
    })}
  </div>
);

export default Lobby;
