import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';


describe('App', () => {
  test('render the App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });

  test('renders Notifications component', () => {
    const wrapper = shallow(<App />);
    const ntf = wrapper.find(Notifications);
    expect(ntf).to.have.lengthOf(1);
  });

  test('renders Header component', () => {
    const wrapper = shallow(<App />);
    const head = wrapper.find(Header);
    expect(head).to.have.lengthOf(1);
  });

  test('renders Login component', () => {
    const wrapper = shallow(<App />);
    const log = wrapper.find(Login);
    expect(log).to.have.lengthOf(1);
  });

  test('renders Footer component', () => {
    const wrapper = shallow(<App />);
    const foot = wrapper.find(Footer);
    expect(foot).to.have.lengthOf(1);
  });
  test('CourseList is not displayed', () => {
    const wrapper = shallow(<App />);
    const cl = wrapper.find(CourseList);
    expect(cl).to.have.lengthOf(0);
  });

});

describe('App', () => {
  test('CourseList is not displayed', () => {
  const wrapper = shallow(<App isLoggedIn={true} />);
  const cl = wrapper.find(CourseList);
  expect(cl).to.have.lengthOf(1);
  const log = wrapper.find(Login);
  expect(log).to.have.lengthOf(0);
  });
});