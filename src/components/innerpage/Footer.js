import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container-fluid footer-main">
        <div className="row align-items-center justify-content-between">
          {/* Logo and Company Info Section */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="footer-brand">
              <Link to="/" className="d-block mb-3">
                <img src="/home1/assets/img/logo.png" alt="Strapex Maroc" className="logo img-fluid" />
              </Link>
              <p className="footer-tagline">Du carrelage de qualité pour un espace qui vous ressemble.</p>
              <div className="social-icons mt-4">
                <a href="#" className="social-icon"><i className="lab la-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="lab la-instagram"></i></a>
                <a href="#" className="social-icon"><i className="lab la-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h4 className="footer-heading">Navigation</h4>
            <nav className="footer-nav">
              <ul className="footer-links list-unstyled">
                <li><Link to="/" className="footer-link"><i className="las la-angle-right"></i> Accueil</Link></li>
                <li><Link to="/about" className="footer-link"><i className="las la-angle-right"></i> A Propos</Link></li>
                <li><Link to="/gallery" className="footer-link"><i className="las la-angle-right"></i> Inspirations</Link></li>
                <li><Link to="/contact" className="footer-link"><i className="las la-angle-right"></i> Contact</Link></li>
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="col-lg-4 col-md-6">
            <h4 className="footer-heading">Contactez-nous</h4>
            <div className="contact-info">
              <p><i className="las la-map-marker"></i> 123 Rue Example, Casablanca, Maroc</p>
              <p><i className="las la-phone"></i> +212 522 123 456</p>
              <p><i className="las la-envelope"></i> contact@strapexmaroc.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom py-3 mt-4">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <p className="copyright mb-0">© 2025 Strapex Maroc. Tous droits réservés</p>
            </div>
            {/* <div className="col-md-6 text-md-end">
              <p className="mb-0">Conçu avec <i className="las la-heart text-danger"></i> pour des espaces exceptionnels</p>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;