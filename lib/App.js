import React from 'react';
import Card from './Card';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Search from './Search';
import WelcomePage from './WelcomePage';
import RecentCities from './RecentCities';
import Nav from './Nav';
import key from './keys'
import './Styles.css';
import Trie from './Trie';
import Citylist from './Citylist';
import Node from './Node';

const trie = new Trie();
trie.populate(Citylist);


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      fullLocal: '',
      location: '',
      zipCode: '',
      date: '',
      temp: '',
      condition: '',
      day:[],
      hourly: [],
      high: '',
      low: '',
      suggestions: [],
      tempCities: [
        {name: 'Denver'},
        {name: 'Oklahoma City'},
        {name: 'Seattle'},
        {name: 'Austin'},
        {name: 'San Diego'}
      ],
      icon: '',
      searchClicked: false,
      sevenClicked: false,
      tenClicked: false,
      cityClicked: false,
      displayWelcome: true,
    }
  }

  submitClicked() {
    this.getWeatherInfo()
    this.setState({
      searchClicked: true,
      sevenClicked: true,
      tenClicked: false,
      cityClicked: false,
      displayWelcome: false,
    })
  }

  hourClicked() {
    this.setState({
      sevenClicked: true,
      tenClicked: false,
      cityClicked: false,
    })
  }

  dayClicked() {
    this.setState({
      sevenClicked: false,
      tenClicked: true,
      cityClicked: false,
    })
  }

  topClicked() {
    this.setState({
      sevenClicked: false,
      tenClicked: false,
      cityClicked: true,
    })
  }

  setCity(newCity) {
    this.setState({
      suggestions: trie.suggest(newCity),
      city: newCity,
    })
  }

  getWeatherInfo() {
    fetch(`http://api.wunderground.com/api/${key.weathergroundKey}/conditions/hourly/forecast10day/q/${this.state.city}.json`)
    .then(data => data.json())
    // .then(data => console.log(data))
    .then(data => this.setState({ location: data.current_observation.display_location.city,
    fullLocal: data.current_observation.display_location.full,
    temp: data.current_observation.temp_f,
    zipCode: data.current_observation.display_location.zip,
    condition: data.current_observation.weather,
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    day: data.forecast.simpleforecast.forecastday,
    hourly: data.hourly_forecast,
    icon: data.current_observation.icon,
  }))
  }

  render() {
    let { searchClicked,
      sevenClicked,
      tenClicked,
      cityClicked,
      displayWelcome,
      weatherInfo,
      tempCities,
      city,
      fullLocal,
      zipCode,
      date,
      temp,
      condition,
      hourly,
      high,
      low,
      icon,
      suggestions,
      day,} = this.state

    return (

      <div className="page">
      {
        displayWelcome &&
        <WelcomePage
          clickedSubmit = {
            this.submitClicked.bind(this) }
            setCity = { this.setCity.bind(this) }
            suggestions = { suggestions } />
        }
        {
          searchClicked &&
        <Search
        inputValue = { city }
        clickedSubmit = { this.submitClicked.bind(this) }
        setCity = { this.setCity.bind(this) }
        suggestions = { suggestions }  />
        }
        { searchClicked &&
          <Nav
          sevenClicked = { this.hourClicked.bind(this) }
          tenClicked = { this.dayClicked.bind(this) }
          cityClicked = { this.topClicked.bind(this) } />
        }
        <div className="forecast">
          {
            searchClicked &&
            <CurrentWeather
            location= { fullLocal }
            date = { date }
            temp = { temp }
            zipCode = { zipCode }
            condition = { condition }
            high = { high }
            low = { low }
            icon = { icon } />
          }
          {
            sevenClicked &&
            <SevenHour sevenHourInfo = { hourly }
            icon = { icon } />
          }
        {
          tenClicked &&
          <TenDay tenDayInfo = { day } icon = { icon } />
        }
        {
          cityClicked &&
          <RecentCities searchedCities = { tempCities } />
        }
        </div>
      </div>

    );
  }
}
