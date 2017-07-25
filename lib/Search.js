import React from 'react';

export default function Search (props) {
  // disableButton() {
  //   console.log('AHHHHHHhhhhHHHH');
  // }

  return (
    <section className="search-area">
      <input
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
