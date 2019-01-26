import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

const wrap = (props = {}) => shallow(<Checkbox {...props} />);

test('render Checkbox', () => {
  const wrapper = wrap({
    children: 'test',
    onClick: () => console.log('clicked'),
  });
  expect(wrapper.contains('test')).toBe(true);
});
