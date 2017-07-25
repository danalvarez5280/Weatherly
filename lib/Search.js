import React from 'react';

export default function Search (props) {
  // disableButton() {
  //   console.log('AHHHHHHhhhhHHHH');
  // }

  return (
    <section className="search-area">
      <h1><span><img className="binoculars-image" src="/assets/binoculars.svg" alt="pair of binoculars"/></span>Weather Stalker</h1>
      <input className="text-field"
        type = "text"
        placeholder = "Enter Location Here"
        value = { props.inputValue }
        onChange = { props.myCity } />
      {
        props.inputValue &&
        <button className="submit-btn">
        Submit
        </button>
      }
    </section>
  )
}
