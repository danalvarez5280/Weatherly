import React from 'react';
import SevenHour from './SevenHour';
import TenDay from './TenDay';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <SevenHour />
        <TenDay />
      </div>
    )
  }
}
