import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';


export default function NotificationItem({ type, html, value }) {
  if (html) return (<li data-priority={type} dangerouslySetInnerHTML={html}></li>);
  return (<li data-priority={type}>{value}</li>);
}