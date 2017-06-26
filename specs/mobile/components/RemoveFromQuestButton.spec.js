import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import RemoveFromQuestButton from '../../../mobile/components/RemoveFromQuestButton';

chai.use(sinonChai);

describe('RemoveFromQuestButton Component', () => {
  it('should not show if the state of the game is not \'choosing\'', () => {
    const wrapper = shallow(<RemoveFromQuestButton
      state="voting"
      questLeader="player1"
      currentPlayerId="player1"
      questPlayers={['player2', 'player3']}
      playerId="player2"
    />);
    expect(wrapper.find('button').length).to.equal(0);
  });
  it('should not show if the questLeader is not the currentPlayer', () => {
    const wrapper = shallow(<RemoveFromQuestButton
      state="choosing"
      questLeader="player2"
      currentPlayerId="player1"
      questPlayers={['player2', 'player3']}
      playerId="player2"
    />);
    expect(wrapper.find('button').length).to.equal(0);
  });
  it('should not show if the player is not inside the quest', () => {
    const wrapper = shallow(<RemoveFromQuestButton
      state="choosing"
      questLeader="player1"
      currentPlayerId="player1"
      questPlayers={['player2', 'player3']}
      playerId="player1"
    />);
    expect(wrapper.find('button').length).to.equal(0);
  });
  it('should show if all of the above is false', () => {
    const wrapper = shallow(<RemoveFromQuestButton
      state="choosing"
      questLeader="player1"
      currentPlayerId="player1"
      questPlayers={['player1', 'player3']}
      playerId="player1"
    />);
    expect(wrapper.find('button').length).to.equal(1);
  });
  it('should call the removeFromQuest function with the id of the player when clicked', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<RemoveFromQuestButton
      state="choosing"
      questLeader="player1"
      currentPlayerId="player1"
      questPlayers={['player2', 'player1']}
      playerId="player1"
      removeFromQuest={spy}
    />);
    wrapper.find('button').simulate('click');
    expect(spy).to.have.been.called; // eslint-disable-line no-unused-expressions
    expect(spy).to.have.been.calledWith('player1');
  });
});
