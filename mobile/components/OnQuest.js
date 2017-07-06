import React from 'react';


const listQuestPlayers = (questPlayers, players) => {
  let string = '';
  Object.keys(questPlayers).forEach((id, i) => {
    let punct = ', ';
    if (i === Object.keys(questPlayers).length - 2) punct = ' and ';
    if (i === Object.keys(questPlayers).length - 1) punct = '';
    string += players[id].name + punct;
  });
  return `${string} are on a quest`;
};

const OnQuest = ({ state, questPlayers, currentPlayer, players }) => (
  state === 'questing' && !questPlayers[currentPlayer] ?
    <div className="onQuest">
      <p>
        {players && listQuestPlayers(questPlayers, players)}
      </p>
    </div>
    : null
);

export default OnQuest;
