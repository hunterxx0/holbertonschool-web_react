import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import PropTypes from 'prop-types';


export default function NotificationItem({ type, value, html, markAsRead, id }) {
  let st;
  if (type === 'default') st = css(styles.def, styles.alw);
  else if (type === 'urgent' ) st = css(styles.urg, styles.alw);
  if (html) return (<li className={st} data-priority={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>);
  return (<li className={st} data-priority={type} onClick={() => markAsRead(id)}>{value}</li>);
}

const styles = StyleSheet.create({
      def: {
        color: 'blue',
      },
      urg: {
        color: 'red',
      },
      alw: {
        '@media (max-width: 900px)': {
          fontsize: '20px',
          borderBottom: '1px solid black',
          width: '100%',
          listStyleType: 'none',
          margin: '0px',
          padding: '0px',
        }
      },
});

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
