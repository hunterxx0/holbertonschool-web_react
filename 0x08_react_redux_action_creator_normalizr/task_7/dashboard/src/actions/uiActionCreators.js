import {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE} from './uiActionTypes';


export function login(email, password) {
  return ({
      user: { email, password },
      'type': LOGIN
    });
}

export function boundLogin(email, password) {
  return(dispatch(login(email, password)));
}

export function logout() { 
  return({ 'type': LOGOUT });
}

export function boundLogout() {
  return(dispatch(logout()));
}

export function displayNotificationDrawer(){
  return({ 'type': DISPLAY_NOTIFICATION_DRAWER });
}

export function boundDisplayNotificationDrawer() {
  return(dispatch(displayNotificationDrawer()));
}

export function hideNotificationDrawer() {
  return({ 'type': HIDE_NOTIFICATION_DRAWER });
}

export function boundHideNotificationDrawer() {
  return(dispatch(hideNotificationDrawer()));
}

export function loginSuccess() {
  return({ 'type': LOGIN_SUCCESS });
}

export function boundLoginSuccess() {
  return(dispatch(loginSuccess()));
}

export function loginFailure() {
  return({ 'type': LOGIN_FAILURE });
}

export function boundLoginFailure() {
  return(dispatch(loginFailure()));
}

export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch("http://localhost:8564/login-success.json")
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };

}