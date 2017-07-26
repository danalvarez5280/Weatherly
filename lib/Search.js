import React from 'react';

export default function Search (props) {
  return (
    <section className="search-area">
    <img className="binoculars-image" src="/assets/binoculars.svg" alt="pair of binoculars"/>
      <h1>Weather Stalker</h1>
      <div className="inputs">
        <input className="text-field"
          type = "text"
          placeholder = "Enter Location Here"
          value = { props.inputValue } />

          <button
          className="submit-btn"
          onClick = { props.clickedSubmit} >
          Submit
          </button>
        </div>
    </section>
  );
}
