import React from 'react';

function Map() {
  return (
    <section className="tc-map-style1">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="info-card mb-4">
              <h6 className="fsz-24 mb-15 fw-bold">Amabay ceramic city</h6>
              <ul className="color-666 lh-6">
                <li>
                  <a href="">Km9, Route de Mediouna Lot N°2, Casablanca – Maroc</a>
                </li>
                <li>
                  <a href="">Contact@strapexmaroc.com</a>
                </li>
                <li>
                  <a href="">+212 667 79 90 66</a>
                </li>
              </ul>
            </div>
            <div className="map-card wow zoomIn slow" data-wow-delay="0.2s">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0463096156166!2d-7.592054023736368!3d33.57329059343368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjgiTiA3wrAzNScyMy41Ilc!5e0!3m2!1sen!2sma!4v1700594341684!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-card mb-4">
              <h6 className="fsz-24 mb-15 fw-bold">Ceramica mall</h6>
              <ul className="color-666 lh-6">
                <li>
                  <a href="">49, Avenue Al Farabi Z.I. Tassila, Agadir – Maroc</a>
                </li>
                <li>
                  <a href="">Contact@strapemaroc.com</a>
                </li>
                <li>
                  <a href="">+212 667 79 90 66</a>
                </li>
              </ul>
            </div>
            <div className="map-card wow zoomIn slow" data-wow-delay="0.4s">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.1725247581745!2d-9.522972223736368!3d30.395397902917123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIzJzQzLjQiTiA5wrAzMScxMS4yIlc!5e0!3m2!1sen!2sma!4v1700594341684!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
