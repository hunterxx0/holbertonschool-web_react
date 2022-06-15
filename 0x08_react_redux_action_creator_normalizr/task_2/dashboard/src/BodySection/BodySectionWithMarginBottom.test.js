import React from 'react';
import { shallow } from 'enzyme';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import * as Aphrodite from 'aphrodite';
Aphrodite.StyleSheetTestUtils.suppressStyleInjection();

describe('BodySectionWithMarginBottom', () => {
  test('render the BodySectionWithMarginBottom component', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />);
    expect(wrapper.exists());
  });

  test('BodySection check', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title"><p>test children node</p>
      </BodySectionWithMarginBottom>);
    const BodySection = wrapper.find('BodySection');
    expect(BodySection.exists()).toEqual(true)
    const Body = BodySection.dive();
    const h2 = Body.find('h2');
    expect(h2.exists()).toEqual(true)
    const p = Body.find('p');
    expect(p.exists()).toEqual(true)
    expect(p.text().includes('test children node')).toBe(true);
  });


});
