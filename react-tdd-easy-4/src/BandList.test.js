import React from 'react';
import BandList from './BandList';
import {shallow} from 'enzyme';

describe('BandList component', () => {
  var bands = ['blah', 'blah', 'blah']
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const bandList = shallow(<BandList bands={bands}/>, div);
    const mainDiv = bandList.find('div');
    expect(mainDiv).toHaveLength(1);
  });

  it('renders three bands in an unordered list', () => {
    const div = document.createElement('div');
    const bandList = shallow(<BandList bands={bands}/>, div);
    expect(bandList.find('li')).toHaveLength(3);
  });
})
