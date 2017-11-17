import React from 'react';
import TodosList from './TodosList';
import {shallow} from 'enzyme';

describe('TodosList component', () => {
  var todos = ['blah', 'blah', 'blah']
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const todosList = shallow(<TodosList todos={todos}/>, div);
    const mainDiv = todosList.find('div');
    expect(mainDiv).toHaveLength(1);
  });

  it('renders three todos in an unordered list', () => {
    const div = document.createElement('div');
    const todosList = shallow(<TodosList todos={todos}/>, div);
    expect(todosList.find('li')).toHaveLength(3);
  });
})
