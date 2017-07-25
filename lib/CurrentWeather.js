import React from 'react';

 export default class CurrentWeather extends React.Component {
   constructor(params) {
     super();
     this.state = {
       city: params.city,
       temp: params.temp,
       condition: params.condition
     }
   }
  render() {

    return(
      <div className="current-weather">
        In {this.state.city}
        <hr />
        The Temp is {this.state.temp}
        <hr />
        The Weather Right Now Is {this.state.condition}
        <hr />
      </div>
    )
  }
}
