import React from 'react';

export default class Card extends React.Component {
  constructor(params){
    super();
    this.state = {
      day: params.day,
      time: params.time,
      temp: params.temp,
      high: params.high,
      low: params.low,
      condition: params.condition
    }
  }

  render() {
    return (
      <div className="card">
        <p>{this.state.time}</p>
        <p>{this.state.day}</p>
        <p>{this.state.condition}</p>
        <p>{this.state.temp}</p>
        <p>{this.state.high}</p>
        <p>{this.state.low}</p>
      </div>
    )

  }
}
