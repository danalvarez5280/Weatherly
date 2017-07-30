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
          {
            props.suggestions &&
            <p><button>{ props.suggestions }</button></p>
          }
          <button
          className="submit-btn"
          onClick = { props.clickedSubmit } >
          Submit
          </button>
        </div>
    </section>
  );
}
