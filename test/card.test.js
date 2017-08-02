import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';
import LocalStorage from '../test_helpers/mockLocalStorage';

describe('Card', () => {
  let wrapper;

  window.localStorage = new LocalStorage();

  beforeEach(() => {
    wrapper = shallow(<Card />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have 1 containing div tag', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it.skip('should have 7 card properties for display', () => {
    expect(wrapper.find('p').length).toEqual(7)
  })
})
