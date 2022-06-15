import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

export default function CourseList(props) {
  return (
    <table className={css(styles.table)} id="CourseList">
      <thead className={css(styles.tr)}>
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

const styles = StyleSheet.create({
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        border: '1px solid lightgray',
    },
    tr: {
        'tr:nth-child(2)': {
          textAlign: 'left',
        },
        th: {
          border: '1px solid lightgray',
        },
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
});


CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
    listCourses: []
};
