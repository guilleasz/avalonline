import React from 'react';

const MainPage = ({ addLobby }) => (
  <div className="lobbyhome lobby-background">
    <h1 id="title">&nbsp;</h1>
    <h1>Welcome to Avalon-Online!</h1>
    <h2>The Game Board will be displayed here on the browser. After you create a lobby, you will be given a code.</h2>
    <h2>Vist avalOnline.herokuapp.com/mobile and enter in the code to join the lobby on your phone!</h2>
    <h3>&nbsp;</h3>
    <button type="button" onClick={addLobby} className="btn btn-success">Create Lobby</button>
  </div>
);


export default MainPage;
