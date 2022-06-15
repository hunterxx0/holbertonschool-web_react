import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import AppContext from '../App/AppContext';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { user, logOut } = this.context;
      return (
          <div className={css(styles.AppHeader)}>
            <img className={css(styles.img)} src={logo} alt="logo"/>
            <h1>School dashboard</h1>
            <>
            { !user.isLoggedIn ? null : (
              <p
              id="logoutSection"
              className={css(styles.logOut)}
              >Welcome {user.email} ( <span
                className={css(styles.slogOut)}
                onClick={() => logOut()}>logout</span> )</p>
              )
            }
            </>
          </div>
      );
    }
}

const styles = StyleSheet.create({
    AppHeader: {
        display: 'flex',
        alignItems: 'center',
        color: '#e01d3f',
        fontSize: '20px',
        borderBottom: '3px solid #e01d3f',
        width: '100%',
      },
    img: {
      width: '300px',
      minHeight: '100px',
      maxHeight: '300px',
      '@media (max-width: 900px)': {
        width: '180px',
        height: '200px',

      },
    },
    logOut: {
      color: "black",
      position: "absolute",
      left: 0,
      marginTop: "-20px",
      marginLeft: "20px",
      alignSelf: "flex-start",
    },
    slogOut: {
      cursor: "pointer",
    },

});

Header.contextType = AppContext;
export default Header;
