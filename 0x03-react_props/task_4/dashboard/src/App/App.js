import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import {getFullYear, getFooterCopy} from '../utils/utils'
import PropTypes from 'prop-types';

export default function App(props) {
  return (
      <>
        <Notifications />
        <div className="App">
        <Header />
        <div className="App-body">
        {!props.isLoggedIn ? <Login />: <CourseList />}
        </div>
        <Footer />
        </div>
      </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

