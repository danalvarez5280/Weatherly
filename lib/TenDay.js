import React from 'react';
import Card from './Card';

export default function TenDay (props) {
  return (
    <div className="days-forcast">
    10 Day Forcast
      <div className="ten-day">
        {
          props.tenDayInfo.map(obj => {
            return (
              <Card day={obj.simpleforecast.forecastday.title}
              condition={obj.simpleforecast.forecastday.conditions}
              high={obj.simpleforecast.forecastday.high}
              low={obj.simpleforecast.forecastday.low} />
            );
          })
        }
      </div>
    </div>
  );
}
