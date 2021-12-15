import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';


describe('Notification', () => {
  test('render the Notification component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).to.equal(true);
  });

  test('renders NotificationItem component', () => {
    const wrapper = shallow(<Notifications />);
    const menu = wrapper.find('.menuItem');
    expect(menu.exists()).to.equal(true);
    expect(wrapper.find('.Notifications').exists()).to.equal(false);
  });

  test('renders NotificationItem component', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    const menu = wrapper.find('.menuItem');
    expect(menu.exists()).to.equal(true);
    expect(wrapper.find('.Notifications').exists()).to.equal(true);
  });


});