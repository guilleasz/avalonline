import React from 'react';

const Lady = ({ display, player, closeLady }) => (
  display ?
    <div className="ladyCard">
      <p>
        <span className="name">{player && player.name}</span> is
        <span className="role">{(player && player.role === 'bad') ? 'Evil' : 'Good'}</span>
      </p>
      <div>
        <img alt={player && player.role} />
      </div>
      <button onClick={closeLady} className="closeLady">OK</button>
    </div>
    : null
);

export default Lady;
