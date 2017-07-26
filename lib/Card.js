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
        <p className="card-info">{this.state.time}</p>
        <p className="card-info">{this.state.day}</p>
        <p className="card-info">{this.state.condition}</p>
        <p className="card-info">{this.state.temp}</p>
        <p className="card-info">{this.state.high}</p>
        <p className="card-info">{this.state.low}</p>
      </div>
    );
  }
}
