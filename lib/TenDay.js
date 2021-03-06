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
