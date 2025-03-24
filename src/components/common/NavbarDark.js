import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavbarDark() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle home link click
  const handleHomeClick = (e) => {
    // Only if we're not already on the home page
    if (location.pathname !== '/') {
      e.preventDefault();
      // Use window.location.href to force a full page reload
      window.location.href = '/';
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark tc-navbar-style1 section-padding-x ${
      isScrolled ? 'bg-transparent nav-scrolled' : 'bg-transparent'
    }`}>
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                href="/"
                onClick={handleHomeClick}
              >
                Acceuil
              </a>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                to="/about"
              >
                A Propos
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}
                to="/gallery"
              >
                Inspirations
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                to="/contact"
              >
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

export default NavbarDark; 