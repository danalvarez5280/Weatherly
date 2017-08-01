import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';
import LocalStorage from '../test_helpers/mockLocalStorage'

describe('App', () => {
  let wrapper;
  global.localStorage = new LocalStorage();

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    console.log('App', <App />)
    expect(wrapper).toBeDefined()
  })
})
