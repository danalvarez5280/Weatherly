import React from 'react';
import Card from './Card';

export default function RecentCities(props) {

let myCities = JSON.parse(localStorage.getItem('recentCities')) || [];


let topFive = myCities.slice(0, 5);
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
