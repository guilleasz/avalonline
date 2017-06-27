import { expect } from 'chai';
import { generateChars, howManyPlayersOnQuest, questNeedsTwoFails } from '../../utils';

describe('generateChars', () => {
  it('throws an error if number of players < 5', () => {
    expect(() => generateChars(4)).to.throw('Too few players');
  });

  it('throws an error if number of players > 10', () => {
    expect(() => generateChars(12)).to.throw('Too many players');
  });

  it('throws an error if there are too many bad special characters', () => {
    expect(() => generateChars(6, [], ['bad1', 'bad2', 'bad3', 'bad4']));
  });

  it('generates an array of objects with property role and special', () => {
    generateChars(7, ['merlin'], ['assassin']).forEach((char) => {
      expect(char).to.have.property('role');
      expect(char).to.have.property('special');
    });
  });

  it('special ', () => {
    generateChars(7, ['merlin'], ['assassin']).forEach((char) => {
      expect(char).to.have.property('role');
      expect(char).to.have.property('special');
    });
  });
});

describe('howManyPlayersOnQuest', () => {
  it('gives returns the number of players needed on the quest given total number of players and the round number', () => {
    expect(howManyPlayersOnQuest(5, 1)).to.equal(2);
    expect(howManyPlayersOnQuest(5, 4)).to.equal(3);
    expect(howManyPlayersOnQuest(10, 3)).to.equal(4);
    expect(howManyPlayersOnQuest(10, 5)).to.equal(5);
    expect(howManyPlayersOnQuest(8, 4)).to.equal(5);
  });
});

describe('questNeedsTwoFails', () => {
  it('gives returns whether you need two fails to fail a quest given total number of players and the round number', () => {
    expect(questNeedsTwoFails(5, 1)).to.equal(false);
    expect(questNeedsTwoFails(5, 4)).to.equal(false);
    expect(questNeedsTwoFails(10, 3)).to.equal(false);
    expect(questNeedsTwoFails(10, 5)).to.equal(false);
    expect(questNeedsTwoFails(8, 4)).to.equal(true);
  });
});
