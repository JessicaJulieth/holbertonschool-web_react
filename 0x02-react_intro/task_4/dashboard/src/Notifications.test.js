import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import Notifications from './Notifications';

it('renders properly', () => {
  shallow(<Notifications />);
});

it('checking render', () => {
  const wrapper = shallow(<Notifications />);

  const li = wrapper.find('div');

  assert(li);
  assert(li.length)
  expect(wrapper.text().to.be('Here is the list of notifications'));
});
