import React from 'react';
import { shallow } from 'enzyme';
import RadioButton from './RadioButton';

const wrap = (props = {}) => shallow(<RadioButton {...props} />);

test('render RadioButton', () => {
  const wrapper = wrap({
    children: 'test',
    onClick: () => console.log('clicked'),
  });
  expect(wrapper.contains('test')).toBe(true);
});
