import React from 'react';
import QuestCard from './QuestCard';

const QuestResultAnimation = ({ isFlipped, startFlipping, shuffle, startShuffling, questResult }) => (
  startShuffling ?
    <div style={{ position: 'absolute', top: 0, width: '100%' }}>
      {Object.keys(questResult).map((id, i) => (
        <QuestCard
          isFlipped={isFlipped}
          startFlipping={startFlipping}
          shuffle={shuffle}
          index={i}
          key={id}
          vote={questResult[id]}
          length={Object.keys(questResult).length}
        />
      ))}
    </div>
    : null
);

export default QuestResultAnimation;
