import React from 'react';
import Anime from 'react-anime';
import FlipCard from 'react-flipcard';

const QuestCard = ({ index, isFlipped, startFlipping, shuffle, length, vote }) => (
  <Anime
    easing="easeInSine"
    loop={5}
    direction="alternate"
    translateX={[0, (index > 1 ? -220 * index : 320)]}
    duration={200}
    complete={index === length - 1 && startFlipping}
    autoplay={shuffle}
  >
    <div className="col-md-2">
      <FlipCard
        disabled
        flipped={isFlipped[index]}
      >
        <img className="img-responsive" alt="questBack" src="/assets/card_back_quest.png" />
        <img
          className="img-responsive"
          alt="questBack"
          src={`/assets/${vote ? 'quest_fail.png' : 'quest_success.png'}`}
        />
      </FlipCard>
    </div>
  </Anime>
);

export default QuestCard;
