import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PlayerCard from '../../../mobile/components/PlayerCard';
import * as characters from '../../../characters';
import { charInfo } from '../../../charactersinfo';


describe('Player Card component', () => {
  it('should render a character card for a Player', () => {
    const wrapper = shallow(<PlayerCard currentPlayer={{ special: characters.MORDERED }} />);
    expect(wrapper.find('img').prop('src')).to.equal(`/assets/${characters.MORDERED.toLowerCase()}.png`);
  });
  it("should display the character's info", () => {
    const wrapper = shallow(<PlayerCard currentPlayer={{ special: characters.MERLIN }} />);
    expect(wrapper.find('p').text()).to.equal(charInfo[characters.MERLIN]);
  });
});
