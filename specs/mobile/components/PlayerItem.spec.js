import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PlayerItem from '../../../mobile/components/PlayerItem';
import PlayerNameItem from '../../../mobile/components/PlayerNameItem';
import PlayerExtraInfoItem from '../../../mobile/components/PlayerExtraInfoItem';
import AddToQuestButton from '../../../mobile/components/AddToQuestButton';
import RemoveFromQuestButton from '../../../mobile/components/RemoveFromQuestButton';
import ChooseLady from '../../../mobile/components/ChooseLady';

describe('PlayerItem component', () => {
  const props = {
    player: { uid: 'player1', name: 'Guille', special: 'Merlin', role: 'good' },
    currentPlayer: { uid: 'player2', special: 'Oberon', role: 'bad' },
    gameState: {
      questLeader: 'player2',
      numPlayersOnQuest: 3,
      state: 'choosing',
      questPlayers: {
        player1: true,
        player2: true,
      },
      lady: 'player1',
    },
    addToQuest() { return 'addToQuest' },
    removeFromQuest() { return 'removeFromQuest' },
    selectLady() { return 'selectLady'; }
  };

  it('should render the PlayerNameItem', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(PlayerNameItem).length).to.equal(1);
  });
  it('should pass the prop name of the player to the PlayerNameItem', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(PlayerNameItem).props().name).to.equal('Guille');
  });
  it('should pass the questLeader and the playerId as props of PlayerNameItem', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(PlayerNameItem).props().playerId).to.equal('player1');
    expect(wrapper.find(PlayerNameItem).props().questLeader).to.equal('player2');
  });
  it('should pass the questPlayers as an array to PlayerNameItem', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(PlayerNameItem).props().questPlayers[0]).to.equal('player1');
  });
  it('should render the PlayerExtraInfoItem', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(PlayerExtraInfoItem).length).to.equal(1);
  });
  it('should pass the player\'s special and role', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(PlayerExtraInfoItem).props().special).to.equal('Merlin');
    expect(wrapper.find(PlayerExtraInfoItem).props().playerRole).to.equal('good');
  });
  it('should pass the currentplayer\'s special and role', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(PlayerExtraInfoItem).props().currentPlayerSpecial).to.equal('Oberon');
    expect(wrapper.find(PlayerExtraInfoItem).props().currentPlayerRole).to.equal('bad');
  });
  it('should render the AddToQuestButton', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(AddToQuestButton).length).to.equal(1);
  });
  it('should pass the player and currentPlayerId as props', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(AddToQuestButton).prop('currentPlayerId')).to.equal('player2');
    expect(wrapper.find(AddToQuestButton).prop('playerId')).to.equal('player1');
  });
  it('should pass the gameState information as props', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(AddToQuestButton).prop('questLeader')).to.equal('player2');
    expect(wrapper.find(AddToQuestButton).prop('numPlayersOnQuest')).to.equal(3);
    expect(wrapper.find(AddToQuestButton).prop('state')).to.equal('choosing');
    expect(wrapper.find(AddToQuestButton).prop('questPlayers')[0]).to.equal('player1');
  });
  it('should pass the addToQuest Function', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(AddToQuestButton).prop('addToQuest')()).to.equal('addToQuest');
  });
  it('should render the RemoveFromQuestButton', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(RemoveFromQuestButton).length).to.equal(1);
  });
  it('should pass the player and currentPlayerId as props', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(RemoveFromQuestButton).prop('currentPlayerId')).to.equal('player2');
    expect(wrapper.find(RemoveFromQuestButton).prop('playerId')).to.equal('player1');
  });
  it('should pass the gameState information as props', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(RemoveFromQuestButton).prop('questLeader')).to.equal('player2');
    expect(wrapper.find(RemoveFromQuestButton).prop('state')).to.equal('choosing');
    expect(wrapper.find(RemoveFromQuestButton).prop('questPlayers')[0]).to.equal('player1');
  });
  it('should pass the removeFromquest Function', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(RemoveFromQuestButton).prop('removeFromQuest')()).to.equal('removeFromQuest');
  });
  it('should render the ChooseLady button', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(ChooseLady).length).to.equal(1);
  });
  it('should pass the currentPlayerId, lady, playerId, and state props', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(ChooseLady).prop('lady')).to.equal('player1');
    expect(wrapper.find(ChooseLady).prop('state')).to.equal('choosing');
    expect(wrapper.find(ChooseLady).prop('currentPlayer')).to.equal('player2');
    expect(wrapper.find(ChooseLady).prop('player')).to.equal('player1');
  });
  it('should pass the selectLady fn', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(ChooseLady).prop('selectLady')()).to.equal('selectLady');
  });
});
