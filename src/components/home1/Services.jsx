import React from 'react';

function Services() {
  return (
    <section className="tc-services-style1">
      <div className="content section-padding section-padding-x">
        <div className="container">
          <div className="title mb-80 text-center">
            <p className="color-666 text-uppercase wow"> Nos Services </p>
          </div>
          <div className="services">
            <div className="row">
              <div className="col-lg-3">
                <a
                  href="#"
                  className="service-card wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="icon">
                    <i className="la la-hard-hat"></i>
                  </div>
                  <h5 className="fsz-24 mb-20"> Architecture & Construction </h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser1.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Planification, Visualisation 3D, Conception paysagère, Dessin structurel,
                    CGI, Supervision de construction
                  </div>
                  {/* <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span> */}
                </a>
              </div>
              <div className="col-lg-3">
                <a
                  href="#"
                  className="service-card mt-150 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon">
                    <i className="la la-bezier-curve"></i>
                  </div>
                  <h5 className="fsz-24 mb-20">Design Intérieur et Extérieur</h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser2.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Design d'intérieur, Design d'extérieur, Rénovation, Design durable,
                    Installation, Système de plomberie, Expérience 3D
                  </div>
                  {/* <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span> */}
                </a>
              </div>
              <div className="col-lg-3">
                <a
                  href="#"
                  className="service-card wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon">
                    <i className="la la-bed"></i>
                  </div>
                  <h5 className="fsz-24 mb-20"> Production de Mobilier </h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser3.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Mobilier sur mesure, Fourniture de matériaux, Boutique en ligne,
                    Distribution, Modélisation 3D
                  </div>
                  {/* <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span> */}
                </a>
              </div>
              <div className="col-lg-3">
                <a
                  href="#"
                  className="service-card mt-150 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <div className="icon">
                    <i className="la la-comments"></i>
                  </div>
                  <h5 className="fsz-24 mb-20">
                    Conseil de Projet & Supervision
                  </h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser4.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Analyse de projet, Documentation d'appel d'offres, Supervision de construction
                  </div>
                  {/* <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span> */}
                </a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="butn rounded-pill mt-80 hover-bg-black bg-orange1 text-white"
            >
              <span>
                Obtenez un devis gratuit maintenant
                <i className="small ms-1 ti-arrow-top-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Services;
