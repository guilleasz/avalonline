import React from 'react';

const ChooseLady = ({ state, currentPlayer, lady, player, selectLady }) => (
  state === 'lady' && currentPlayer === lady && currentPlayer !== player ?
    <div className="col-xs-2 ladyCardContainer">
      <img
        className="selectLady img-responsive"
        onClick={() => selectLady(player)}
        src="/assets/ladyOfTheLake.jpg"
        alt="Lady"
      />
    </div>
    : null
);

export default ChooseLady;
