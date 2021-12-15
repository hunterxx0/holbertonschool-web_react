import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
    it('renders App-body div', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.contains(<main className="App-body" />))
    });
});