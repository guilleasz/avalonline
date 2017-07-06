import React from 'react';

const Lady = ({ display, player, closeLady }) => (
  display ?
    <div
      style={{
        backgroundImage: `url(${player && player.role === 'bad' ? '/assets/evil-card.png' : '/assets/good_card_back.png'})`,
      }}
      className="ladyCard"
    >
      <p>
        <span className="name">{player && player.name}</span>
      </p>
      <div>
        <img
          src={player && player.role === 'bad' ? '/assets/evil-card.png' : '/assets/good_card_back.png'}
          alt={player && player.role}
          className="img-responsive"
        />
      </div>
      <button onClick={closeLady} className="closeLady">OK</button>
    </div>
    : null
);

export default Lady;
