import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PlayerNameItem from '../../../mobile/components/PlayerNameItem';


describe('PlayerNameItem component', () => {
  it('should render the players name', () => {
    const wrapper = shallow(<PlayerNameItem name="Guille" />);
    expect(wrapper.find('.name').text()).to.equal('Guille');
  });
  it('should add the class .turn if it is the player is questLeader', () => {
    const wrapper = shallow(<PlayerNameItem playerId="player1" questLeader="player1" />);
    expect(wrapper.find('.name').hasClass('turn')).to.equal(true);
  });
  it('should add the class .turn if it is the player is questLeader', () => {
    const wrapper = shallow(<PlayerNameItem playerId="player1" questLeader="player2" />);
    expect(wrapper.find('.name').hasClass('turn')).to.equal(false);
  });
  it('should add the class .selected if it is the player is part of quest', () => {
    const wrapper = shallow(<PlayerNameItem playerId="player1" questPlayers={['player1']} />);
    expect(wrapper.find('.name').hasClass('selected')).to.equal(true);
  });
  it('should add the class .selected if it is the player is part of quest', () => {
    const wrapper = shallow(<PlayerNameItem playerId="player1" questPlayers={['player2']} />);
    expect(wrapper.find('.name').hasClass('selected')).to.equal(false);
  });
});
