import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PlayerBoard from '../../../mobile/components/PlayerBoard';
import PlayersList from '../../../mobile/components/PlayersList';
import VotingCards from '../../../mobile/components/VotingCards';
import QuestVoteCards from '../../../mobile/components/QuestVoteCards';
import PlayerCard from '../../../mobile/components/PlayerCard';
import ConfirmLady from '../../../mobile/components/ConfirmLady';
import Lady from '../../../mobile/components/Lady';
import Assassinate from '../../../mobile/components/Assassinate';


describe('PlayerBoard', () => {
  const props = {
    players: {
      player1: { name: 'Guille', role: 'good' },
      player2: { name: 'Yimin', role: 'good' },
      player3: { name: 'Jacob', role: 'bad' },
    },
    turnOrder: ['player3', 'player2', 'player1'],
    currentPlayer: { name: 'Guille' },
    currentPlayerId: 'player1',
    gameState: {
      state: 'voting',
      questPlayers: {
        player1: true,
      },
      questApprovalVote: {
        player1: true,
      },
      questSuccessVote: {
        player1: true,
      },
      lady: 'player1',
    },
    confirmLadyWindow: true,
    ladyWindow: true,
    removeFromQuest: 'removeFromQuest',
    addToQuest: 'addToQuest',
    confirmQuest: 'confirmQuest',
    approveQuest() { return 'approveQuest'; },
    rejectQuest() { return 'rejectQuest'; },
    successQuest() { return 'successQuest'; },
    failQuest() { return 'failQuest'; },
    selectLady() { return 'selectLady'; },
    showLady() { return 'showLady'; },
    cancelLady() { return 'cancelLady'; },
    closeLady() { return 'closeLady'; },
    assassinate() { return 'assassinate'; },
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
  it('should pass the id of the player inside the players array', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(PlayersList).prop('players')[0].uid).to.equal('player3');
  });
  it('should pass the id of the currentPlayer inside currentPlayer', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(PlayersList).prop('currentPlayer').uid).to.equal('player1');
  });
  it('should pass the gameState into the PlayersList', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(PlayersList).prop('gameState').state).to.equal('voting');
  });
  it('should pass the addToQuest, removeFromQuest and confirmQuest, selectLady into the PlayersList', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(PlayersList).prop('addToQuest')).to.equal('addToQuest');
    expect(wrapper.find(PlayersList).prop('removeFromQuest')).to.equal('removeFromQuest');
    expect(wrapper.find(PlayersList).prop('confirmQuest')).to.equal('confirmQuest');
    expect(wrapper.find(PlayersList).prop('selectLady')()).to.equal('selectLady');
  });
  it('should render the VotingCards component', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(VotingCards).length).to.equal(1);
  });
  it('should pass the currentPlayerId, the gameState state, and the questApprovalVote', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(VotingCards).prop('currentPlayer')).to.equal('player1');
    expect(wrapper.find(VotingCards).prop('state')).to.equal('voting');
    expect(wrapper.find(VotingCards).prop('questApprovalVote').player1).to.equal(true);
  });
  it('should pass the rejectQuest and approveQuest fn', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(VotingCards).prop('rejectQuest')()).to.equal('rejectQuest');
    expect(wrapper.find(VotingCards).prop('approveQuest')()).to.equal('approveQuest');
  });
  it('should render the QuestVoteCards component', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(QuestVoteCards).length).to.equal(1);
  });
  it('should pass the currentPlayerId, the state, the questPlayers and the questSuccessVote', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(QuestVoteCards).prop('currentPlayer')).to.equal('player1');
    expect(wrapper.find(QuestVoteCards).prop('state')).to.equal('voting');
    expect(wrapper.find(QuestVoteCards).prop('questSuccessVote').player1).to.equal(true);
    expect(wrapper.find(QuestVoteCards).prop('questPlayers').player1).to.equal(true);
  });
  it('should pass the failQuest and successQuest fn', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(QuestVoteCards).prop('failQuest')()).to.equal('failQuest');
    expect(wrapper.find(QuestVoteCards).prop('successQuest')()).to.equal('successQuest');
  });
  it('should render the PlayerCard', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(PlayerCard).length).to.equal(1);
  });
  it('should pass the currentPlayer info as a prop', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(PlayerCard).prop('currentPlayer').name).to.equal('Guille');
  });
  it('should render the ConfirmLady component', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(ConfirmLady).length).to.equal(1);
  });
  it('should pass the display prop with the confirmLadyWindow value', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(ConfirmLady).prop('display')).to.equal(true);
  });
  it('should pass the player name who is the lady', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(ConfirmLady).prop('player')).to.equal('Guille');
  });
  it('should pass the showLady and cancelLady functions', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(ConfirmLady).prop('showLady')()).to.equal('showLady');
    expect(wrapper.find(ConfirmLady).prop('cancelLady')()).to.equal('cancelLady');
  });
  it('should render the Lady component', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(Lady).length).to.equal(1);
  });
  it('should pass the display prop with the ladyWindow value', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(Lady).prop('display')).to.equal(true);
  });
  it('should pass the player info who is the lady', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(Lady).prop('player').name).to.equal('Guille');
  });
  it('should pass the closeLady functions', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(Lady).prop('closeLady')()).to.equal('closeLady');
  });
  it('should render the Assassinate compoenent', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(Assassinate).length).to.equal(1);
  });
  it('should pass the prop of goodPlayers as an array of only the good players', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(Assassinate).prop('goodPlayers').length).to.equal(2);
    expect(wrapper.find(Assassinate).prop('goodPlayers')[0].name).to.equal('Guille');
    expect(wrapper.find(Assassinate).prop('goodPlayers')[1].name).to.equal('Yimin');
  });
  it('should pass the currentPlayer and the state of the game', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(Assassinate).prop('currentPlayer').name).to.equal('Guille');
    expect(wrapper.find(Assassinate).prop('state')).to.equal('voting');
  });
  it('should pass the assassinate fn', () => {
    const wrapper = shallow(<PlayerBoard {...props} />);
    expect(wrapper.find(Assassinate).prop('assassinate')()).to.equal('assassinate');
  });
});
