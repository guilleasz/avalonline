import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PlayerExtraInfoItem from '../../../mobile/components/PlayerExtraInfoItem';
import * as characters from '../../../characters';

describe('PlayerExtraInfoItem component', () => {
  it('should not render if the hideInfo is true', () => {
    const wrapper = shallow(<PlayerExtraInfoItem
      currentPlayerRole="good"
      playerRole="good"
      hideInfo
    />);
    expect(wrapper.find('.info').length).to.equal(0);
  });
  describe('Good Guys', () => {
    it('should not be visible to anyone', () => {
      const { PERCIVAL, MERLIN } = characters;
      Object.keys(characters).forEach((key) => {
        const character = characters[key];
        if (character !== PERCIVAL && character !== MERLIN) {
          const wrapper = shallow(<PlayerExtraInfoItem
            currentPlayerSpecial={character}
            playerRole="good"
            currentPlayerRole="bad"
          />);
          expect(wrapper.find('.info').text()).to.equal('No Info');
        }
      });
      const goodGuyWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        playerRole="good"
      />);
      const merlinWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        playerRole="good"
        currentPlayerSpecial={MERLIN}
      />);
      const percivalWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        playerRole="good"
        currentPlayerSpecial={PERCIVAL}
      />);
      const badGuyWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="bad"
        playerRole="good"
      />);
      expect(goodGuyWrapper.find('.info').text()).to.equal('No Info');
      expect(merlinWrapper.find('.info').text()).to.equal('No Info');
      expect(percivalWrapper.find('.info').text()).to.equal('No Info');
      expect(badGuyWrapper.find('.info').text()).to.equal('No Info');
    });
  });
  describe('Bad Guys', () => {
    it('should not visible to Oberon', () => {
      const { OBERON } = characters;
      const wrapper = shallow(<PlayerExtraInfoItem
        currentPlayerSpecial={OBERON}
        currentPlayerRole="bad"
        playerRole="bad"
      />);
      expect(wrapper.find('.info').text()).to.equal('No Info');
    });
    it('should be visible to all the other bad guys', () => {
      const { MORGANA, MORDERED, ASSASSIN } = characters;
      const badGuyWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="bad"
        playerRole="bad"
      />);
      const morganaWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="bad"
        currentPlayerSpecial={MORGANA}
        playerRole="bad"
      />);
      const assassinWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="bad"
        currentPlayerSpecial={ASSASSIN}
        playerRole="bad"
      />);
      const morderedWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="bad"
        currentPlayerSpecial={MORDERED}
        playerRole="bad"
      />);
      expect(badGuyWrapper.find('.info').text()).to.equal('Evil');
      expect(morganaWrapper.find('.info').text()).to.equal('Evil');
      expect(assassinWrapper.find('.info').text()).to.equal('Evil');
      expect(morderedWrapper.find('.info').text()).to.equal('Evil');
    });
    it('should be visible to Merlin', () => {
      const { MERLIN } = characters;
      const wrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        currentPlayerSpecial={MERLIN}
        playerRole="bad"
      />);
      expect(wrapper.find('.info').text()).to.equal('Evil');
    });
    it('should not be visible to any other good guy', () => {
      const { PERCIVAL } = characters;
      const goodGuyWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        playerRole="bad"
      />);
      const percivalWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        playerRole="bad"
        currentPlayerSpecial={PERCIVAL}
      />);
      expect(goodGuyWrapper.find('.info').text()).to.equal('No Info');
      expect(percivalWrapper.find('.info').text()).to.equal('No Info');
    });
  });
  describe('Merlin', () => {
    it('should be visible to Percival as Merlin or Morgana', () => {
      const { MERLIN, PERCIVAL, MORGANA } = characters;
      const wrapper = shallow(<PlayerExtraInfoItem
        special={MERLIN}
        currentPlayerSpecial={PERCIVAL}
        currentPlayerRole="good"
        playerRole="good"
      />);
      expect(wrapper.find('.info').text()).to.equal(`${MERLIN} or ${MORGANA}`);
    });
    it('should not be visible to any bad guy', () => {
      const { MERLIN, PERCIVAL } = characters;
      Object.keys(characters).forEach((key) => {
        if (characters[key] !== MERLIN && characters[key] !== PERCIVAL) {
          const wrapper = shallow(<PlayerExtraInfoItem
            special={MERLIN}
            currentPlayerSpecial={characters[key]}
            currentPlayerRole="bad"
            playerRole="good"
          />);
          expect(wrapper.find('.info').text()).to.equal('No Info');
        }
      });
      const wrapper = shallow(<PlayerExtraInfoItem
        special={MERLIN}
        currentPlayerRole="bad"
        playerRole="good"
      />);
      expect(wrapper.find('.info').text()).to.equal('No Info');
    });
  });
  it('should not be visible to any other good guy', () => {
    const { MERLIN } = characters;
    const wrapper = shallow(<PlayerExtraInfoItem
      special={MERLIN}
      cuurentPlayerRole="bad"
      playerRole="good"
    />);
    expect(wrapper.find('.info').text()).to.equal('No Info');
  });
  describe('Morgana', () => {
    it('should be visible to Percival as Merlin or Morgana', () => {
      const { MERLIN, PERCIVAL, MORGANA } = characters;
      const wrapper = shallow(<PlayerExtraInfoItem
        special={MORGANA}
        currentPlayerSpecial={PERCIVAL}
        currentPlayerRole="good"
        playerRole="bad"
      />);
      expect(wrapper.find('.info').text()).to.equal(`${MERLIN} or ${MORGANA}`);
    });
    it('should not visible to Oberon', () => {
      const { OBERON, MORGANA } = characters;
      const wrapper = shallow(<PlayerExtraInfoItem
        currentPlayerSpecial={OBERON}
        currentPlayerRole="bad"
        playerRole="bad"
        special={MORGANA}
      />);
      expect(wrapper.find('.info').text()).to.equal('No Info');
    });
    it('should be visible to all the other bad guys', () => {
      const { MORGANA, MORDERED, ASSASSIN } = characters;
      const badGuyWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="bad"
        playerRole="bad"
        special={MORGANA}
      />);
      const assassinWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="bad"
        currentPlayerSpecial={ASSASSIN}
        playerRole="bad"
        special={MORGANA}
      />);
      const morderedWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="bad"
        currentPlayerSpecial={MORDERED}
        playerRole="bad"
        special={MORGANA}
      />);
      expect(badGuyWrapper.find('.info').text()).to.equal('Evil');
      expect(assassinWrapper.find('.info').text()).to.equal('Evil');
      expect(morderedWrapper.find('.info').text()).to.equal('Evil');
    });
    it('should be visible to Merlin', () => {
      const { MERLIN, MORGANA } = characters;
      const wrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        currentPlayerSpecial={MERLIN}
        playerRole="bad"
        special={MORGANA}
      />);
      expect(wrapper.find('.info').text()).to.equal('Evil');
    });
    it('should not be visible to any other good guy', () => {
      const wrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        playerRole="bad"
      />);
      expect(wrapper.find('.info').text()).to.equal('No Info');
    });
  });
  describe('Mordered', () => {
    it('should not visible to Oberon', () => {
      const { OBERON, MORDERED } = characters;
      const wrapper = shallow(<PlayerExtraInfoItem
        currentPlayerSpecial={OBERON}
        currentPlayerRole="bad"
        playerRole="bad"
        special={MORDERED}
      />);
      expect(wrapper.find('.info').text()).to.equal('No Info');
    });
    it('should be visible to all the other bad guys', () => {
      const { MORDERED, MORGANA, ASSASSIN } = characters;
      const badGuyWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="bad"
        playerRole="bad"
        special={MORDERED}
      />);
      const assassinWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="bad"
        currentPlayerSpecial={ASSASSIN}
        playerRole="bad"
        special={MORDERED}
      />);
      const morganaWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="bad"
        currentPlayerSpecial={MORGANA}
        playerRole="bad"
        special={MORDERED}
      />);
      expect(badGuyWrapper.find('.info').text()).to.equal('Evil');
      expect(assassinWrapper.find('.info').text()).to.equal('Evil');
      expect(morganaWrapper.find('.info').text()).to.equal('Evil');
    });
    it('should be invisible to all good guys', () => {
      const { PERCIVAL, MORDERED, MERLIN } = characters;
      const merlinWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        currentPlayerSpecial={MERLIN}
        playerRole="bad"
        special={MORDERED}
      />);
      const percivalWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        currentPlayerSpecial={PERCIVAL}
        playerRole="bad"
        special={MORDERED}
      />);
      const goodGuyWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        playerRole="bad"
        special={MORDERED}
      />);
      expect(merlinWrapper.find('.info').text()).to.equal('No Info');
      expect(percivalWrapper.find('.info').text()).to.equal('No Info');
      expect(goodGuyWrapper.find('.info').text()).to.equal('No Info');
    });
  });
  describe('Percival', () => {
    it('should not be visible to anyone', () => {
      const { PERCIVAL, MERLIN } = characters;
      Object.keys(characters).forEach((key) => {
        if (characters[key] !== PERCIVAL && characters[key] !== MERLIN) {
          const wrapper = shallow(<PlayerExtraInfoItem
            currentPlayerSpecial={characters[key]}
            cuurentPlayerRole="bad"
            playerRole="good"
            special={PERCIVAL}
          />);
          expect(wrapper.find('.info').text()).to.equal('No Info');
        }
      });
      const goodGuyWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        playerRole="good"
        special={PERCIVAL}
      />);
      const merlinWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        playerRole="good"
        special={PERCIVAL}
        currentPlayerSpecial={MERLIN}
      />);
      const badGuyWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="bad"
        playerRole="good"
        special={PERCIVAL}
      />);
      expect(goodGuyWrapper.find('.info').text()).to.equal('No Info');
      expect(merlinWrapper.find('.info').text()).to.equal('No Info');
      expect(badGuyWrapper.find('.info').text()).to.equal('No Info');
    });
  });
  describe('Oberon', () => {
    it('should be visible to Merlin', () => {
      const { MERLIN, OBERON } = characters;
      const wrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        currentPlayerSpecial={MERLIN}
        playerRole="bad"
        special={OBERON}
      />);
      expect(wrapper.find('.info').text()).to.equal('Evil');
    });
    it('should not be visible to anyone else', () => {
      const { PERCIVAL, MERLIN, OBERON } = characters;
      Object.keys(characters).forEach((key) => {
        const character = characters[key];
        if (characters !== PERCIVAL && character !== MERLIN && character !== OBERON) {
          const wrapper = shallow(<PlayerExtraInfoItem
            currentPlayerSpecial={character}
            cuurentPlayerRole="bad"
            playerRole="bad"
            SPECIAL={OBERON}
          />);
          expect(wrapper.find('.info').text()).to.equal('No Info');
        }
      });
      const goodGuyWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        playerRole="bad"
        special={OBERON}
      />);
      const percivalWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        playerRole="bad"
        special={OBERON}
        currentPlayerSpecial={PERCIVAL}
      />);
      const badGuyWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="bad"
        playerRole="bad"
        special={OBERON}
      />);
      expect(goodGuyWrapper.find('.info').text()).to.equal('No Info');
      expect(percivalWrapper.find('.info').text()).to.equal('No Info');
      expect(badGuyWrapper.find('.info').text()).to.equal('No Info');
    });
  });
  describe('ASSASSIN', () => {
    it('should be visible to Merlin', () => {
      const { MERLIN, ASSASSIN } = characters;
      const wrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        currentPlayerSpecial={MERLIN}
        playerRole="bad"
        special={ASSASSIN}
      />);
      expect(wrapper.find('.info').text()).to.equal('Evil');
    });
    it('should not visible to Oberon', () => {
      const { OBERON, ASSASSIN } = characters;
      const wrapper = shallow(<PlayerExtraInfoItem
        currentPlayerSpecial={OBERON}
        currentPlayerRole="bad"
        playerRole="bad"
        special={ASSASSIN}
      />);
      expect(wrapper.find('.info').text()).to.equal('No Info');
    });
    it('should be visible to all the other bad guys', () => {
      const { MORDERED, MORGANA, ASSASSIN } = characters;
      const badGuyWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="bad"
        playerRole="bad"
        special={ASSASSIN}
      />);
      const morderedWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="bad"
        currentPlayerSpecial={MORDERED}
        playerRole="bad"
        special={ASSASSIN}
      />);
      const morganaWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="bad"
        currentPlayerSpecial={MORGANA}
        playerRole="bad"
        special={ASSASSIN}
      />);
      expect(badGuyWrapper.find('.info').text()).to.equal('Evil');
      expect(morderedWrapper.find('.info').text()).to.equal('Evil');
      expect(morganaWrapper.find('.info').text()).to.equal('Evil');
    });
    it('should be invisible to all other good guys', () => {
      const { PERCIVAL, ASSASSIN } = characters;
      const percivalWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        currentPlayerSpecial={PERCIVAL}
        playerRole="bad"
        special={ASSASSIN}
      />);
      const goodGuyWrapper = shallow(<PlayerExtraInfoItem
        currentPlayerRole="good"
        playerRole="bad"
        special={ASSASSIN}
      />);
      expect(percivalWrapper.find('.info').text()).to.equal('No Info');
      expect(goodGuyWrapper.find('.info').text()).to.equal('No Info');
    });
  });
});
