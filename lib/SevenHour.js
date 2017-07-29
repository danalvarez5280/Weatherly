import React from 'react';
import Card from './Card';

export default function SevenHour (props) {
  const hourlyInfo = props.sevenHourInfo.slice(0, 6)

  return (
    <div className="hourly-forecast">
      The 7 Hour Forecast
      <div className="seven-hour">
      {
        hourlyInfo.map(obj => {
          return (
            <Card time={obj.FCTTIME.civil}
            condition={obj.condition}
            temp={obj.temp.english}
            icon={obj.icon} />
          );
        })
      }
      </div>
    </div>
  );
}
