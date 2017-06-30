import React from 'react';

const PlayerNameItem = ({ name, questPlayers, playerId, questLeader, isLady }) => (
  <div className="col-xs-7">
    <div className="col-xs-8">
      <p className={`name ${questPlayers && questPlayers.includes(playerId) ? 'selected' : ''} ${questLeader === playerId ? 'turn' : ''}`}>
        {name}
      </p>
    </div>
    <div className="col-xs-4">
      {isLady ? <img className="img-responsive" alt="lady" src="/assets/lady.png" /> : null}
    </div>
  </div>
);


export default PlayerNameItem;
