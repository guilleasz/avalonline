import React from 'react';

const ChooseLady = ({ state, currentPlayer, lady, player, selectLady }) => (
  state === 'lady' && currentPlayer === lady && currentPlayer !== player ?
    <div>
      <button onClick={() => selectLady(player)}>Reveal Loyalty</button>
    </div>
    : null
);

export default ChooseLady;
