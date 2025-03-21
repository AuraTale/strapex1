import React from 'react';

function ContactInfo() {
  return (
    <section className="tc-contact-info-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="info-cards">
              <div className="row">
                <div className="col-lg-6">
                  <div className="item mt-50">
                    <h6 className="fsz-24 mb-15 fw-bold"> Amabay ceramic city </h6>
                    <ul className="color-666 lh-6">
                      <li>
                        <a href="#"> Km9, Route de Mediouna Lot N°2, Casablanca – Maroc </a>
                      </li>
                      <li>
                        <a href="#"> Contact@strapexmaroc.com </a>
                      </li>
                      <li>
                        <a href="#"> +212 667 79 90 66 </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="item mt-50">
                    <h6 className="fsz-24 mb-15 fw-bold"> Ceramica mall </h6>
                    <ul className="color-666 lh-6">
                      <li>
                        <a href="#">49, Avenue Al Farabi Z.I. Tassila, Agadir – Maroc</a>
                      </li>
                      <li>
                        <a href="#"> Contact@strapemaroc.com </a>
                      </li>
                      <li>
                        <a href="#"> +212 667 79 90 66 </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="social-icons mt-50 text-lg-end">
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
      </div>
    </section>
  );
}

export default ContactInfo;
