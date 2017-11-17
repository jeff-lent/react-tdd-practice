import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const app = shallow(<App/>, div);
    const mainDiv = app.find('div');
    expect(mainDiv).toHaveLength(1);
  });

  it('has three favorite foods hardcoded in the state', () => {
    const div = document.createElement('div');
    const app = shallow(<App/>, div);
    expect(app.state().favFoods).toHaveLength(3);
  });

  it('renders an unordered containing the 3 favorite foods in state', () => {
    const div = document.createElement('div');
    const app = shallow(<App/>, div);
    const listItems = app.find('li');
    expect(listItems).toHaveLength(3);
  });
})
