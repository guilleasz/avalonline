import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { ASSASSIN, MORDERED } from '../../../characters';
import GoodPlayerCard from '../../../mobile/components/GoodPlayerCard';

chai.use(sinonChai);

describe('GoodPlayerCard Component', () => {
  it('should render the player name', () => {
    const wrapper = shallow(<GoodPlayerCard
      player={{ name: 'Mike' }}
    />);
    expect(wrapper.find('.name').text()).to.equal('Mike');
  });
  it('should execute the assassinate fn if the currentPlayer is the Assassin', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<GoodPlayerCard
      currentPlayer={{ special: ASSASSIN }}
      assassinate={spy}
    />);
    wrapper.find('.goodPlayerCard').simulate('click');
    expect(spy).to.have.been.called; // eslint-disable-line no-unused-expressions
  });
  it('should execute the assassinate fn with the player info', () => {
    const player = { name: 'Guille' };
    const spy = sinon.spy();
    const wrapper = shallow(<GoodPlayerCard
      currentPlayer={{ special: ASSASSIN }}
      player={player}
      assassinate={spy}
    />);
    wrapper.find('.goodPlayerCard').simulate('click');
    expect(spy).to.have.been.calledWith(player);
  });
  it('should not execute the assasinate fn if the currentPlayer is not the Assassin', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<GoodPlayerCard
      currentPlayer={{ special: MORDERED }}
      assassinate={spy}
    />);
    wrapper.find('.goodPlayerCard').simulate('click');
    expect(spy).to.not.have.been.called; // eslint-disable-line no-unused-expressions
  });
});
