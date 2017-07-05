import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import QuestVoteCards from '../../../mobile/components/QuestVoteCards';

chai.use(sinonChai);

describe('QuestVoteCards Component', () => {
  it('should not display Quest Voting Cards if not in questing state', () => {
    const wrapper = shallow(<QuestVoteCards
      currentPlayer="player1"
      questPlayers={{ player1: true, player2: true }}
      state="choosing"
      questSuccessVote={{ player2: false }}
    />);
    expect(wrapper.find('.questVoteCard').length).to.equal(0);
  });
  it('should not display Quest Voting Cards if player is not in quest', () => {
    const wrapper = shallow(<QuestVoteCards
      currentPlayer="player1"
      questPlayers={{ player3: true, player2: true }}
      state="questing"
      questSuccessVote={{ player2: false }}
    />);
    expect(wrapper.find('.questVoteCard').length).to.equal(0);
  });
  it('should not display Quest Voting Cards if player already voted', () => {
    const wrapper = shallow(<QuestVoteCards
      currentPlayer="player1"
      questPlayers={{ player1: true, player2: true }}
      state="questing"
      questSuccessVote={{ player1: false }}
    />);
    expect(wrapper.find('.questVoteCard').length).to.equal(0);
  });
  it('should display Quest if all of the above are true', () => {
    const wrapper = shallow(<QuestVoteCards
      currentPlayer="player1"
      questPlayers={{ player1: true, player2: true }}
      state="questing"
      questSuccessVote={{ player2: false }}
    />);
    expect(wrapper.find('.questVoteCard').length).to.equal(2);
  });
  it('should display Quest if no questSuccesVotes yet', () => {
    const wrapper = shallow(<QuestVoteCards
      currentPlayer="player1"
      questPlayers={{ player1: true, player2: true }}
      state="questing"
    />);
    expect(wrapper.find('.questVoteCard').length).to.equal(2);
  });
  it('should display a success and fail quest card', () => {
    const wrapper = shallow(<QuestVoteCards
      currentPlayer="player1"
      questPlayers={{ player1: true, player2: true }}
      state="questing"
      questSuccessVote={{ player2: false }}
    />);
    expect(wrapper.find('.successQuest').length).to.equal(1);
    expect(wrapper.find('.failQuest').length).to.equal(1);
  });

  it('should execute the function successQuest if .successQuest is clicked', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<QuestVoteCards
      currentPlayer="player1"
      questPlayers={{ player1: true, player2: true }}
      state="questing"
      questSuccessVote={{ player2: false }}
      successQuest={spy}
    />);
    wrapper.find('.successQuest').simulate('click');
    expect(spy).to.have.been.called; // eslint-disable-line no-unused-expressions
  });
  it('should execute the function failQuest if .failQuest is clicked and player is bad', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<QuestVoteCards
      currentPlayer="player1"
      questPlayers={{ player1: true, player2: true }}
      state="questing"
      questSuccessVote={{ player2: false }}
      failQuest={spy}
      currentPlayerRole="bad"
    />);
    wrapper.find('.failQuest').simulate('click');
    expect(spy).to.have.been.called; // eslint-disable-line no-unused-expressions
  });
  it('should not execute the function failQuest if .failQuest is clicked and player is good', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<QuestVoteCards
      currentPlayer="player1"
      questPlayers={{ player1: true, player2: true }}
      state="questing"
      questSuccessVote={{ player2: false }}
      failQuest={spy}
      currentPlayerRole="good"
    />);
    wrapper.find('.failQuest').simulate('click');
    expect(spy).to.not.have.been.called; // eslint-disable-line no-unused-expressions
  });
});
