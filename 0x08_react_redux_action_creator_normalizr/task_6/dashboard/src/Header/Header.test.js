import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App/App';
import Header from "./Header";
import AppContext, { user, logOut } from "../App/AppContext";
import * as Aphrodite from 'aphrodite';
Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
describe('<App />', () => {
    test('renders App-body div', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.contains(<main className="App-body" />))
    });
});

describe('check logoutSection', () => {
  test('check logoutSection while logged off', () => {
      const wrapper = mount(
        <AppContext.Provider
          value={{ user, logOut }}
        >
          <Header />
        </AppContext.Provider>
      );

      expect(wrapper.find("#logoutSection")).toHaveLength(0);
    });

    test('check logoutSection while logged in', () => {
      const wrapper = mount(
        <AppContext.Provider
          value={{ user: { ...user, isLoggedIn: true }, logOut }}
        >
          <Header />
        </AppContext.Provider>
      );

      expect(wrapper.find("#logoutSection")).toHaveLength(1);
    });

    test('try to log out', () => {
      const logOutSpy = jest.fn();

      const wrapper = mount(
        <AppContext.Provider
          value={{
            user: { ...user, isLoggedIn: true },
            logOut: logOutSpy,
          }}
        >
          <Header />
        </AppContext.Provider>
      );
      wrapper.find("#logoutSection span").simulate("click");
      expect(logOutSpy).toHaveBeenCalled();

    });

});