import React from 'react';
import { shallow, mount } from 'enzyme';
import RecentCities from '../lib/RecentCities';
import LocalStorage from '../test_helpers/mockLocalStorage';


describe('RecentCities', () => {
  window.localStorage = new LocalStorage();

  const mockCities = JSON.parse(window.localStorage.getItem('recentCities')) || [];

  const cityClickedFn = jest.fn();

  const wrapper = shallow(<RecentCities
  searchedCities = { mockCities }
  clickCity = { cityClickedFn } />)

  it.skip('should have some divs', () => {
    expect(wrapper.find('div').length).toEqual(2)
  })
})
