import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import ConfirmLady from '../../../mobile/components/ConfirmLady';

chai.use(sinonChai);

describe('ConfirmLady Component', () => {
  it('shouldn\'t display the .confirmLady if display is false', () => {
    const wrapper = shallow(<ConfirmLady display={false} />);
    expect(wrapper.find('.confirmLady').length).to.equal(0);
  });
  it('should display if display is true', () => {
    const wrapper = shallow(<ConfirmLady display />);
    expect(wrapper.find('.confirmLady').length).to.equal(1);
  });
  it('should display the player name to lady ', () => {
    const wrapper = shallow(<ConfirmLady display player="Guille" />);
    expect(wrapper.find('.playerName').text()).to.equal("Guille");
  });
  it('should render a .showLady and .cancelLady btn', () => {
    const wrapper = shallow(<ConfirmLady display />);
    expect(wrapper.find('.confirmLady').length).to.equal(1);
    expect(wrapper.find('.cancelLady').length).to.equal(1);
  });
  it('should execute the fn showLady when .showLady btn is clicked', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<ConfirmLady display showLady={spy} />);
    wrapper.find('.showLady').simulate('click');
    expect(spy).to.have.been.called; // eslint-disable-line no-unused-expressions
  });
  it('should execute the fn cancelLady when .cancelLady btn is clicked', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<ConfirmLady display cancelLady={spy} />);
    wrapper.find('.cancelLady').simulate('click');
    expect(spy).to.have.been.called; // eslint-disable-line no-unused-expressions
  });
});
