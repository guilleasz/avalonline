import React from 'react';

const Lady = ({ display, player, closeLady }) => (
  display ?
    <div className="card">
      <span className="name">{player && player.name}</span> is
      <span className="role">{(player && player.role === 'bad') ? 'Evil' : 'Good'}</span>
      <button onClick={closeLady} className="closeLady">OK</button>
    </div>
    : null
);

export default Lady;
