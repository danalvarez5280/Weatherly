import React from 'react';

export default function Card (props) {
  const propsIcon = props.icon
  const image = `./assets/${propsIcon}.svg`

  return (
    <div className="card">
      {
        props.time &&
        <p className="card-info">{props.time}</p>
      }
      {
        props.day &&
        <p className="card-info">{props.day}</p>
      }
      {
        props.condition &&
        <p className="card-info">{props.condition}</p>
      }
        <p className="weather-icon card-info"><img className="small-icon" src={image}/></p>
      {
        props.temp &&
        <p className="card-info">{props.temp} °F</p>
      }
      {
        props.high &&
        <p className="card-info">{props.high} °F</p>
      }
      {
        props.low &&
        <p className="card-info">{props.low} °F</p>
      }
    </div>
  );
}
