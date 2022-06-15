import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }
  
  handleLoginSubmit(e) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail(e) {
    let { value } = e.target;
    const { password } = this.state;
    this.setState({ email: value });
    if (value !== '' && password !== '') {
      this.setState({ enableSubmit: true });
    }
    else {
      this.setState({ enableSubmit: false });
    }
  }

  handleChangePassword(e) {
    let { value } = e.target;
    const { email } = this.state;
    this.setState({ password: value });
    if (email !== '' && value !== '') {
      this.setState({ enableSubmit: true });
    }
    else {
      this.setState({ enableSubmit: false });
    }
  }


  render() {
    return (
      <>
        <div className={css(styles.login)}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <div className={css(styles.inline)}>
              <label htmlFor="email">Email:</label>
              <input className={css(styles.noBor)} type="email" id="email" name="email"
              value={this.state.email} onChange={this.handleChangeEmail}/>
            </div>
            <div className={css(styles.inline)}>
              <label htmlFor="password">Password:</label>
              <input className={css(styles.noBor)} type="password" id="password" name="password"
              value={this.state.password} onChange={this.handleChangePassword}/>
            </div>
            <input className={css(styles.but)} type="submit" disabled={!this.state.enableSubmit}/>
          </form>
        </div>
      </>
    );
  }
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
      width: '60px',
    },

});

export default Login;
