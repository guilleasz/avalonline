import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import ConfirmButton from '../../../mobile/components/ConfirmButton';

chai.use(sinonChai);


describe('ConfirmButton Component', () => {
  it('should not display if state is not choosing', () => {
    const gameState = {
      questLeader: 'player1',
      questPlayers: ['player1', 'player3', 'player2'],
      numPlayersOnQuest: 3,
      state: 'voting'
    };
    const wrapper = shallow(<ConfirmButton
      currentPlayer="player1"
      gameState={gameState}
    />);
    expect(wrapper.find('button').length).to.equal(0);
  });
  it('should not display when the currentPlayer is not the questLeader', () => {
    const gameState = {
      questLeader: 'player2',
      questPlayers: ['player1', 'player3', 'player2'],
      numPlayersOnQuest: 3,
      state: 'choosing',
    };
    const wrapper = shallow(<ConfirmButton
      currentPlayer="player1"
      gameState={gameState}
    />);
    expect(wrapper.find('button').length).to.equal(0);
  });
  it('should not display if there are not enough players on the quest', () => {
    const gameState = {
      questLeader: 'player1',
      questPlayers: ['player1', 'player3'],
      numPlayersOnQuest: 3,
      state: 'choosing',
    };
    const wrapper = shallow(<ConfirmButton
      currentPlayer="player1"
      gameState={gameState}
    />);
    expect(wrapper.find('button').length).to.equal(0);
  });
   it('should not display if there are no players on the quest', () => {
    const gameState = {
      questLeader: 'player1',
      numPlayersOnQuest: 3,
      state: 'choosing',
    };
    const wrapper = shallow(<ConfirmButton
      currentPlayer="player1"
      gameState={gameState}
    />);
    expect(wrapper.find('button').length).to.equal(0);
  });
  it('should display if all of the above are true', () => {
    const gameState = {
      questLeader: 'player1',
      questPlayers: ['player1', 'player3', 'player2'],
      numPlayersOnQuest: 3,
      state: 'choosing',
    };
    const wrapper = shallow(<ConfirmButton
      currentPlayer="player1"
      gameState={gameState}
    />);
    expect(wrapper.find('button').length).to.equal(1);
  });
  it('should call the fn confirmQuest when button clicked', () => {
    const gameState = {
      questLeader: 'player1',
      questPlayers: ['player1', 'player3', 'player2'],
      numPlayersOnQuest: 3,
      state: 'choosing',
    };
    const spy = sinon.spy();
    const wrapper = shallow(<ConfirmButton
      currentPlayer="player1"
      gameState={gameState}
      confirmQuest={spy}
    />);
    wrapper.find('button').simulate('click');
    expect(spy).to.have.been.called; // eslint-disable-line no-unused-expressions
  });
});
