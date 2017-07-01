import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import LadysPick from '../../../mobile/components/LadysPick';


describe('LadysPick Component', () => {
  it('should not render if no pickLady', () => {
    const wrapper = shallow(<LadysPick />);
    expect(wrapper.find('.ladysPick').length).to.equal(0);
  });
  it('should not render if ladyWindow is true', () => {
    const wrapper = shallow(<LadysPick ladyWindow pickLady="Hello" />);
    expect(wrapper.find('.ladysPick').length).to.equal(0);
  });
  it('should render if pickLady', () => {
    const wrapper = shallow(<LadysPick pickLady="Hello" />);
    expect(wrapper.find('.ladysPick').length).to.equal(1);
  });
  it('will show the message of picklady', () => {
    const wrapper = shallow(<LadysPick pickLady="Hello" />);
    expect(wrapper.find('.ladysPick').text()).to.equal('Hello');
  });
});
