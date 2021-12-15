import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';


describe('render the Notification component without a list', () => {
  test('render the Notification component', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists()).to.equal(true);
  });

  test('render the Notification component with an empty list', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} displayDrawer={true} />);
    expect(wrapper.exists()).to.equal(true);
  });

  test('render the Notification component with the right number of components', () => {
    const ll = [
    {id: 1, type: 'default', value: 'New course available', html: null},
    {id: 2, type: 'urgent', value: 'New course available', html: null},
    {id: 3, type: 'default', value: 'New course available', html: null},
    {id: 4, type: 'urgent', value: null, html: { __html: 'abc'} }
    ]
    const wrapper = shallow(<Notifications listNotifications={ ll } displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').length).to.equal(4);
  });

  test('render the Notification component with an empty list', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} displayDrawer={true} />);
    expect(wrapper.find('.Notifications p').text()).to.equal('No new notifications for now');
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