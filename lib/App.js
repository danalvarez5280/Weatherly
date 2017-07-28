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
      hourlyCondition: [],
      high: '',
      low: '',
      tempCities: [
        {name: 'Denver'},
        {name: 'Oklahoma City'},
        {name: 'Seattle'},
        {name: 'Austin'},
        {name: 'San Diego'}
      ],
      searchClicked: false,
      sevenClicked: false,
      tenClicked: false,
      cityClicked: false,
      displayWelcome: true,
      weatherInfo: [
        { day: 'Monday', temp: '70°F', condition: 'perfect', time: '9:00am', high: '75°F', low: '64°F'  },
        { day: 'Monday', temp: '78°F', condition: 'pretty perfect', time: '10:00am', high: '75°F', low: '64°F'  },
        { day: 'Monday', temp: '82°F', condition: 'really nice', time: '11:00am', high: '75°F', low: '64°F'  },
        { day: 'Monday', temp: '88°F', condition: 'hot', time: '12:00pm', high: '75°F', low: '64°F'  },
        { day: 'Monday', temp: '90°F', condition: 'way hot', time: '1:00pm', high: '75°F', low: '64°F'  },
        { day: 'Monday', temp: '90°F', condition: 'still hot', time: '2:00pm', high: '75°F', low: '64°F'  },
        { day: 'Monday', temp: '88°F', condition: 'hot', time: '3:00pm',high: '75°F', low: '64°F'  }
      ]
    }
  }

  submitClicked() {
    this.getWeatherInfo()
    this.setState({
      searchClicked: true,
      sevenClicked: true,
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
      city: newCity,
    })
  }

  getWeatherInfo() {
    fetch(`http://api.wunderground.com/api/${key.weathergroundKey}/conditions/hourly/forecast10day/q/Colorado/${this.state.city}.json`)
    .then(data => data.json())
    // .then(data => console.log(data))
    .then(data => this.setState({ location: data.current_observation.display_location.city,
    fullLocal: data.current_observation.display_location.full,
    temp: data.current_observation.temp_f,
    zipCode: data.current_observation.display_location.zip,
    condition: data.current_observation.weather,
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit
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
      hourlyCondition,
      high,
      low} = this.state

    return (

      <div className="page">
      {
        displayWelcome &&
        <WelcomePage
          clickedSubmit = {
            this.submitClicked.bind(this)}
            setCity= { this.setCity.bind(this) }/>
        }
        {
          searchClicked &&
        <Search
        inputValue = { city }
        clickedSubmit = { this.submitClicked.bind(this) }
        setCity = { this.setCity.bind(this) } />
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
            low = { low } />
          }
          {
            sevenClicked &&
            <SevenHour sevenHourInfo = { weatherInfo } />
          }
        {
          tenClicked &&
          <TenDay tenDayInfo = { weatherInfo } />
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
