import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import {getFullYear, getFooterCopy} from '../utils/utils'

function App() {
  return (
      <>
        <div className="root-notifications">
          <Notifications />
        </div>
        <div className="App">
          <div className="App-header">
            <Header/>
          </div>
          <div className="App-body">
            <Login />
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </>
  );
}

export default App;
