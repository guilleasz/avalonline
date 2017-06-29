import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Lady from '../../../mobile/components/Lady';

chai.use(sinonChai);

describe('Lady Component', () => {
  it('should not render if the display porperty is set to false', () => {
    const wrapper = shallow(<Lady display={false} />);
    expect(wrapper.find('.ladyCard').length).to.equal(0);
  });
  it('should render if the display property is set to true', () => {
    const wrapper = shallow(<Lady display />);
    expect(wrapper.find('.ladyCard').length).to.equal(1);
  });
  it('should render the name of the player', () => {
    const wrapper = shallow(<Lady display player={{ name: 'Guille' }} />);
    expect(wrapper.find('.name').text()).to.equal('Guille');
  });
  it('should render Good if the role of player is good', () => {
    const wrapper = shallow(<Lady display player={{ role: 'good' }} />);
    expect(wrapper.find('.role').text()).to.equal('Good');
  });
  it('should render Evil if the role of player is bad', () => {
    const wrapper = shallow(<Lady display player={{ role: 'bad' }} />);
    expect(wrapper.find('.role').text()).to.equal('Evil');
  });
  it('should execute the closeLady fn when .closeLady btn is clicked', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Lady display closeLady={spy} />);
    wrapper.find('.closeLady').simulate('click');
    expect(spy).to.have.been.called; // eslint-disable-line no-unused-expressions
  });
});
