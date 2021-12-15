import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';

describe('Footer', () => {
  test('render the Login component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });

  test('render the text “Copyright”', () => {
    const wrapper = shallow(<Footer />);
    const p = wrapper.find('p');

    const cr = /Copyright/;

    expect(cr.test(wrapper.text()));
  });
});