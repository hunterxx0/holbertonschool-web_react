import React, { Fragment, Component } from 'react';
import BodySection from './BodySection';
import './BodySection.css';
import PropTypes from 'prop-types';


class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="bodySectionWithMargin">
          <BodySection {...this.props} />
        </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string,
};

BodySection.defaultProps = {
  title: '',
};

export default BodySectionWithMarginBottom;
