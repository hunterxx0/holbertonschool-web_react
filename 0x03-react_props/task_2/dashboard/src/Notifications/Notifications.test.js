import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notification from '../Notifications/Notification';
import NotificationItem from '../Notifications/NotificationItem';


describe('Notification', () => {
  test('render the Notification component', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.exists()).to.equal(true);
  });

  test('renders NotificationItem component', () => {
    const wrapper = shallow(<Notification />);
    const li = wrapper.find('li');
    expect(wrapper.find(NotificationItem).at(0).html()).to.equal(
      '<li data-priority="default">New course available</li>');

  });

});