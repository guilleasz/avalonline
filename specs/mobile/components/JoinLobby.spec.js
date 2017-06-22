import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import JoinLobby from '../../../mobile/components/JoinLobby';

chai.use(sinonChai);

describe('Join Lobby component', () => {
  it('should render a message to Join a Lobby', () => {
    const wrapper = shallow(<JoinLobby />);
    expect(wrapper.find('h1').text()).to.equal('Join a Lobby');
  });
  it('should have an input', () => {
    const wrapper = shallow(<JoinLobby />);
    expect(wrapper.find('input').length).to.equal(1);
  });
  it('should have the value of the prop lobbyValue', () => {
    const wrapper = shallow(<JoinLobby lobbyValue="Hello" />);
    expect(wrapper.find('input').prop('value')).to.equal('Hello');
  });
  it('should execute the handleChange fn when value changes, and pass the text into it', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<JoinLobby handleChange={spy} />);
    wrapper.find('input').simulate('change', { target: { value: 'hello' } });
    expect(spy).to.have.been.calledOnce; // eslint-disable-line no-unused-expressions
    expect(spy).to.have.been.calledWith('hello');
  });
  it('should have a button to join the lobby', () => {
    const wrapper = shallow(<JoinLobby />);
    expect(wrapper.find('button').text()).to.equal('Join');
  });
  it('when the button is clicked should execute function joinLobby', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<JoinLobby joinLobby={spy} />);
    wrapper.find('button').simulate('click');
    expect(spy).to.have.been.called; // eslint-disable-line no-unused-expressions
  });
});
