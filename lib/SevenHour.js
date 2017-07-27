import React from 'react';
import Card from './Card';

export default class SevenHour extends React.Component {
  constructor (props) {
    super();
    this.state = {
      clicked: props.searchClicked,
      sevenClicked: props.sevenClicked,
    };
  }
  render() {
    const hourlyTemp = [
      { temp: '70°F', condition: 'perfect', time: '9:00am' },
      { temp: '78°F', condition: 'pretty perfect', time: '10:00am' },
      { temp: '82°F', condition: 'really nice', time: '11:00am' },
      { temp: '88°F', condition: 'hot', time: '12:00pm' },
      { temp: '90°F', condition: 'way hot', time: '1:00pm' },
      { temp: '90°F', condition: 'still hot', time: '2:00pm' },
      { temp: '88°F', condition: 'hot', time: '3:00pm' }
    ];
    return (
      <div className="hourly-forecast">
        The 7 Hour Forecast
        <div className="seven-hour">
        {
          hourlyTemp.map(obj => {
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
}
