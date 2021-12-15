import React, { Fragment, Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import {getFullYear, getFooterCopy, getLatestNotification} from '../utils/utils'
import PropTypes from 'prop-types';


const listCourses = [
{id: 1, name: 'ES6', credit: 60},
{id: 2, name: 'Webpack', credit: 20},
{id: 3, name: 'React', credit: 40}
]

const listNotifications = [
{id: 1, type: 'default', value: 'New course available', html: null},
{id: 2, type: 'urgent', value: 'New course available', html: null},
{id: 3, type: 'urgent', value: null, html: { __html: getLatestNotification() } }
]


class App extends Component {
  render() {
    const props = this.props;
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
        <Header />
        <div className="App-body">
        {!props.isLoggedIn ? <Login />: <CourseList listCourses={listCourses} />}
        </div>
        <Footer />
        </div>
      </>
  );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
