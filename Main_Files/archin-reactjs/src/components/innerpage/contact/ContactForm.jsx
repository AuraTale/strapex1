import React from 'react';

function ContactForm() {
  return (
    <section className="tc-contact-form-style1">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
              <h3 className="fsz-45 fw-500 mb-80">
              Faisons de votre rêve une réalité
              </h3>
              <p className="fsz-14 color-666 mt-15">
                Your email address will not be published. <br /> Required fields
                are marked <span className="text-danger"> * </span>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              action=""
              className="form mt-5 mt-lg-0 wow fadeInUp slow"
              data-wow-delay="0.4s"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="">
                    Nom complet <span className="color-orange1"> * </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="your name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="">
                      address email <span className="color-orange1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your email address"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="">
                      Telephone <span className="color-999"> (optional) </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="">
                      subject <span className="color-orange1"> * </span>
                    </label>
                    <select name="" id="" className="form-select form-control">
                      <option value=""> Sélectionnez un sujet </option>
                      <option value=""> Demande de devis </option>
                      <option value=""> Demande d’information </option>
                      <option value=""> Réclamation </option>
                      <option value=""> Collaboration & Partenariat </option>
                      <option value=""> Service après-vente </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-30">
                    <label htmlFor=""> message </label>
                    <textarea
                      rows="6"
                      placeholder="Write your message here"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="butn hover-bg-orange1 text-capitalize bg-white rounded-pill mt-40"
              >
                <span>
                Envoyez votre message
                  <i className="fal fa-arrow-up-right ms-2"></i>
                </span>
              </a>
              <p className="fsz-12 color-666 mt-20">
                By summiting, i’m agree to the
                <a href="#" className="color-000 text-decoration-underline">
                  Terms & Conditions
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <img
        src="/innerpages/assets/img/contact_shap.png"
        alt=""
        className="shap"
      />
    </section>
  );
}

export default ContactForm;
