import React from 'react';
import Card from './Card';

export default function TenDay (props) {

  const topCities = props.suggestions;

  let recentCities = topCities.filter(el => el.frequency > 0)

  return (
    <div className="days-forcast">
    10 Day Forcast
      <div className="ten-day">
        {
          props.tenDayInfo.map(obj => {
            return (
              <Card day={obj.date.weekday}
              condition={obj.conditions}
              high={obj.high.fahrenheit}
              low={obj.low.fahrenheit}
              icon={obj.icon} />
            );
          })
        }
      </div>
    </div>
  );
}
