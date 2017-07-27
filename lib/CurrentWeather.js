import React from 'react';

 export default function CurrentWeather (props){
  return (
      <div className="current-weather">
        <p className="current-info">{props.location}</p>
        <p className="current-info">{props.date}</p>
        <p className="current-info"> <img className="sun" src="/assets/sun.svg" alt="sun image" /></p>
        <p className="current-info">{props.temp} °F</p>
        <p className="current-info">{props.condition}</p>
        <hr />
        <section className="high-low">
          <section className="high">
            <p className="current-info">High: {props.high}</p>
          </section>
          <section className="high">
            <p className="current-info">Low: {props.low}</p>
          </section>
        </section>
      </div>
  );
}
