import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import VoteCard from '../../../browser/lobby/components/VoteCard';


describe('VoteCard Component', () => {
  it('should not render if there is no questApprovalVote', () => {
    const wrapper = mount(<VoteCard />);
    expect(wrapper.find('img').length).to.equal(0);
  });
  it('should render if questApprovalVote is false', () => {
    const wrapper = mount(<VoteCard questApprovalVote={false} />);
    expect(wrapper.find('img').length).to.equal(2);
  });
  it('should render if questApprovalVote is true', () => {
    const wrapper = mount(<VoteCard questApprovalVote />);
    expect(wrapper.find('img').length).to.equal(2);
  });
});
