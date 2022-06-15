import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NotificationItem from './NotificationItem';
import * as Aphrodite from 'aphrodite';
Aphrodite.StyleSheetTestUtils.suppressStyleInjection();


describe('NotificationItem', () => {
  test('render the NotificationItem component', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists());
  });

  test('renders NotificationItem component', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    const li = wrapper.find('li');
    expect(li.props()).to.have.property('data-priority', 'default');
    expect(li.text()).to.equal('test');
  });

  test('renders NotificationItem component', () => {
    const wrapper = shallow(<NotificationItem type='urgent' html={{ __html: '<u>testing</u>' }} />);
    const li = wrapper.find('li');
    expect(li.props()).to.have.property('data-priority', 'urgent');
  });
});