import React, { Fragment, PureComponent } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

class Notifications extends PureComponent  {
  constructor(props) {
    super(props);
  }



  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead, } = this.props;
    const menuShow = css(displayDrawer ? styles.menuNoShow : styles.menuShow);
  	return (
      <Fragment>
        <div className={`menuItem ${css(styles.menuItem)}`}
        onClick={handleDisplayDrawer}>
          <p className={menuShow}>Your notifications</p>
        </div>
        { !displayDrawer ? null : (
          <div className={`Notifications ${css(styles.Notifications)}`}>
            { !listNotifications || !listNotifications.length ? (<p>No new notifications for now</p>) : (
              <Fragment>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.noPad)}>
                  {
                    listNotifications.map(function (notif) {
                      return (
                        <NotificationItem
                        key={notif.id}
                        type={notif.type}
                        value={notif.value}
                        html={notif.html} 
                        markAsRead={markNotificationAsRead}
                        id={notif.id}
                        />
                        );
                    })
                  }
                </ul>
              </Fragment>
              )
            }
            <button
              className={`button ${css(styles.button)}`}
              aria-label='Close'
              onClick={handleHideDrawer}>
              <img src={close_icon} className={css(styles.img)}/>
            </button>
          </div> )
        }
      </Fragment>
    );
  }
}



const opac = {
  from: {
    opacity: '0.5',
  },
  to: {
    opacity: '1',
  },
};

const transl = {
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '75%': {
    transform: 'translateY(5px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
};


const styles = StyleSheet.create({
    menuItem: {
      float: 'right',
      backgroundColor: "#fff8f8",
      ':hover': {
        cursor: 'pointer',
        animationName: [opac, transl],
        animationDuration: '1s, 0.5s',
        animationIterationCount: '3',
      },
    },
    menuNoShow: {
      margin: "5px",
      display: "none",
    },
    menuShow: {
      margin: "5px",
    },
    Notifications: {
      border: '3px dashed #e01d3f',
      padding: '5px',
      width: '30%',
      minHeight: '100px',
      position: 'absolute',
      right: '1em',
      marginTop: '20px',
      paddingBottom: '20px',
      paddingTop: '10px',
      paddingLeft: '20px',
      'p': {
        margin: '0px',
        padding: '0px',
      },
      '@media (max-width: 900px)': {
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        right: '0',
        margin: '0px',
        padding: '0px',
        position: 'fixed',
        zIndex: '10',
        background: 'white',
        border: 'none',
        fontsize: '20px',
      },

    },
    noPad: {
      '@media (max-width: 900px)': {
        margin: '0px',
        padding: '0px',
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

});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};


export default Notifications;