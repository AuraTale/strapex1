import React from 'react';

function MainInfo() {
  return (
    <section className="tc-main-info-style2">
      <div className="container">
        <div className="row gx-0">
          <div className="col-lg-4">
            <h4 className="fsz-45 fw-bold js-splittext-lines">
              L'architecture est un art visuel et les bâtiments parlent d'eux-mêmes
            </h4>
            <a
              href="#"
              className="butn hover-bg-orange1 text-capitalize bg-white rounded-pill mt-90"
            >
              <span>
                Voir sur Behance <i className="fal fa-arrow-up-right ms-2"></i>
              </span>
            </a>
          </div>
          <div className="col-lg-6 offset-lg-2 mt-5 mt-lg-0">
            <h6
              className="fsz-24 fw-500 mt-4 mt-lg-0 wow fadeInUp slow"
              data-wow-delay="0.2s"
            >
              Nichée au cœur de Forest Hill à Boston, se dressait une villa
              qui incarnait une connexion profonde entre le monde naturel et
              le confort de la vie moderne.
            </h6>
            <h6
              className="fsz-24 fw-500 mt-40 wow fadeInUp slow"
              data-wow-delay="0.4s"
            >
              Plus qu'une simple maison, c'était une expérience immersive, un témoignage
              de l'esprit de son environnement.
            </h6>
            <ul className="lh-6 mt-70 wow fadeInUp slow" data-wow-delay="0.6s">
              <li className="fsz-18">
                <span className="color-666"> Emplacement: </span> 2221 Sw Broadway
                Dr, Portland, OR 97201
              </li>
              <li className="fsz-18">
                <span className="color-666"> Services: </span> Design d'Intérieur,
                Mobilier
              </li>
              <li className="fsz-18">
                <span className="color-666"> Collaborateurs: </span> Logan
                Architecte, Moussa Ingénieur
              </li>
              <li className="fsz-18">
                <span className="color-666"> Statut: </span> Achevé en
                août 2023
              </li>
            </ul>
          </div>
        </div>
        <div className="imgs">
          <div className="row">
            <div className="col-lg-4">
              <div className="sm-img wow zoomIn slow" data-wow-delay="0.2s">
                <img
                  src="/innerpages/assets/img/s_project2/about1.jpg"
                  alt=""
                  className="img-cover"
                  data-speed="1.5"
                />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-2">
              <div className="lg-img wow zoomIn slow" data-wow-delay="0.4s">
                <img
                  src="/innerpages/assets/img/s_project2/about2.jpg"
                  alt=""
                  className="img-cover"
                  data-speed="1.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainInfo;
