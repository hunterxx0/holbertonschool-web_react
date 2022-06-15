import React, { useContext } from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils'
import AppContext from "../App/AppContext";

function Footer() {
  const { user } = useContext(AppContext);
  return (
    <>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      { !user.isLoggedIn ? null : <a style={{textAlign: 'center'}} href="#">Contact us</a> }
    </>
  );
}

export default Footer;
