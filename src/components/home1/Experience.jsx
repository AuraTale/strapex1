import React from 'react';

function Experience() {
  return (
    <section className="tc-experience-style1 section-padding-x">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-2">
            <div className="exp-num mb-100 wow zoomIn" data-wow-delay="0.3s">
              <h5 className="fsz-18 text-uppercase">
                years of <br /> experience
              </h5>
              <h2 className="num"> 20 </h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img wow">
              <img
                src="/home1/assets/img/home11.webp"
                alt=""
                className="img-cover"
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="info wow fadeInUp" data-wow-delay="0.6s">
              <h3 className="fsz-45 fw-600 mb-30"> Acteur de Référence</h3>
              <div className="text fsz-15 color-666">
              Strapex Maroc, spécialiste en carrelage et sanitaire, s’engage à offrir les meilleurs services grâce à une collaboration étroite avec ses clients. Sérieux, travail d’équipe et engagement sont ses valeurs clés pour bâtir une relation de confiance et garantir une satisfaction durable.
              </div>
              <a
                href="/innerpages/about"
                className="butn rounded-pill mt-50 hover-bg-black bg-white"
              >
                <span>
                  Our Studio <i className="small ms-1 ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="rotate-txt justify-content-lg-end">
              <ul>
                <li>
                  <a href="/contact"> Contact@strapexmaroc.com </a>
                </li>
                <li>
                  <a href="/contact"> 05 00 00 00 00</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src="/home1/assets/img/c_line.png" alt="" className="c-line wow" />
    </section>
  );
}

export default Experience;
