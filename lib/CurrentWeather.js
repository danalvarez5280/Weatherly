import React from 'react';

 export default class CurrentWeather extends React.Component {
   constructor(params) {
     super();
     this.state = {
       city: params.city,
       temp: params.temp,
       condition: params.condition,
       high: params.high,
       low: params.low
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
        <section className="high-low">
          <section className="high">
          High: {this.state.high}
          </section>
          <section className="high">
          Low: {this.state.low}
          </section>
        </section>
      </div>
    )

  }
}
