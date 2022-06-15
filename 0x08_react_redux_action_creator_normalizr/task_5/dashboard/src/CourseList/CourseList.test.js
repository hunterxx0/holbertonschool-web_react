import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import * as Aphrodite from 'aphrodite';
Aphrodite.StyleSheetTestUtils.suppressStyleInjection();


describe('CourseListRow', () => {
  test('renders CourseList component without a list', () => {
    const wrapper = shallow(<CourseList />);
      expect(wrapper.exists()).to.equal(true);
  });

  test('renders CourseList component with an empty list', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
      expect(wrapper.exists()).to.equal(true);
  });

  test('renders the 5 different rows', () => {
    const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
    ]
    const wrapper = shallow(<CourseList listCourses={ listCourses } />);
      expect(wrapper.find(CourseListRow).length).to.equal(5);
  });
});