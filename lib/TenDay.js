import React from 'react';
import Card from './Card';

export default class TenDay extends React.Component {
  render() {
    let dailys = [
      {day: 'Monday', condition:'perfect', high: '75°F', low: '64°F'},
      {day: 'Tuesday', condition:'pretty perfect', high: '78°F', low: '67°F'},
      {day: 'Wednesday', condition:'really nice', high: '82°F', low: '71°F'},
      {day: 'Thursday', condition:'hot!', high: '88°F', low: '77°F'},
      {day: 'Friday', condition:'way hot!', high: '90°F', low: '79°F'},
      {day: 'Saturday', condition:'really hot!', high: '90°F', low: '79°F'},
      {day: 'Sunday', condition:'hot!', high: '88°F', low: '77°F'}
    ]
    return (
      <div className="days-forcast">
      10 Day Forcast
        <div className="ten-day">
          {
            dailys.map(obj => {
              return (
                <Card day={obj.day}
                condition={obj.condition}
                high={obj.high}
                low={obj.low} />
              )
            })
          }
        </div>
      </div>
    );
  }
}
