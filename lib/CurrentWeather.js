import React from 'react';
import WeatherColors from './WeatherColors';

export default function CurrentWeather (props){
  const propsIcon = props.icon;
  const image = `./assets/${propsIcon}.svg`;
  const backgroundColor = WeatherColors[props.condition].style;

  return (
      <div className="current-weather" style={ backgroundColor }>
        <p className="current-info">{ props.location }</p>
        <p className="current-info">{ props.date }</p>
        <p className="current-info"> <img className="main-icon" src= { image } /></p>
        <p className="current-info">{ props.temp } °F</p>
        <p className="current-info">{ props.condition }</p>
        <hr />
        <section className="high-low">
          <section className="high">
            <p className="current-info">High: { props.high } °F</p>
          </section>
          <section className="high">
            <p className="current-info">Low: { props.low } °F</p>
          </section>
        </section>
      </div>
    );
}
