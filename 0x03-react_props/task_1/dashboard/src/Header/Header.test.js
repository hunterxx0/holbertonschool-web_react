import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';

describe('Header', () => {
  test('render the Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists());
  });

  test('render img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    const img = wrapper.find('img');
    const h1 = wrapper.find('h1');
    expect(img.exists());
    expect(h1.exists());
  });
});