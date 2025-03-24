import React, { useEffect } from 'react';

function Testimonials() {
  useEffect(() => {
    // Initialize testimonials slider when component mounts
    if (typeof window !== 'undefined') {
      const initSlider = () => {
        if (document.querySelector('.tc-testimonials-style1 .swiper-container')) {
          const swiper = new window.Swiper('.tc-testimonials-style1 .swiper-container', {
            spaceBetween: 30,
            slidesPerView: 1,
            pagination: {
              el: '.tc-testimonials-style1 .swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.tc-testimonials-style1 .swiper-button-next',
              prevEl: '.tc-testimonials-style1 .swiper-button-prev',
            },
            speed: 800,
            effect: 'fade',
            fadeEffect: {
              crossFade: true
            },
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            },
          });
        }
      };

      // Add a slight delay to ensure DOM is fully loaded
      setTimeout(initSlider, 500);
    }
  }, []);

  return (
    <section className="tc-testimonials-style1 section-padding overflow-hidden" data-scroll-index="5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="title">
              <h3 className="fsz-30 mb-30">Ce que nos clients disent</h3>
              <span className="bottom-line"></span>
            </div>
            <div className="slider-controls">
              <div className="swiper-button-prev">
                <span className="ti-angle-left"></span>
              </div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-next">
                <span className="ti-angle-right"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="text">
                      Strapex Maroc a complètement transformé notre salle de bain. Leurs carrelages sont d'une qualité exceptionnelle et leur service client est irréprochable. Je suis vraiment satisfaite du résultat!
                    </div>
                    <div className="user-info mt-40">
                      {/* <div className="user-img">
                        <img src="/home1/assets/img/testimonials/1.jpg" alt="" />
                      </div> */}
                      <div className="user-details">
                        <h6 className="fsz-18">Samira Bennani</h6>
                        <p className="fsz-12 color-999">Architecte d'intérieur</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="text">
                      Pour notre nouvel hôtel, nous cherchions des carrelages à la fois élégants et durables. Strapex Maroc nous a fourni exactement ce dont nous avions besoin avec un excellent rapport qualité-prix.
                    </div>
                    <div className="user-info mt-40">
                      {/* <div className="user-img">
                        <img src="/home1/assets/img/testimonials/2.jpg" alt="" />
                      </div> */}
                      <div className="user-details">
                        <h6 className="fsz-18">Youssef El Mansouri</h6>
                        <p className="fsz-12 color-999">Promoteur immobilier</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="text">
                      Je recommande vivement Strapex Maroc pour la qualité de leurs produits et le professionnalisme de leur équipe. La livraison a été ponctuelle et l'installation impeccable.
                    </div>
                    <div className="user-info mt-40">
                      {/* <div className="user-img">
                        <img src="/home1/assets/img/testimonials/3.jpg" alt="" />
                      </div> */}
                      <div className="user-details">
                        <h6 className="fsz-18">Fatima Zahra Alaoui</h6>
                        <p className="fsz-12 color-999">Décoratrice</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="c-line mt-100"></div>
    </section>
  );
}

export default Testimonials;
