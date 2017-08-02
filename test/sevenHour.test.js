import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/SevenHour';
import LocalStorage from '../test_helpers/mockLocalStorage';

describe('SevenHour', () => {

  const hours = [];
  const icons = '';

  const wrapper = shallow(<SevenHour
    sevenHourInfo = { hours }
    icon = { icons }
    />);

  const mountWrap = mount(<SevenHour
    sevenHourInfo = { hours }
    icon = { icons }
    />);

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have 2 div tags', () => {
    expect(wrapper.find('div').length).toEqual(2)
  })

  it('should have a property sevenHourInfo set to an empty array', () => {
    expect(mountWrap.props().sevenHourInfo).toEqual([])
  })

  it('should have a property of icon set to an empyt string', () => {
    expect(mountWrap.props().icon).toEqual('')
  })
})
