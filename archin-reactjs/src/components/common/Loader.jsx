import React from 'react';

function Loader() {
  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="loader-wrap-heading">
        <div className="load-text">
          <span>S</span>
          <span>T</span>
          <span>R</span>
          <span>A</span>
          <span>P</span>
          <span>E</span>
          <span>X</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
