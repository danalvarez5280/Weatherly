import React from 'react';
import Card from './Card';

export default function SevenHour (props) {
  return (
    <div className="hourly-forecast">
      The 7 Hour Forecast
      <div className="seven-hour">
      {
        props.sevenHourInfo.map(obj => {
          return (
            <Card time={obj.time}
            condition={obj.condition}
            temp={obj.temp} />
          );
        })
      }
      </div>
    </div>
  );
}
