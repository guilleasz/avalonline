import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import OnQuest from '../../../mobile/components/OnQuest';


describe('OnQuest Component', () => {
  it('should not render if not on state questing', () => {
    const wrapper = shallow(<OnQuest
      state="choosing"
      currentPlayer="player1"
      questPlayers={{ player2: true, player3: true }}
    />);
    expect(wrapper.find('.onQuest').length).to.equal(0);
  });
  it('should not render if player is on quest', () => {
    const wrapper = shallow(<OnQuest
      state="questing"
      currentPlayer="player1"
      questPlayers={{ player1: true, player3: true }}
    />);
    expect(wrapper.find('.onQuest').length).to.equal(0);
  });
  it('should render if all of above is true', () => {
    const wrapper = shallow(<OnQuest
      state="questing"
      currentPlayer="player1"
      questPlayers={{ player2: true, player3: true }}
      players={{
        player2: { name: 'Guille' },
        player3: { name: 'Yimin' },
        player1: { name: 'Jacob' },
        player4: { name: 'Mike' },
      }}
    />);
    expect(wrapper.find('.onQuest').length).to.equal(1);
  });
  it('should list the players on the quest', () => {
    const wrapper = shallow(<OnQuest
      state="questing"
      currentPlayer="player1"
      questPlayers={{ player2: true, player3: true, player4: true }}
      players={{
        player2: { name: 'Guille' },
        player3: { name: 'Yimin' },
        player1: { name: 'Jacob' },
        player4: { name: 'Mike' },
      }}
    />);
    expect(wrapper.find('.onQuest').text()).to.equal('Guille, Yimin and Mike are on a quest');
  });
});
