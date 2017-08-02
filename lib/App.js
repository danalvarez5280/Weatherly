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
      condition: '',
      date: '',
      fullLocal: '',
      high: '',
      icon: '',
      location: '',
      low: '',
      message: '',
      temp: '',
      zipCode: '',
      day: [],
      hourly: [],
      suggestions: [],
      tempCities: [],
      cityClicked: false,
      displayWelcome: true,
      searchClicked: false,
      sevenClicked: false,
      tenClicked: false,
    };
  }

  clickCity(newCity) {
    trie.select(newCity);
    this.setState({
      city: newCity,
      suggestions: [],
    });
  }

  componentWillMount() {
    const oldLocation = localStorage.getItem('currentCity');
    if (oldLocation) {
      this.setState({
        city: oldLocation,
      }, this.submitClicked);
    }
  }

  dayClicked() {
    this.setState({
      sevenClicked: false,
      tenClicked: true,
      cityClicked: false,
    });
  }

  getWeatherInfo() {
    fetch(`http://api.wunderground.com/api/${key.weathergroundKey}/conditions/hourly/forecast10day/q/${this.state.city}.json`)
    .then(data => data.json())
    .then(data => this.setState({
      location: data.current_observation.display_location.city,
      fullLocal: data.current_observation.display_location.full,
      temp: data.current_observation.temp_f,
      zipCode: data.current_observation.display_location.zip,
      condition: data.current_observation.weather,
      high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      day: data.forecast.simpleforecast.forecastday,
      hourly: data.hourly_forecast,
      icon: data.current_observation.icon,
    })
    .catch(error => {
      this.setState({
        message: 'Enter an Actual Location to Stalk' })
      })
    )
  }

  hourClicked() {
    this.setState({
      sevenClicked: true,
      tenClicked: false,
      cityClicked: false,
    });
  }

  setCity(newCity) {
    this.setState({
      suggestions: trie.suggest(newCity),
      city: newCity,
    });
  }

  setToLocal() {
    const locale = this.state.city;
    const topCities = JSON.parse(localStorage.getItem('recentCities')) || [];

    topCities.unshift(locale);

    this.setState({
      tempCities: JSON.parse(localStorage.getItem('recentCities'))
    });

    const currentCity = locale;
    const recentCities = JSON.stringify(topCities);

    localStorage.setItem('currentCity', currentCity);
    localStorage.setItem('recentCities', recentCities);
  }

  submitClicked() {
    this.setToLocal();
    this.getWeatherInfo();
    this.setState({
      searchClicked: true,
      sevenClicked: true,
      tenClicked: false,
      cityClicked: false,
      displayWelcome: false,
    });
  }

  topClicked() {
    this.setState({
      sevenClicked: false,
      tenClicked: false,
      cityClicked: true,
    });
  }

  render() {
    const { city,
      cityClicked,
      condition,
      date,
      day,
      displayWelcome,
      fullLocal,
      high,
      hourly,
      icon,
      low,
      message,
      searchClicked,
      sevenClicked,
      suggestions,
      tempCities,
      tenClicked,
      temp,
      zipCode } = this.state

    return (

      <div className="page">
        {
          displayWelcome &&
          <WelcomePage
            clickedSubmit = {this.submitClicked.bind(this) }
            setCity = { this.setCity.bind(this) }
            suggestions = { suggestions }
            clickCity = { this.clickCity.bind(this) }
            inputValue = { city }
            message = { message } />
        }
        {
          searchClicked &&
        <Search
        inputValue = { city }
        clickedSubmit = { this.submitClicked.bind(this) }
        setCity = { this.setCity.bind(this) }
        suggestions = { suggestions }
        clickCity = { this.clickCity.bind(this) }
        message = { message } />
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
            icon = { icon }
            message = { message }/>
          }
          {
            sevenClicked &&
            <SevenHour
            sevenHourInfo = { hourly }
            icon = { icon } />
          }
        {
          tenClicked &&
          <TenDay
          tenDayInfo = { day }
          icon = { icon }
          />
        }
        {
          cityClicked &&
          <RecentCities
          searchedCities = { tempCities }
          clickCity = { this.clickCity.bind(this) } />
        }
        </div>
      </div>

    );
  }
}
