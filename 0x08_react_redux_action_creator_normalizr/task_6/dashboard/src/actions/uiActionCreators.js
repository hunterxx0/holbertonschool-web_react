import {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER} from './uiActionTypes';

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

export function hideNotificationDrawer () {
  return({ 'type': HIDE_NOTIFICATION_DRAWER });
}

export function boundHideNotificationDrawer() {
  return(dispatch(hideNotificationDrawer()));
}
