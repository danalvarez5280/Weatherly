import React from 'react';
import Node from './Node';


export default function Search (props) {
  return (
    <section className="search-area">
      <div className="left-nav">
        <h1>Weather Stalker</h1>
        <img className="binoculars-image" src="/assets/binoculars.svg" alt="pair of binoculars" />
      </div>
      <div className="inputs">
        <form onSubmit = { props.clickedSubmit }>
          <input className="text-field"
            type = "text"
            placeholder = "Enter Location Here"
            value = { props.inputValue.toUpperCase() }
            onChange = { (e) => props.setCity(e.target.value) }
            onEnter = { props.clickedSubmit } />
            <button
            className="submit-btn"
            disabled = { !props.inputValue }>
            Submit
            </button>
          </form>
          <div className = "suggestion-nav">
            {
              props.inputValue.length > 0 &&
              props.suggestions.map(cityName => {
                return (
                  <button
                    className = "nav-button"
                    onClick = { (e) => props.clickCity(e.target.innerHTML) }>
                      { cityName.toUpperCase() }
                  </button>
                )
              })
            }
          </div>
        </div>
    </section>
  );
}
