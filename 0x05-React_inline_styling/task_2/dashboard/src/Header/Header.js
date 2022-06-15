import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';


function Header() {
  return (
      <>
        <div className={css(styles.AppHeader)}>
          <img src={logo} alt="logo"/>
          <h1>School dashboard</h1>
        </div>
      </>
  );
}

const styles = StyleSheet.create({
    AppHeader: {
        display: 'flex',
        alignItems: 'center',
        color: '#e01d3f',
        fontSize: '20px',
        borderBottom: '3px solid #e01d3f',
        'img': {
          width: '300px',
          minHeight: '100px',
          maxHeight: '300px',
        },
      },

});

export default Header;
