import React from 'react';
import Card from './Card';

export default class RecentCities extends React.Component {
  constructor (props) {
    super();
    this.state = {
      clicked: props.searchClicked,
    };
  }
  render() {
    const searchedCities = [
      { city: 'Oklahoma City' },
      { city: 'Seattle' },
      { city: 'Dallas' },
      { city: 'Denver' },
      { city: 'New York City' },
    ];
    return (
      <div className="searched-cities">
        My Top Searches
        <div className="my-city">
        {
          searchedCities.map(obj => {
            return (
              <Card time={obj.city} />
            );
          })
        }
        </div>
      </div>

    );
  }
}
