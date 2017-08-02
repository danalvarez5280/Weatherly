import React from 'react';
import Card from './Card';

export default function RecentCities(props) {

  const myCities = JSON.parse(localStorage.getItem('recentCities')) || [];

  const topFive = myCities.slice(0, 5);

  const stringCities = JSON.stringify(topFive);

  localStorage.setItem('recentCities', stringCities);

  return (
    <div className="searched-cities">
      My Top Searches
      <div className="my-city">
      {
        topFive.map(obj => {
          return (
            <button
            className = "recent-cities"
            onClick = { (e) => props.clickCity(e.target.innerHTML) } >
              { obj }
            </button>
          );
        })
      }
      </div>
    </div>
  );
}
