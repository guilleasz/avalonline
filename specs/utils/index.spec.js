import { expect } from 'chai';
import { generateChars } from '../../utils';

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
