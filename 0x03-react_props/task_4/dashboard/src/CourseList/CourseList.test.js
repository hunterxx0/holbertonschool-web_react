import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';


describe('CourseListRow', () => {
  test('renders CourseList component ', () => {
    const wrapper = shallow(<CourseList />);
      expect(wrapper.exists()).to.equal(true);
  });

  test('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
      expect(wrapper.find(CourseListRow).length).to.equal(5);
  });
});