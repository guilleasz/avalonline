import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import ChooseLady from '../../../mobile/components/ChooseLady';

chai.use(sinonChai);

describe('ChooseLady Component', () => {
  it('should not display the img if not in state lady', () => {
    const wrapper = shallow(<ChooseLady
      lady="player1"
      state="choosing"
      currentPlayer="player1"
      player="player4"
    />);
    expect(wrapper.find('img').length).to.equal(0);
  });
  it('should not display the img if the currentPlayer is not the lady', () => {
    const wrapper = shallow(<ChooseLady
      lady="player2"
      state="lady"
      currentPlayer="player1"
      player="player4"
    />);
    expect(wrapper.find('img').length).to.equal(0);
  });
  it('should not display the img if the currentPlayer is the player', () => {
    const wrapper = shallow(<ChooseLady
      lady="player1"
      state="lady"
      currentPlayer="player1"
      player="player1"
    />);
    expect(wrapper.find('img').length).to.equal(0);
  });
  it('should render if all of the above are true', () => {
    const wrapper = shallow(<ChooseLady
      lady="player1"
      state="lady"
      currentPlayer="player1"
      player="player4"
    />);
    expect(wrapper.find('img').length).to.equal(1);
  });
  it('should execute the selectLady fn when clicked', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<ChooseLady
      selectLady={spy}
      lady="player1"
      state="lady"
      currentPlayer="player1"
      player="player4"
    />);
    wrapper.find('button').simulate('click');
    expect(spy).to.have.been.called; // eslint-disable-line no-unused-expressions
  });
  it('should execute the selectLady with the player selected as arguement', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<ChooseLady
      selectLady={spy}
      lady="player1"
      state="lady"
      currentPlayer="player1"
      player="player4"
    />);
    wrapper.find('button').simulate('click');
    expect(spy).to.have.been.calledWith('player4');
  });
});
