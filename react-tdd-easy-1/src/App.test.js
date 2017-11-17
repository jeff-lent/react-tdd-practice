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

  it('has three todos hardcoded in the state', () => {
    const div = document.createElement('div');
    const app = shallow(<App/>, div);
    expect(app.state().todos).toHaveLength(3);
  });

  it('renders an unordered containing the 3 todos in state', () => {
    const div = document.createElement('div');
    const app = shallow(<App/>, div);
    const listItems = app.find('li');
    expect(listItems).toHaveLength(3);
  });
  //
  // it('passes a function into ContactInput with a prop called "addContact"', () => {
  //   const div = document.createElement('div');
  //   const app = shallow(<App/>, div);
  //   const contactInput = app.find(ContactInput.name);
  //   expect(typeof contactInput.props().addContact).toEqual('function');
  // });
  //
  // it('should contain a function called handleSubmit', () => {
  //   const div = document.createElement('div');
  //   const app = shallow(<App />, div);
  //   expect(typeof app.instance().addContact).toBe('function');
  // });
  //
  // it("should add a contact to the state if addContact is called", function () {
  //   const div = document.createElement('div');
  //   const app = shallow(<App />, div);
  //   let newContact = { name: 'James Taylor' }
  //   app.instance().addContact(newContact);
  //   expect(app.state().contacts).toHaveLength(4);
  // });
})
