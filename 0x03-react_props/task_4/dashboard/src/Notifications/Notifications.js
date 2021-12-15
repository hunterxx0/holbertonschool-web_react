import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

export default function Notifications(props) {
	return (
    <>
      <div className='menuItem'>
        <p>Your notifications</p>

      </div>
      { !props.displayDrawer ? (<div></div>) : (<div className='Notifications'>
                    <p>Here is the list of notifications</p>
                    <ul>
                      <NotificationItem type='default' value='New course available' />
                      <NotificationItem type='urgent' value='New course available' />
                      <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} />
                    </ul>
                    <button className='close-b' aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
                      <img src={close_icon} style={{width:'20px', height: '20px'}}/>
                    </button>
                  </div>)
      }
    </>
  );
}


Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: false
};
