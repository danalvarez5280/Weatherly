import React from 'react';

 export default class CurrentWeather extends React.Component {
   constructor(params) {
    super();
    this.state = {
      city: params.city,
      date: params.date,
      temp: params.temp,
      condition: params.condition,
      high: params.high,
      low: params.low,
      clicked: params.searchClicked
    }
  }

  render() {
    return (
        <div className="current-weather">
          <p className="current-info">{this.state.city}</p>
          <p className="current-info">{this.state.date}</p>
          <p className="current-info"> <img className="sun" src="/assets/sun.svg" alt="sun image" /></p>
          <p className="current-info">{this.state.temp}</p>
          <p className="current-info">{this.state.condition}</p>
          <hr />
          <section className="high-low">
            <section className="high">
              <p className="current-info">High: {this.state.high}</p>
            </section>
            <section className="high">
              <p className="current-info">Low: {this.state.low}</p>
            </section>
          </section>
        </div>
    );
  }
}
