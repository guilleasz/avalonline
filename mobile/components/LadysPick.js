import React from 'react';

const LadysPick = ({ pickLady, ladyWindow }) => (
  pickLady && !ladyWindow ?
    <div className="ladysPick">
      <p>{pickLady}</p>
    </div>
    : null
);

export default LadysPick;
