import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark tc-navbar-style1 section-padding-x">
      <div className="container-fluid content">
        <Link className="navbar-brand" to="/">
          <img src="/home1/assets/img/logo.png" alt="" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Acceuil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                A Propos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Inspirations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-side">
            <a href="#" className="icon ms-3 side_menu_btn fsz-21">
              <span>
                <i className="la la-grip-lines"></i>{' '}
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 