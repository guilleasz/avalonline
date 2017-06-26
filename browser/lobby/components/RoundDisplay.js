import React from 'react';

const RoundDisplay = ({ roundInfo, roundNumber }) => (
  <div className="flex-item">
    <h1>{roundInfo === '' ? roundNumber : roundInfo}</h1>
  </div>
);

export default RoundDisplay;
