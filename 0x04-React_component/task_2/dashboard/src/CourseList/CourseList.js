import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import './CourseList.css';
import PropTypes from 'prop-types';

export default function CourseList(props) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
      {!props.listCourses || !props.listCourses.length ? <CourseListRow textFirstCell="No course available yet" /> : props.listCourses.map( function (crs) {
            return (
              <CourseListRow key={crs.id} textFirstCell={crs.name} textSecondCell={crs.credit} />
              );
          })}
      </tbody>
    </table>
    );
}


CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
    listCourses: []
};
