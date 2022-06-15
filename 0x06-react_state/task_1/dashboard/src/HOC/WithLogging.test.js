import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging  from './WithLogging';

describe('WithLogging', () => {
  test('render the WithLogging component', () => {
    console.log = jest.fn();

    const HOC = WithLogging(() => <p />);

    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);

    expect(console.log).toHaveBeenNthCalledWith(
      1,
      'Component Component is mounted'
    );
    wrapper.unmount();
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      'Component Component is going to unmount'
    );

    jest.restoreAllMocks();
  });
});
