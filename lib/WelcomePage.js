import React from 'react';
import Node from './Node'

export default function WelcomePage(props) {

  return (
    <section className="welcome-search">
      <h1 className="welcome-header">Welcome to Weather Stalker</h1>
      <img className="creeper" src="/assets/creeper.svg" alt="guy holding binoculars" />
      <h3>Enter a City to Stalk</h3>
      <form className="form" onSubmit = { props.clickedSubmit }>
        <input
          className = "text-field"
          type="text"
          placeholder = "Enter Location Here"
          onChange = { (e) => props.setCity(e.target.value) }
          value = { props.inputValue.toUpperCase()} />
        <button
          className="submit-btn"
          disabled = { !props.inputValue }>
          Submit
        </button>
      </form>
      <div className = "suggestion-area">
      {
        props.inputValue.length > 0 &&
        props.suggestions.map(cityName => {
          return (
            <button
              className = "suggestion-button"
              onClick = { (e) => props.clickCity(e.target.innerHTML) }>
                { cityName.toUpperCase() }
            </button>
                )
              })
            }
        </div>
      //   <p className="message">
      //  {props.message}
      //  </p>
    </section>
  );
}
