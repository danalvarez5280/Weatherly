import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather';
import LocalStorage from '../test_helpers/mockLocalStorage';

describe('Current Weather', () => {
  const icons = '';
  const bgColor = '';

  const wrapper = shallow(<CurrentWeather
    propsIcon = { icons }
    backgroundColor = { bgColor }
    />);

  const mountWrap = mount(<CurrentWeather
    propsIcon = { icons }
    backgroundColor = { bgColor }
    />);

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it.skip('should have 1 containing div tag', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
})
