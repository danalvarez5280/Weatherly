import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search';
import LocalStorage from '../test_helpers/mockLocalStorage';

describe('Search', () => {

  const clickSubmitFn = jest.fn();
  const setCityFn = jest.fn();
  const clickCityFn = jest.fn();

  const wrapper = shallow(<Search
  inputValue = { 'Denver' }
  clickedSubmit = { clickSubmitFn }
  setCity = { setCityFn }
  suggestions = { [] }
  clickCity = { clickCityFn } />)

  const mountWrap = mount(<Search
  inputValue = { 'Denver' }
  clickedSubmit = { clickSubmitFn }
  setCity = { setCityFn }
  suggestions = { [] }
  clickCity = { clickCityFn } />)

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should only have one secetion html tag', () => {
    expect(wrapper.find('section').length).toEqual(1)
  })

  it('should have 3 div inside that section', () => {
    expect(wrapper.find('div').length).toEqual(3)
  })

  it('should only have one button on a page load', () => {
    expect(wrapper.find('button').length).toEqual(1)
  })

  it('should run a function when the button is clicked', () => {
    const submitButton = wrapper.find('.submit-btn')

    submitButton.simulate('click')
    expect(clickSubmitFn).toHaveBeenCalled()
    expect(clickSubmitFn).toHaveBeenCalledTimes(1)

    submitButton.simulate('click')
    expect(clickSubmitFn).toHaveBeenCalledTimes(2)

  })

  it('should have 1 input field', () => {
    expect(wrapper.find('input').length).toEqual(1)
  })

  it('should have "Denver" as the value of the input field', () => {
    expect(mountWrap.props().inputValue).toEqual('Denver')
  })

  it('should have an empty array for its suggestions property', () => {
    expect(mountWrap.props().suggestions).toEqual([])
  })

  it('should have a function for the clickedSubmit property', () => {
    expect(mountWrap.props().clickedSubmit).toEqual(clickSubmitFn)
  })

  it('should have a function for the setCity property', () => {
    expect(mountWrap.props().setCity).toEqual(setCityFn)
  })

  it('should have a function for the clickCity property', () => {
    expect(mountWrap.props().clickCity).toEqual(clickCityFn)
  })
})
