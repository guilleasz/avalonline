import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PlayerItem from '../../../mobile/components/PlayerItem';
import PlayersList from '../../../mobile/components/PlayersList';

describe('PlayersList component', () => {
  const props = {
    players: [
      { uid: 'player1', special: 'Merlin', role: 'good' },
      { uid: 'player2', role: 'good' },
      { uid: 'player3', special: 'Oberon', role: 'bad' },
    ],
    currentPlayer: { special: 'Mordered', role: 'bad' },
    gameState: 'Hello',
    addToQuest: 'addToQuest',
    removeFromQuest: 'removeFromQuest'
  };
  it('should render a PlayerItem for each player', () => {
    const wrapper = shallow(<PlayersList {...props} />);
    expect(wrapper.find(PlayerItem).length).to.equal(3);
  });
  it('should pass the player to each PlayerItem', () => {
    const wrapper = shallow(<PlayersList {...props} />);
    expect(wrapper.find(PlayerItem).first().props().player.special).to.equal('Merlin');
  });
  it('should pass the currentPlayer to each PlayerItem', () => {
    const wrapper = shallow(<PlayersList {...props} />);
    expect(wrapper.find(PlayerItem).first().props().currentPlayer.special).to.equal('Mordered');
  });
  it('should give us the key the uid', () => {
    const wrapper = shallow(<PlayersList {...props} />);
    expect(wrapper.find(PlayerItem).first().key()).to.equal('player1');
  });
  it('should pass the game state to eache playerItem', () => {
    const wrapper = shallow(<PlayersList {...props} />);
    expect(wrapper.find(PlayerItem).first().prop('gameState')).to.equal('Hello');
  });
  it('should pass the addToQuest and RemoveFromQuest fn', () => {
    const wrapper = shallow(<PlayersList {...props} />);
    expect(wrapper.find(PlayerItem).first().prop('addToQuest')).to.equal('addToQuest');
    expect(wrapper.find(PlayerItem).first().prop('removeFromQuest')).to.equal('removeFromQuest');

  });
});
