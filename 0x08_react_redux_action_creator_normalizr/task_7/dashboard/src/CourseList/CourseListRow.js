import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let style = null;
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  if (isHeader) {
    style = css(styles.hRow);
    if (textSecondCell === null) {
      return (<tr className={style}><th colSpan="2">{textFirstCell}</th></tr>)
    }
    return (<tr className={style}><th>{textFirstCell}</th><th>{textSecondCell}</th></tr>);
  }
  !isChecked ? style = css(styles.row) : style = css(styles.row, styles.rowChecked);
  return (<tr className={style}><td><input type="checkbox" onClick={handleCheckbox}></input>{textFirstCell}</td><td>{textSecondCell}</td></tr>);
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: "#f5f5f5ab"
    },
    hRow: {
        backgroundColor: "#deb5b545"
    },
    rowChecked: {
        backgroundColor: "#e6e4e4"
    }

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