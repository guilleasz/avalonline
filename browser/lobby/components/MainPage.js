import React from 'react';

const MainPage = ({ addLobby }) => (
  <div className="lobbyhome">
    <div>
      <h3>Welcome to the Spacialon Main Page!~</h3>
      <button type="button" onClick={addLobby}>Create Lobby</button>
    </div>
  </div>
);


export default MainPage;
