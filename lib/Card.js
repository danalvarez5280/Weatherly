import React from 'react';

export default function Card (props) {
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
      {
        props.temp &&
        <p className="card-info">{props.temp}</p>
      }
      {
        props.high &&
        <p className="card-info">{props.high}</p>
      }
      {
        props.low &&
        <p className="card-info">{props.low}</p>
      }
    </div>
  );
}
