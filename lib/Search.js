import React from 'react';

export default class Search extends React.Component {
  render() {
    return (
      <section className="search-area">
        <input type="text" placeholder="Enter Location Here"/>
        <button className="submit-btn">
        Submit
        </button>
      </section>
    )

  }
}
