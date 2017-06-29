import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Assassinate from '../../../mobile/components/Assassinate';
import GoodPlayerCard from '../../../mobile/components/GoodPlayerCard';
import { Assassin} from '../../../characters';


describe('Assassinate Component', () => {
  it('should not display if the state is not assasinate', () => {
    const wrapper = shallow(<Assassinate
      currentPlayer={{ special: Assassin }}
      state="choosing"
    />);
    expect(wrapper.find('.assassinContainer').length).to.equal(0);
  });
  it('should display if the state is assassinate', () => {
    const wrapper = shallow(<Assassinate
      currentPlayer={{ special: Assassin }}
      state="assassinate"
    />);
    expect(wrapper.find('.assassinContainer').length).to.equal(1);
  });
  it('should render a GoodPlayerCard forEach goodPlayer', () => {
    const wrapper = shallow(<Assassinate
      currentPlayer={{ special: Assassin }}
      state="assassinate"
      goodPlayers={[{ name: 'Guille' }, { name: 'Jacob' }, { name: 'Yimin' }]}
    />);
    expect(wrapper.find(GoodPlayerCard).length).to.equal(3);
  });
  it('should pass the players and it index and currentPlayer info into GoodPlayerCard', () => {
    const wrapper = shallow(<Assassinate
      currentPlayer={{ name: 'Jacob', special: Assassin }}
      state="assassinate"
      goodPlayers={[{ name: 'Guille' }, { name: 'Jacob' }, { name: 'Yimin' }]}
    />);
    expect(wrapper.find(GoodPlayerCard).first().prop('player').name).to.equal('Guille');
    expect(wrapper.find(GoodPlayerCard).first().prop('index')).to.equal(0);
    expect(wrapper.find(GoodPlayerCard).first().prop('currentPlayer').name).to.equal('Jacob');
  });
  it('should pass the assassinate function into GoodPlayerCard', () => {
    const wrapper = shallow(<Assassinate
      currentPlayer={{ special: Assassin }}
      state="assassinate"
      goodPlayers={[{ name: 'Guille' }, { name: 'Jacob' }, { name: 'Yimin' }]}
      assassinate="assassinate"
    />);
    expect(wrapper.find(GoodPlayerCard).first().prop('assassinate')).to.equal('assassinate');
  });
});
