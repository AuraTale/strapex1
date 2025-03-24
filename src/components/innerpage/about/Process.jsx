import React from 'react';

function Process() {
  return (
    <section className="tc-process-style2">
      <div className="container">
        <h2 className="fsz-45 fw-500 mb-80 text-center">
          Notre Approche
          <span className="sub-font fst-italic color-orange1 fw-400">
            processus
          </span>
        </h2>
        <div className="content">
          <div className="row">
            <div className="col-lg-5">
              <div className="accordion-side wow fadeInUp slow">
                <div className="accordion" id="accordionProcess">
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                      >
                        <span className="num"> 1 / </span> <h3> Notre histoire </h3>
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          Fondée avec passion et expertise, Strapex Maroc s'est établie comme 
                          un leader dans le domaine des matériaux de construction et de décoration. 
                          Notre parcours est marqué par un engagement constant envers l'excellence 
                          et l'innovation dans tous nos produits et services.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                      >
                        <span className="num"> 2 / </span> <h3> Notre vision </h3>
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          Nous aspirons à transformer les espaces de vie au Maroc en alliant 
                          esthétique et fonctionnalité. Notre vision est de devenir la référence 
                          incontournable pour tous les projets de construction et de rénovation, 
                          en proposant des solutions innovantes et durables.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                      >
                        <span className="num"> 3 / </span> <h3> Notre mission </h3>
                      </button>
                    </div>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          Notre mission est d'offrir des produits de haute qualité et un service 
                          client exceptionnel. Nous nous engageons à comprendre les besoins uniques 
                          de chaque client et à leur fournir des solutions personnalisées qui 
                          dépassent leurs attentes.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                      >
                        <span className="num"> 4 / </span> <h3> Cause sociale </h3>
                      </button>
                    </div>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          Chez Strapex Maroc, nous croyons en la responsabilité sociale. 
                          Nous soutenons activement des initiatives locales et nous nous 
                          engageons à adopter des pratiques commerciales durables qui 
                          respectent l'environnement et contribuent positivement à la 
                          communauté marocaine.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <a
                  href="#"
                  className="butn bg-white rounded-pill mt-50 hover-bg-black"
                >
                  <span>
                    Get A Free Quotes
                    <i className="ms-2 fal fa-long-arrow-right ico-45"></i>
                  </span>
                </a> */}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="imgs">
                <div className="img" data-lag="0.2">
                  <img
                    src="/innerpages/assets/img/process/proc5.webp"
                    alt=""
                    className="img-cover"
                  />
                  
                </div>
                <div className="img" data-lag="0.4">
                  <img
                    src="/innerpages/assets/img/process/proc2.webp"
                    alt=""
                    className="img-cover"
                  />
                  
                </div>
                <div className="img" data-lag="0.3">
                  <img
                    src="/innerpages/assets/img/process/proc3.webp"
                    alt=""
                    className="img-cover"
                  />
                  
                </div>
                <div className="img" data-lag="0.5">
                  <img
                    src="/innerpages/assets/img/process/proc4.webp"
                    alt=""
                    className="img-cover"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/innerpages/assets/img/prc_bg.png"
        alt=""
        className="bg"
        data-speed="1.2"
      />
    </section>
  );
}

export default Process;
