import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseListRow from './CourseListRow';
import * as Aphrodite from 'aphrodite';
Aphrodite.StyleSheetTestUtils.suppressStyleInjection();

describe('CourseListRow', () => {
  test('renders one cell with colspan = 2', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="text"/>);
      expect(wrapper.find('th[colSpan="2"]').exists()).to.equal(true);
  });

  test('renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="text" textSecondCell="text"/>);
      expect(wrapper.find('th').length).to.equal(2);
  });

  test('renders correctly two td elements', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="text" textSecondCell="text"/>);
      expect(wrapper.find('tr > td').length).to.equal(2);
  });
});