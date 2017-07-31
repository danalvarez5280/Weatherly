import React from 'react';
import Node from './Node';


export default function Search (props) {
  return (
    <section className="search-area">
    <img className="binoculars-image" src="/assets/binoculars.svg" alt="pair of binoculars"/>
      <h1>Weather Stalker</h1>
      <div className="inputs">
        <input className="text-field"
          type = "text"
          placeholder = "Enter Location Here"
          value = { props.inputValue }
          onChange = { (e) => props.setCity(e.target.value) } />
          <button
          className="submit-btn"
          onClick = { props.clickedSubmit }
          disabled = { !props.inputValue }>
          Submit
          </button>
          <div className = "suggestion-nav">
            {
              props.inputValue.length > 0 &&
              props.suggestions.map(cityName => {
                return (
                  <button
                    className = "nav-button"
                    onClick = { (e) => props.clickCity(e.target.innerHTML) }>
                      { cityName }
                  </button>
                )
              })
            }
          </div>
        </div>
    </section>
  );
}
