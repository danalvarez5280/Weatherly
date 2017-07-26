import React from 'react';
import Card from './Card';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Search from './Search';
import './Styles.css';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    }
  }

  searchClicked() {
    console.log('clicked')
    this.setState({
      clicked: true
    })
  }

  render() {
    return (

      <div className="welcome-page">
        <Search
        inputValue = 'Denver'
        clickedSubmit = { this.searchClicked.bind(this) } />
        <div className="forecast">
          <CurrentWeather
            city='Denver'
            date='Tuesday, July 4th'
            temp='90°F'
            condition='F*#king Gorgeous!'
            high='90°F'
            low='79°F' />
          {this.state.clicked && <SevenHour
          searchClicked = { this.state.clicked }/>
        }
        <TenDay />
        </div>
      </div>

    );
  }
}
