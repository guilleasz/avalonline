import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import VotingCards from '../../../mobile/components/VotingCards';

chai.use(sinonChai);


describe('VotingCards Component', () => {
  it('should render two voting cards', () => {
    const wrapper = shallow(<VotingCards />);
    expect(wrapper.find('.votingCard').length).to.equal(2);
  });
  it('should have the buttons disabled if we are not in a voting state', () => {
    const wrapper = shallow(<VotingCards
      state="choosing"
      currentPlayer="player1"
      questApprovalVote={{
        player2: true,
      }}
    />);
    expect(wrapper.find('.approve').prop('disabled')).to.equal(true);
    expect(wrapper.find('.reject').prop('disabled')).to.equal(true);
  });
  it('should have the buttons disabled if the player already voted', () => {
    const wrapper = shallow(<VotingCards
      state="voting"
      currentPlayer="player1"
      questApprovalVote={{
        player1: true,
      }}
    />);
    expect(wrapper.find('.approve').prop('disabled')).to.equal(true);
    expect(wrapper.find('.reject').prop('disabled')).to.equal(true);
  });
  it('should be enable if we are voting and the player didn\'t vote yet', () => {
    const wrapper = shallow(<VotingCards
      state="voting"
      currentPlayer="player1"
      questApprovalVote={{
        player2: true,
      }}
    />);
    expect(wrapper.find('.approve').prop('disabled')).to.equal(false);
    expect(wrapper.find('.reject').prop('disabled')).to.equal(false);
  });
  it('should be enable if we are voting and there is not any vote yet', () => {
    const wrapper = shallow(<VotingCards
      state="voting"
      currentPlayer="player1"
    />);
    expect(wrapper.find('.approve').prop('disabled')).to.equal(false);
    expect(wrapper.find('.reject').prop('disabled')).to.equal(false);
  });
  it('should execute the approveQuest fn when the approve button is clicked', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<VotingCards
      state="voting"
      currentPlayer="player1"
      questApprovalVote={{
        player2: true,
      }}
      approveQuest={spy}
    />);
    wrapper.find('.approve').simulate('click');
    expect(spy).to.have.been.called; // eslint-disable-line no-unused-expressions
  });
  it('should execute the rejectQuest fn when the reject button is clicked', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<VotingCards
      state="voting"
      currentPlayer="player1"
      questApprovalVote={{
        player2: true,
      }}
      rejectQuest={spy}
    />);
    wrapper.find('.reject').simulate('click');
    expect(spy).to.have.been.called; // eslint-disable-line no-unused-expressions
  });
});
