import React from 'react';
import { shallow } from 'enzyme';
import App from '../App/App';
import Login from './Login';
import * as Aphrodite from 'aphrodite';
Aphrodite.StyleSheetTestUtils.suppressStyleInjection();


describe('<App />', () => {
  test('renders App-body div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<main className="App-body" />))
  });

  test('renders login', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  test('renders all elements', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toEqual(3);
    expect(wrapper.find('label').length).toEqual(2);
  });
  test('enableSubmit check', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.state().enableSubmit).toEqual(false);
    wrapper.find('input#email').simulate('change', { target: { value: 'test@gmail.com' } });
    wrapper.find('input#password').simulate('change', { target: { value: 'test' } });
    expect(wrapper.state().enableSubmit).toEqual(true);
  });

});