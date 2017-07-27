import React from 'react';
import Card from './Card';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Search from './Search';
import MockData from './MockAPI';
import WelcomePage from './WelcomePage';
import RecentCities from './RecentCities';
import Nav from './Nav';
import './Styles.css';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
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

  searchClicked() {
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

  getWeatherInfo() {
    fetch(`http://api.wunderground.com/api/bbfd90ee45a76bc1/conditions/q/THE_DESIRED_STATE/THE_DESIRED_CITY.json`)
  }

  // stalkCity() {
  //   this.setState()
  // }

  render() {
    let { searchClicked,
      sevenClicked,
      tenClicked,
      cityClicked,
      displayWelcome,
      weatherInfo,
      tempCities} = this.state

    return (

      <div className="page">
      {
        displayWelcome &&
        <WelcomePage
          clickedSubmit = {
            this.searchClicked.bind(this)}/>
        }
        {
          searchClicked &&
        <Search
        inputValue = 'Denver'
        clickedSubmit = { this.searchClicked.bind(this) } />
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
            city='Denver'
            date='Tuesday, July 4th'
            temp='90°F'
            condition='F*#king Gorgeous!'
            high='90°F'
            low='79°F' />
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
