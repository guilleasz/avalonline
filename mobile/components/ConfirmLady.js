import React from 'react';

const ConfirmLady = ({ display, player, showLady, cancelLady }) => (
  display ?
    <div className="confirmLady">
      Are you sure you want to Reveal <span className="playerName">{player}</span>&#39;s loyalty?
      <button onClick={showLady} className="showLady">Yes</button>
      <button onClick={cancelLady} className="cancelLady">No</button>
    </div>
    : null
);

export default ConfirmLady;
