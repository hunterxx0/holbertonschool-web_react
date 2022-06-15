import React, { Fragment, Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import {getFullYear, getFooterCopy, getLatestNotification} from '../utils/utils'
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';


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
  constructor(props) {
    super(props)
    this.Loggingout = this.Loggingout.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.state = {
      displayDrawer: false,
    }
  }


  componentDidMount() {
    document.addEventListener("keydown", this.Loggingout);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.Loggingout);
  }

  Loggingout (event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert("Logging you out");
      this.props.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const props = this.props;
    const { displayDrawer } = this.state;
    return (
      <Fragment>
        <Notifications
        listNotifications={listNotifications}
        displayDrawer={displayDrawer}
        handleDisplayDrawer={this.handleDisplayDrawer}
        handleHideDrawer={this.handleHideDrawer}/>
        <div className={css(styles.App)}>
          <Header />
          <div className={css(styles.AppBody)}>
            {!props.isLoggedIn ? (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login />
              </BodySectionWithMarginBottom >
              ) : (
              <BodySectionWithMarginBottom title='Course list'>
                  <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom >
              )
            }
            <BodySection title='News from the School'>
              <p>test text</p>
            </BodySection>
          </div>
          <div className={css(styles.AppFooter)}>
            <Footer />
          </div>
        </div>
      </Fragment>
  );
  }
}

const styles = StyleSheet.create({
    App: {
        height: '100%',
        padding: '10px'
    },

    AppBody: {
        margin: '60px 40px',
        height: '500px'
    },
    AppFooter: {
        maxHeight: '10vh',
        borderTop: '3px solid #e01d3f',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        bottom: '0px',
        fontStyle: 'italic',
    },
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
