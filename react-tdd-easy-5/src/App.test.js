import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import TodosList from './TodosList';

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const app = shallow(<App/>, div);
    const mainDiv = app.find('div');
    expect(mainDiv).toHaveLength(1);
  });

  it('has three todos hardcoded in the state', () => {
    const div = document.createElement('div');
    const app = shallow(<App/>, div);
    expect(app.state().todos).toHaveLength(3);
  });

  it('contains a TodosList component', () => {
    const div = document.createElement('div');
    const app = shallow(<App/>, div);
    const todosList = app.find(TodosList.name);
    expect(todosList).toHaveLength(1);
  });
})
