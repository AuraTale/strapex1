import React from 'react';

function Footer() {
  return (
    <footer className="tc-footer-style1">
      <div className="container">
        <div className="top-content section-padding">
          <div className="row gx-0">
            <div className="col-lg-4">
              <div className="info-side">
                <div className="text fsz-24 color-333 lh-3 fw-600">
                Découvrez notre large gamme de solutions pour sublimer vos espaces.
                Qualité, innovation et service client sont au cœur de notre engagement
                </div>
                <div className="foot-social mt-50">
                  <a href="#">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-2">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600"> Amabay ceramic city </h5>
                <ul className="footer-links">
                  <li>
                    <a href="#">Km9, Route de Mediouna Lot N°2, Casablanca – Maroc</a>
                  </li>
                  <li>
                    <a href="#"> contact@strapexmaroc.com </a>
                  </li>
                  <li>
                    <a href="#"> +212 667 79 90 66 </a>
                  </li>
                </ul>
              </div>
              
            </div>
            <div className="col-lg-3">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600"> Ceramica mall </h5>
                <ul className="footer-links">
                  <li>
                    <a href="#">49, Avenue Al Farabi Z.I. Tassila, Agadir – Maroc</a>
                  </li>
                  <li>
                    <a href="#"> contact@strapexmaroc.com </a>
                  </li>
                  <li>
                    <a href="#"> +212 667 79 90 66 </a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="col-lg-6">
              <p className="fsz-13">© 2023 Archin Studio. All Right Reserved</p>
            </div>
            <div className="col-lg-6">
              <div className="foot-links mt-4 mt-lg-0">
                <a href="#"> Home </a>
                <a href="#"> Studio </a>
                <a href="#"> Cases </a>
                <a href="#"> News </a>
                <a href="#"> Contact </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
