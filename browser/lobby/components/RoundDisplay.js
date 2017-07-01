import React from 'react';

const RoundDisplay = ({ roundInfo }) => (
  <div className="flex-item round-display">
    {roundInfo === 'pass' ? <img className="round-display-token" src="/quest_success_token.png" alt="quest_success" /> : null}
    {roundInfo === 'fail' ? <img className="round-display-token" src="/quest_fail_token.png" alt="quest_success" /> : null}
    {roundInfo === 'current' ? <img className="round-display-current" src="/quest_counter.png" alt="quest_counter" /> : null}
  </div>
 /* + roundInfo === 'pass' ? 'round-pass' : roundInfo === 'fail' ? 'round-fail' : '' */
);

export default RoundDisplay;
