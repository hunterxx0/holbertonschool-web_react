import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import * as Aphrodite from 'aphrodite';
Aphrodite.StyleSheetTestUtils.suppressStyleInjection();

describe('render the Notification component without a list', () => {
  test('render the Notification component', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists()).toEqual(true);
    jest.restoreAllMocks();
  });

  test('render the Notification component with an empty list', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} displayDrawer={true} />);
    expect(wrapper.exists()).toEqual(true);
    jest.restoreAllMocks();
  });

  test('render the Notification component with the right number of components', () => {
    const ll = [
    {id: 1, type: 'default', value: 'New course available', html: null},
    {id: 2, type: 'urgent', value: 'New course available', html: null},
    {id: 3, type: 'default', value: 'New course available', html: null},
    {id: 4, type: 'urgent', value: null, html: { __html: 'abc'} }
    ]
    const wrapper = shallow(<Notifications listNotifications={ ll } displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').length).toEqual(4);
    jest.restoreAllMocks();
  });

  test('render the Notification component with an empty list', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} displayDrawer={true} />);
    expect(wrapper.find('.Notifications p').text()).toEqual('No new notifications for now');
    jest.restoreAllMocks();
  });

  test('renders NotificationItem component', () => {
    const wrapper = shallow(<Notifications />);
    const menu = wrapper.find('.menuItem');
    expect(menu.exists()).toEqual(true);
    expect(wrapper.find('.Notifications').exists()).toEqual(false);
    jest.restoreAllMocks();
  });

  test('renders NotificationItem component', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    const menu = wrapper.find('.menuItem');
    expect(menu.exists()).toEqual(true);
    expect(wrapper.find('.Notifications').exists()).toEqual(true);
    jest.restoreAllMocks();
  });

  test("check handleDisplayDrawer", () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();

    const wrapper = shallow(
      <Notifications
        displayDrawer
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );
    wrapper.find(".menuItem").simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
    expect(handleHideDrawer).not.toHaveBeenCalled();
    jest.restoreAllMocks();
  });
  test("check handleHideDrawer", () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();

    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );
    wrapper.find(".button").simulate("click");
    expect(handleHideDrawer).toHaveBeenCalled();
    expect(handleDisplayDrawer).not.toHaveBeenCalled();
    jest.restoreAllMocks();
  });
});