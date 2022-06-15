import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App/App';
import Footer from "./Footer";
import AppContext, { user, logOut } from "../App/AppContext";
import * as Aphrodite from 'aphrodite';
Aphrodite.StyleSheetTestUtils.suppressStyleInjection();

describe('<App />', () => {
  test('renders App-body div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<main className="App-body" />))
  });

  test("check contact us not logged in", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("div.footer a")).toHaveLength(0);
  });

  test("check contact us logged in", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{ user: { ...user, isLoggedIn: true }, logOut }}
      >
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("a")).toHaveLength(1);
    expect(wrapper.find("a").text()).toEqual("Contact us");
  });
});