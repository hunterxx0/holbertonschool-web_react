import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let style = null;
  if (isHeader) {
    style = css(styles.hRow);
    if (textSecondCell === null) {
      return (<tr className={style}><th colSpan="2">{textFirstCell}</th></tr>)
    }
    return (<tr className={style}><th>{textFirstCell}</th><th>{textSecondCell}</th></tr>);
  }
  style = css(styles.row);
  return (<tr className={style}><td>{textFirstCell}</td><td>{textSecondCell}</td></tr>);
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: "#f5f5f5ab"
    },
    hRow: {
        backgroundColor: "#deb5b545"
    },

});

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}