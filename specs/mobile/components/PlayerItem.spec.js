import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PlayerItem from '../../../mobile/components/PlayerItem';
import PlayerNameItem from '../../../mobile/components/PlayerNameItem';
import PlayerExtraInfoItem from '../../../mobile/components/PlayerExtraInfoItem';


describe('PlayerItem component', () => {
  it('should render the PlayerNameItem', () => {
    const wrapper = shallow(<PlayerItem
      player={{ special: 'Merlin', role: 'good' }}
      currentPlayer={{ special: 'Oberon', role: 'bad' }}
    />);
    expect(wrapper.find(PlayerNameItem).length).to.equal(1);
  });
  it('should pass the prop name of the player to the PlayerNameItem', () => {
    const wrapper = shallow(<PlayerItem
      player={{ name: 'Guille', special: 'Merlin', role: 'good' }}
      currentPlayer={{ special: 'Oberon', role: 'bad' }}
    />);
    expect(wrapper.find(PlayerNameItem).props().name).to.equal('Guille');
  });
  it('should render the PlayerExtraInfoItem', () => {
    const wrapper = shallow(<PlayerItem
      player={{ special: 'Merlin', role: 'good' }}
      currentPlayer={{ special: 'Oberon', role: 'bad' }}
    />);
    expect(wrapper.find(PlayerExtraInfoItem).length).to.equal(1);
  });
  it('should pass the player\'s special and role', () => {
    const wrapper = shallow(<PlayerItem
      player={{ special: 'Merlin', role: 'good' }}
      currentPlayer={{ special: 'Oberon', role: 'bad' }}
    />);
    expect(wrapper.find(PlayerExtraInfoItem).props().special).to.equal('Merlin');
    expect(wrapper.find(PlayerExtraInfoItem).props().playerRole).to.equal('good');
  });
  it('should pass the currentplayer\'s special and role', () => {
    const wrapper = shallow(<PlayerItem
      player={{ special: 'Merlin', role: 'good' }}
      currentPlayer={{ special: 'Oberon', role: 'bad' }}
    />);
    expect(wrapper.find(PlayerExtraInfoItem).props().currentPlayerSpecial).to.equal('Oberon');
    expect(wrapper.find(PlayerExtraInfoItem).props().currentPlayerRole).to.equal('bad');
  });
});
