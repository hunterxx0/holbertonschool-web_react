import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.inline)}>
        <label htmlFor="email">Email:</label>
        <input className={css(styles.noBor)} type="email" id="email" name="email"/>
      </div>
      <div className={css(styles.inline)}>
        <label htmlFor="password">Password:</label>
        <input className={css(styles.noBor)} type="password" id="password" name="password"/>
      </div>
      <button className={css(styles.but)}>OK</button>
     </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
    login: {
        margin: '50px 10px',
        display: 'inline-block',

        '@media (max-width: 900px)': {
          display: 'flex',
          flexDirection: 'column',
        }
    },
    inline: {
      display: 'inline',
    },
    noBor: {
      border: 'none',
      outline: '0',
      width: '100px',
      marginRight: '50px',
    },
    but: {
      width: '30px',
    },

});

export default Login;
