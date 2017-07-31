import React from 'react';
import Card from './Card';

export default function RecentCities(props) {

let recentCities = JSON.parse(localStorage.getItem('recentCities')) || [];
recentCities.push(props.searchedCities);
let topFive = recentCities.slice(0, 5);
let stringCities = JSON.stringify(topFive)

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
            onClick = { (e) => props.setCity(e.target.innerHTML) } >
              { obj }
            </button>
          );
        })
      }
      </div>
    </div>
  );
}
