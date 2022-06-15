import React, { Fragment, PureComponent } from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

class Notifications extends PureComponent  {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }
  
  render() {
    const { displayDrawer, listNotifications, markAsRead } = this.props;
  	return (
      <>
        <div className='menuItem'>
          <p>Your notifications</p>
        </div>
        { !displayDrawer ? null : (
          <div className='Notifications'>
            { !listNotifications || !listNotifications.length ? (<p>No new notifications for now</p>) : (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {
                    listNotifications.map(function (notif) {
                      return (
                        <NotificationItem
                        key={notif.id}
                        type={notif.type}
                        value={notif.value}
                        html={notif.html} 
                        markAsRead={markAsRead}
                        id={notif.id}
                        />
                        );
                    })
                  }
                </ul>
              </>
              )
            }
            <button
              style={{
                position:'absolute',
                top: '1em',
                right: '1em',
                background: 'transparent',
                border: 'none',
                fontSize: '5px',
              }}
              aria-label='Close'
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src={close_icon} style={{width:'20px', height: '20px'}}/>
            </button>
          </div> )
        }
      </>
    );
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