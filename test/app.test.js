import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';
import MockStorage from '../test_helpers/mockLocalStorage'

describe('App', () => {
  let wrapper;
  // let mockStorage = MockStorage;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  // afterEach(() => {
  //   localStorage.clear()
  // })

  it('should exist', () => {
    // wrapper = shallow(<App />)
    // console.log(wrapper)
    expect(wrapper).toBeDefined()
  })
})
