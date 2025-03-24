import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Menu() {
  const [isOpened, setIsOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on a page that needs dark text
  const needsDarkText = ['/gallery', '/contact'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Side menu toggle
    const menu_btns = document.querySelectorAll('.side_menu_btn');
    menu_btns.forEach((btn) => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.side_menu_style4').classList.toggle('show');
        setIsOpened(!isOpened);
      });
    });

    // Handle clicking outside menu to close
    const handleClickOutside = (event) => {
      const sideMenu = document.querySelector('.side_menu_style4');
      if (isOpened && sideMenu && !sideMenu.contains(event.target) && !event.target.classList.contains('side_menu_btn')) {
        sideMenu.classList.remove('show');
        setIsOpened(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpened]);

  // Function to handle home link click - force reload for home page
  const handleHomeClick = (e) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      window.location.href = '/';
    }
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark tc-navbar-style1 section-padding-x ${
        isScrolled ? 'nav-scrolled' : ''
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
                  style={{color: needsDarkText ? '#000000 !important' : ''}}
                >
                  Acceuil
                </a>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  to="/about"
                  style={{color: needsDarkText ? '#000000 !important' : ''}}
                >
                  A Propos
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}
                  to="/gallery"
                  style={{color: needsDarkText ? '#000000 !important' : ''}}
                >
                  Inspirations
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  to="/contact"
                  style={{color: needsDarkText ? '#000000 !important' : ''}}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="nav-side">
              <a 
                href="#" 
                className="icon ms-3 side_menu_btn fsz-21"
                style={{color: needsDarkText ? '#000000' : ''}}
              >
                <span>
                  <i className="la la-grip-lines"></i>{' '}
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="side_menu_style4">
        <div className="dot_shape" data-lag="0.1">
          <img src="/home1/assets/img/dots.svg" alt="" className="side_shape" />
        </div>
        <div className="main_links">
          <ul className="vertical-nav">
            <li>
              <a href="/" className="active">Acceuil</a>
            </li>
            <li>
              <a href="/about">A Propos</a>
            </li>
            <li>
              <a href="/gallery">Inspirations</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div className="side-menu-contact">
            <h6>Contact Us</h6>
            <p>
              <span>Email:</span> <a href="mailto:contact@strapexmaroc.com">contact@strapexmaroc.com</a>
            </p>
            <p>
              <span>Phone:</span> <a href="tel:+212522123456">+212 522 123 456</a>
            </p>
          </div>
          <a href="#" className="close_btn"><i className="fal fa-times"></i></a>
        </div>
      </div>
    </>
  );
}

export default Menu;
