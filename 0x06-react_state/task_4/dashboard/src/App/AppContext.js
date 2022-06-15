import React from 'react';

export const user = {
  email: 'test@gmail.com',
  password: 'test',
  isLoggedIn: false
}
export const logOut = () => { console.log('logged out successfully'); }

const AppContext = React.createContext({ ...user, logOut });

export default AppContext;