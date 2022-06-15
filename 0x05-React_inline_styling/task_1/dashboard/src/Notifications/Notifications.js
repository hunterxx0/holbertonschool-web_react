import React, { Fragment, Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

class Notifications extends Component  {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }


  render() {
    const { displayDrawer, listNotifications, markAsRead } = this.props;
  	return (
      <>
        <div className={`menuItem ${css(styles.menuItem)}`}>
          <p>Your notifications</p>
        </div>
        { !displayDrawer ? null : (
          <div className={`Notifications ${css(styles.Notifications)}`}>
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
              className={css(styles.button)}
              aria-label='Close'
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src={close_icon} className={css(styles.img)}/>
            </button>
          </div> )
        }
      </>
    );
  }
}

const styles = StyleSheet.create({
    menuItem: {
        position: 'absolute',
        top: '0.5em',
        right: '1em',
    },
    Notifications: {
      border: '3px dashed #e01d3f',
      padding: '5px',
      width: '30%',
      minHeight: '100px',
      position: 'absolute',
      right: '1em',
      marginTop: '50px',
      paddingTop: '20px',
      paddingLeft: '20px',
      'p': {
        margin: '0px',
        padding: '0px',
      },
      "ul li[data-priority='default']": {
        color: 'blue',
      },
      "ul li[data-priority='urgent']": {
        color: 'red',
      }
    },
    button: {
      position:'absolute',
      top: '1em',
      right: '1em',
      background: 'transparent',
      border: 'none',
      fontSize: '5px',
    },
    img: {
      width:'20px',
      height: '20px'
    },
      menuItem: {
        position: 'absolute',
        top: '0.5em',
        right: '1em',
      },

});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};


export default Notifications;