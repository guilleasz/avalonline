import React from 'react';

const ChooseLady = ({ state, currentPlayer, lady, player, selectLady }) => (
  state === 'lady' && currentPlayer === lady && currentPlayer !== player ?
    <div className="col-xs-2 ladyCardContainer">
      <button onClick={() => selectLady(player)}>
        <img
          className="selectLady img-responsive"
          src="/assets/card_back_other.png"
          alt="Lady"
        />
      </button>
    </div>
    : null
);

export default ChooseLady;
