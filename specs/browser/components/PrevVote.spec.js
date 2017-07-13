import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PrevVote from '../../../browser/lobby/components/PrevVote';

describe('PrevVote component', () => {
  it('should render the approve vote image if vote is true', () => {
    const wrapper = shallow(<PrevVote vote />);
    expect(wrapper.find('img').prop('src')).to.equal('/assets/vote_approve.png');
  });
  it('should render the reject vote image if vote is false', () => {
    const wrapper = shallow(<PrevVote vote={false} />);
    expect(wrapper.find('img').prop('src')).to.equal('/assets/vote_reject.png');
  });
});
