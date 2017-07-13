import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import VoteTracker from '../../../browser/lobby/components/VoteTracker';
import PrevVote from '../../../browser/lobby/components/PrevVote';

describe('VoteTracker component', () => {
  const props = {
    prevVote: {
      quest1: {
        questApprovalVote: {
          player1: true,
          player2: false,
        },
      },
      quest2: {
        questApprovalVote: {
          player1: false,
          player2: false,
        },
      },
    },
    playerId: 'player1',
  };
  it('should render a PrevVote component for each quest', () => {
    const wrapper = shallow(<VoteTracker {...props} />);
    expect(wrapper.find(PrevVote).length).to.equal(2);
  });
  it('should pass the vote of the playerId as a prop to PrevVote', () => {
    const wrapper = shallow(<VoteTracker {...props} />);
    expect(wrapper.find(PrevVote).first().prop('vote')).to.equal(true);
  });
});
