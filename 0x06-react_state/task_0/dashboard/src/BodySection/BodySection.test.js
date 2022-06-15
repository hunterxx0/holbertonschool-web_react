import React from 'react';
import { shallow } from 'enzyme';
import BodySection from '../BodySection/BodySection';

describe('BodySectionWithMarginBottom', () => {
  test('render the BodySection component', () => {
    const wrapper = shallow(<BodySection title="test title"><p>test children node</p>
      </BodySection>);
    expect(wrapper.exists());
  });

  test('h2 check', () => {
    const wrapper = shallow(<BodySection title="test title"><p>test children node</p>
      </BodySection>);
    const h2 = wrapper.find('h2');
    expect(h2.exists())
  });

    test('P check', () => {
    const wrapper = shallow(<BodySection title="test title"><p>test children node</p>
      </BodySection>);
    const p = wrapper.find('p');
    expect(p.exists())
    expect(p.text().includes('test children node')).toBe(true);
  });

});
