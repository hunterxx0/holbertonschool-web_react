import React from 'react';
import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';


describe('notifications check', () => {
  test('check selectCourse' , () => {
    const data = selectCourse(1);
    const result = { type: SELECT_COURSE, index: 1 };
    expect(data).toStrictEqual(result);
  });

  test('check unSelectCourse', () => {
    const data = unSelectCourse(1);
    const result = { type: UNSELECT_COURSE, index: 1 };
    expect(data).toStrictEqual(result);
  });

});