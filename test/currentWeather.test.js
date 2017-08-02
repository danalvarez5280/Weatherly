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

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have 1 containing div tag', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it.skip('should have 7 p tags', () => {
    expect(wrapper.find('p').length).toEqual(7)
  })

  it.skip('should have background colors', () => {
    expect(mountWrap.props().sevenHourInfo).toEqual([])
  })

  it.skip('should have icons', () => {
    expect(mountWrap.props().icon).toEqual('')
  })
})
