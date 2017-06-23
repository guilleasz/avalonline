import React from 'react';
import PlayerDisplayTurnContainer from '../containers/PlayerDisplayTurnContainer';
import RoundDisplayContainer from '../containers/RoundDisplayContainer';


const Lobby = ({ lobbyId }) => (

  <div>
    <h1>THIS IS THE GAMEBOARD BRUH! FOR LOBBY {lobbyId}</h1>
    <PlayerDisplayTurnContainer lobbyId={lobbyId} />
    <RoundDisplayContainer lobbyId={lobbyId} />
  </div>
);

export default Lobby;
