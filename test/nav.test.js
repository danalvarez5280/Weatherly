import React from 'react';
import { shallow, mount } from 'enzyme';
import Nav from '../lib/Nav';

describe('Nav', () => {
  const clickNavFn = jest.fn();

  const wrapper = shallow(<Nav
    sevenClicked = { clickNavFn }
    tenClicked = { clickNavFn }
    cityClicked = { clickNavFn }/>)

  const mountWrap = mount(<Nav
    sevenClicked = { clickNavFn }
    tenClicked = { clickNavFn }
    cityClicked = { clickNavFn }/>)

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have 3 buttons', () => {
    expect(wrapper.find('button').length).toEqual(3)
  })

  it('should have a function for the sevenClicked property', () => {
    expect(mountWrap.props().sevenClicked).toEqual(clickNavFn)
  })

  it('should have a function for the tenClicked property', () => {
    expect(mountWrap.props().tenClicked).toEqual(clickNavFn)
  })

  it('should have a function for the cityClicked property', () => {
    expect(mountWrap.props().cityClicked).toEqual(clickNavFn)
  })

  it.skip('should run a function when a tab button is clicked', () => {
  const navButton = wrapper.find('button')

  navButton.simulate('click')
  expect(clickNavFn).toHaveBeenCalled()
  expect(clickNavFn).toHaveBeenCalledTimes(1)

  navButton.simulate('click')
  expect(clickNavFn).toHaveBeenCalledTimes(2)
  })
})
