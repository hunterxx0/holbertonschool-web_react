import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import PropTypes from 'prop-types';


export default function NotificationItem({ type, value, html, markAsRead, id }) {
  if (html) return (<li data-priority={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>);
  return (<li data-priority={type} onClick={() => markAsRead(id)}>{value}</li>);
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html : PropTypes.string
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default'
};
