import React from 'react';
import Card from './Card';

export default function RecentCities(props) {

  return (
    <div className="searched-cities">
      My Top Searches
      <div className="my-city">
      {
        props.searchedCities.map(obj => {
          return (
            <button className="recent-cities">{ obj }</button>
          );
        })
      }
      </div>
    </div>
  );
}
