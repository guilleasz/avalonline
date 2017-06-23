import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PlayerNameItem from '../../../mobile/components/PlayerNameItem';


describe('PlayerNameItem component', () => {
  it('should render the players name', () => {
    const wrapper = shallow(<PlayerNameItem name="Guille" />);
    expect(wrapper.find('.name').text()).to.equal('Guille');
  });
});
