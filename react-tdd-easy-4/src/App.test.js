import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import BandList from './BandList';

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const app = shallow(<App/>, div);
    const mainDiv = app.find('div');
    expect(mainDiv).toHaveLength(1);
  });

  it('has three bands hardcoded in the state', () => {
    const div = document.createElement('div');
    const app = shallow(<App/>, div);
    expect(app.state().bands).toHaveLength(3);
  });

  it('contains a BandList component', () => {
    const div = document.createElement('div');
    const app = shallow(<App/>, div);
    const bandList = app.find(BandList.name);
    expect(bandList).toHaveLength(1);
  });
})
