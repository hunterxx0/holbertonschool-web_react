import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

class Notifications extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>
      { !props.displayDrawer ? null : (
        <div className='Notifications'>
        { !props.listNotifications || !props.listNotifications.length ? (<p>No new notifications for now</p>) : (
          <React.Fragment>
            <p>Here is the list of notifications</p>
            <ul>
              {
                props.listNotifications.map(function (notif) {
                  return (
                    <NotificationItem key={notif.id} type={notif.type} value={notif.value} html={notif.html} />
                    );
                })
              }
            </ul>
          </React.Fragment>
          )
        }
        <button className='close-b' aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
          <img src={close_icon} style={{width:'20px', height: '20px'}}/>
        </button>
        </div> )
      }
    }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};


export default Notifications;
