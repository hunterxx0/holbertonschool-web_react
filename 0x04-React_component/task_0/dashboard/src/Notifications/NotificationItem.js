import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import PropTypes from 'prop-types';


export default function NotificationItem({ type, html, value }) {
  if (html) return (<li data-priority={type} dangerouslySetInnerHTML={html}></li>);
  return (<li data-priority={type}>{value}</li>);
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html : PropTypes.string
  }),
  type: PropTypes.string,
  value: PropTypes.string
};

NotificationItem.defaultProps = {
  type: 'default'
};
