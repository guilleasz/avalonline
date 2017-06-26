import React from 'react';

const PlayerNameItem = ({ name, questPlayers, playerId, questLeader }) => (
  <div className="col-xs-7">
    <p className={`name ${questPlayers && questPlayers.includes(playerId) ? 'selected' : ''} ${questLeader === playerId ? 'turn' : ''}`}>
      {name}
    </p>
  </div>
);


export default PlayerNameItem;
