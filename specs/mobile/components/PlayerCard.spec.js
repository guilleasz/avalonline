import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import PlayerCard from '../../../mobile/components/PlayerCard';
import * as characters from '../../../characters';
import charInfo from '../../../charactersinfo';

chai.use(sinonChai);

describe('Player Card component', () => {
  it('should render a character for a Player', () => {
    const wrapper = shallow(<PlayerCard characterName={characters.MORDERED} />);
    expect(wrapper.find('h1').text()).to.equal('characters.MORDERED');
  });
  it("should display the character's info", ()=> {
    const wrapper = shallow(<PlayerCard characterInfo={charInfo[characters.MERLIN]} />);
    expect(wrapper.find('h3').text()).to.equal('characters.MERLIN');
  });
});
