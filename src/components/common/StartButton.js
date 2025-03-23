import React from 'react';
import { Link } from 'react-router-dom';

function StartButton({ title = "Get Started", url = "/contact", className = "" }) {
  return (
    <div className={`start-button-wrapper ${className}`}>
      <Link to={url} className="start-button">
        {title}
        <span className="icon">
          <i className="fas fa-arrow-right"></i>
        </span>
      </Link>
    </div>
  );
}

export default StartButton; 