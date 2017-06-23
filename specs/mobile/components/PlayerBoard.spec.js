import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PlayerBoard from '../../../mobile/components/PlayerBoard';
import PlayersList from '../../../mobile/components/PlayersList';

describe('PlayerBoard', () => {
  const props = {
    players: {
      player1: { name: 'Guille' },
      player2: { name: 'Yimin' },
      player3: { name: 'Jacob' },
    },
    turnOrder: ['player3', 'player2', 'player1'],
    currentPlayer: { name: 'Guille' },
  };
  it('should render the PlayersList', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(PlayersList).length).to.equal(1);
  });
  it('should pass the players in order to the PlayersList', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(PlayersList).prop('players')[0].name).to.equal('Jacob');
    expect(wrapper.find(PlayersList).prop('players')[1].name).to.equal('Yimin');
    expect(wrapper.find(PlayersList).prop('players')[2].name).to.equal('Guille');
  });
  it('should pass the currentPlayer into the PlayersList', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(PlayersList).prop('currentPlayer').name).to.equal('Guille');
  });
});
