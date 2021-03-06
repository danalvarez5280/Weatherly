import React from 'react';
import { shallow, mount } from 'enzyme';
import WelcomePage from '../lib/WelcomePage';
import LocalStorage from '../test_helpers/mockLocalStorage';


describe('WelcomePage', () => {
  window.localStorage = new LocalStorage();

  const clickSubmitFn = jest.fn();
  const setCityFn = jest.fn();
  const clickCityFn = jest.fn();

  const wrapper = shallow(<WelcomePage
    clickedSubmit = { clickSubmitFn }
    setCity = { setCityFn }
    suggestions = { [] }
    clickCity = { clickCityFn }
    inputValue = { 'Den' }
    />)

  const mountWrap = mount(<WelcomePage
    clickedSubmit = { clickSubmitFn }
    setCity = { setCityFn }
    suggestions = { [] }
    clickCity = { clickCityFn }
    inputValue = { 'Den' }
    />)

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have 1 section that houses the other tags', ()=> {
    expect(wrapper.find('section').length).toEqual(1)
  })

  it('should have a h1 tag', () => {
    expect(wrapper.find('h1').length).toEqual(1)
  })

  it('should have the h1 read "Welcome to Weather Stalker"', () => {
    const welcomeText = wrapper.find('h1')
    expect(welcomeText.text()).toEqual("Welcome to Weather Stalker")
  })

  it('should have the h3 tag read "Enter a City to Stalk"', () => {
    const directions = wrapper.find('h3')
    expect(directions.text()).toEqual("Enter a City to Stalk")
  })

  it('should have an image on the welcome page', () => {
    expect(wrapper.find('img').length).toEqual(1)
  })

  it('should have 1 div tag', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it('should have a submit button', () => {
    const button = wrapper.find('.submit-btn')
    expect(button).toBeDefined()
  })

  it('should be have a submit button that is clickable and runs the clickSubmitFn', () => {
    const button = wrapper.find('.submit-btn')

    button.simulate('click')
    expect(clickSubmitFn).toHaveBeenCalled();
    expect(clickSubmitFn).toHaveBeenCalledTimes(1);
  })

  it('should call the function every time the button is called.', () => {
    const button = wrapper.find('.submit-btn')

    button.simulate('click')
    expect(clickSubmitFn).toHaveBeenCalledTimes(2);

    button.simulate('click')
    expect(clickSubmitFn).toHaveBeenCalledTimes(3);

  })

  it('should have an input field', () => {
    const inputField = wrapper.find('.text-field')
    expect(inputField).toBeDefined()
  })

  it('should have a suggestion button', () => {
    const cityButton = wrapper.find('.suggestion-button')
    expect(cityButton).toBeDefined()
  })

  it('should have "Den" as the value of the input field', () => {
    expect(mountWrap.props().inputValue).toEqual('Den')
  })

  it('should have an empty array for its suggestions property', () => {
    expect(mountWrap.props().suggestions).toEqual([])
  })

  it('should have a property clickedSubmit that calls clickSubmitFn', () => {
    expect(mountWrap.props().clickedSubmit).toEqual(clickSubmitFn)
  })

  it('should have a property setCity that calls setCityFn', () => {
    expect(mountWrap.props().setCity).toEqual(setCityFn)
  })

  it('should have a property cityClicked that calls cityClickedFn', () => {
    expect(mountWrap.props().clickCity).toEqual(clickCityFn)
  })

  it.skip('should have a suggestion button that is clickable and runs the clickCityFn', () => {
    const cityButton = wrapper.find('.suggestion-button')

    cityButton.simulate('click')
    expect(clickCityFn).toHaveBeenCalled()
    // expect(clickCityFn).toHaveBeenCalledTimes(1)
    //
    // cityButton.simulate('click')
    // expect(clickCityFn).toHaveBeenCalledTimes(2)

  })


})
