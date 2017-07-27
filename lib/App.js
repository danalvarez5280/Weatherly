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
      // city: MockData.current_observation.display_location.full,
      clicked: false,
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
      clicked: true,
      sevenClicked: true,
      displayWelcome: false,
    })
  }

  hourClicked() {
    this.setState({
      clicked: true,
      sevenClicked: true,
      tenClicked: false,
      cityClicked: false,
    })
  }

  dayClicked() {
    this.setState({
      clicked: true,
      sevenClicked: false,
      tenClicked: true,
      cityClicked: false,
    })
  }

  topClicked() {
    this.setState({
      clicked: true,
      sevenClicked: false,
      tenClicked: false,
      cityClicked: true,
    })
  }

  render() {
    return (

      <div className="page">
      {
        this.state.displayWelcome &&
        <WelcomePage
          clickedSubmit = {
            this.searchClicked.bind(this)}/>
        }
        {
          this.state.clicked &&
        <Search
        inputValue = 'Denver'
        clickedSubmit = { this.searchClicked.bind(this) } />
        }
        { this.state.clicked &&
          <Nav
          sevenClicked = { this.hourClicked.bind(this) }
          tenClicked = { this.dayClicked.bind(this) }
          cityClicked = { this.topClicked.bind(this) } />
        }
        <div className="forecast">
          {
            this.state.clicked &&
            <CurrentWeather
            city='Denver'
            date='Tuesday, July 4th'
            temp='90°F'
            condition='F*#king Gorgeous!'
            high='90°F'
            low='79°F' />
          }
          {
            this.state.sevenClicked &&
            <SevenHour sevenHourInfo = {this.state.weatherInfo}/>
          }
        {
          this.state.tenClicked &&
          <TenDay tenDayInfo = {this.state.weatherInfo}/>
        }
        {
          this.state.cityClicked &&
          <RecentCities />
        }
        </div>
      </div>

    );
  }
}
