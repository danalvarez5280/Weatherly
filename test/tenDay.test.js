import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/TenDay';
import LocalStorage from '../test_helpers/mockLocalStorage';

describe('TendDay', () => {

  const days = [];
  const icons = '';

  const wrapper = shallow(<TenDay
  tenDayInfo = { days }
  icon = { icons }
  />);

  const mountWrap = mount(<TenDay
  tenDayInfo = { days }
  icon = { icons }
  />);

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have 2 div tags', () => {
    expect(wrapper.find('div').length).toEqual(2)
  })

  it('should have a property tenDayInfo set to an empty array', () => {
    expect(mountWrap.props().tenDayInfo).toEqual([])
  })

  it('should have a property of icon set to an empyt string', () => {
    expect(mountWrap.props().icon).toEqual('')
  })
})
