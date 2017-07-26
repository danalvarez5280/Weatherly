import React from 'react';

export default function WelcomePage(props) {
  return (
    <section className="welcome-search">
      <h1 className="welcome-header">Welcome to Weather Stalker</h1>
      <img className="creeper" src="/assets/creeper.svg" alt="guy holding binoculars" />
      <h3>Enter a City to Stalk</h3>
      <input
        type="text"
        placeholder = "Enter Location Here" />
      <button
        className="submit-btn"
        onClick = { props.clickedSubmit} >
        Submit
      </button>
    </section>
  );
}
