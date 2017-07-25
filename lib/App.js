import React from 'react';
import Card from './Card';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Search from './Search';
import './Styles.css';


export default class App extends React.Component {
  render() {
    return (

      <div className="welcome-page">
        <h1>Welcome to Weather Stalker</h1>
        <Search />
        <CurrentWeather
          city='Denver'
          temp='90°F'
          condition='F*#king Gorgeous!'
          high='90°F'
          low='79°F'/>
        <SevenHour />
        <TenDay />
        <Card />
      </div>
    );
  }
}
