import React from 'react';
import Card from './Card';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Search from './Search';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <Search />
        <SevenHour />
        <TenDay />
        <Card />
        <CurrentWeather />
      </div>
    );
  }
}
