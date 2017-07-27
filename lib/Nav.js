import React from 'react';

export default function Search (props) {
  return (
    <nav className="tab-navigation">
      <button onClick = { props.sevenClicked }>
      7 Hour
      </button>

      <button onClick = { props.tenClicked }>
      10 Day
      </button>

      <button onClick = { props.cityClicked }>
      Top Cities
      </button>
    </nav>
  );
}
