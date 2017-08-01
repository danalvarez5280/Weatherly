import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';
import LocalStorage from '../test_helpers/mockLocalStorage';

describe('App', () => {
  let wrapper;
  window.localStorage = new LocalStorage();

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render the components pretty much everything', () => {
    expect(wrapper.find('WelcomePage').length).toEqual(1)
  })

  it('should have some states assigned to empty strings', () => {
    expect(wrapper.state().city).toEqual('')
    expect(wrapper.state().fullLocal).toEqual('')
    expect(wrapper.state().location).toEqual('')
    expect(wrapper.state().zipCode).toEqual('')
    expect(wrapper.state().date).toEqual('')
    expect(wrapper.state().temp).toEqual('')
    expect(wrapper.state().condition).toEqual('')
    expect(wrapper.state().high).toEqual('')
    expect(wrapper.state().low).toEqual('')
    expect(wrapper.state().icon).toEqual('')
  })

  it('should have some states assigned to empty arrays', () =>{
    expect(wrapper.state().day).toEqual(expect.arrayContaining([]))
    expect(wrapper.state().hourly).toEqual(expect.arrayContaining([]))
    expect(wrapper.state().suggestions).toEqual(expect.arrayContaining([]))
    expect(wrapper.state().tempCities).toEqual(expect.arrayContaining([]))
  })

  it('should have soem states set to boolean values', () => {
    expect(wrapper.state().searchClicked).toEqual(false)
    expect(wrapper.state().sevenClicked).toEqual(false)
    expect(wrapper.state().tenClicked).toEqual(false)
    expect(wrapper.state().cityClicked).toEqual(false)
    expect(wrapper.state().displayWelcome).toEqual(true)
  })

  
})
