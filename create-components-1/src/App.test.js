import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
    const app = shallow(<App/>, div);
    const mainDiv = app.find('div');
    expect(mainDiv).toHaveLength(1);
});

it('renders with only the text "hello world"', () => {
  const div = document.createElement('div');
    const app = shallow(<App/>, div);
    const mainDiv = app.find('div');
    expect(mainDiv.text()).toBe('hello world');
});
