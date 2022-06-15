import React, { Fragment, Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';
import PropTypes from 'prop-types';


class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className={css(styles.bodySectionWithMargin)}>
          <BodySection {...this.props} />
        </div>
    );
  }
}

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px',
    },

});

BodySection.propTypes = {
  title: PropTypes.string,
};

BodySection.defaultProps = {
  title: '',
};

export default BodySectionWithMarginBottom;
