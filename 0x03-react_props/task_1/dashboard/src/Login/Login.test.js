import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from './Login';

describe('Login', () => {

  test('render the Login component', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists());
  });

  test('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    const inp = wrapper.find('input');
    const lab = wrapper.find('label');
    expect(inp).to.have.lengthOf(2);
    expect(lab).to.have.lengthOf(2);;
  });
});