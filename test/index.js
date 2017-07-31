import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/components/App';


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  afterEach(() => {
    localStorage.clear()
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })
})
