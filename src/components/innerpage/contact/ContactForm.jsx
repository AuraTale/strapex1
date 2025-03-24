import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace these with your actual EmailJS service, template, and user IDs
    const serviceId = 'service_qgzhgos';
    const templateId = 'strapex111';
    const userId = 'bt9L2gglORx8Ht84f';

    // Create template parameters object with the correct field name for email
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email, // Make sure this matches the template parameter name
      email: formData.email, // Include both formats to ensure compatibility
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
                Votre adresse e-mail ne sera pas publiée. <br /> Les champs obligatoires
                sont marqués <span className="text-danger"> * </span>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              onSubmit={handleSubmit}
              className="form mt-5 mt-lg-0 wow fadeInUp slow"
              data-wow-delay="0.4s"
            >
              {submitStatus === 'success' && (
                <div className="alert alert-success mb-4">
                  Votre message a été envoyé avec succès!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="alert alert-danger mb-4">
                  Une erreur s'est produite. Veuillez réessayer plus tard.
                </div>
              )}
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="fullName">
                      Nom complet <span className="color-orange1"> * </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="votre nom"
                      name="fullName"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="email">
                      adresse email <span className="color-orange1">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Votre adresse email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="phone">
                      Téléphone <span className="color-999"> (optionnel) </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Votre numéro de téléphone"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="subject">
                      sujet <span className="color-orange1"> * </span>
                    </label>
                    <select 
                      name="subject" 
                      id="subject" 
                      className="form-select form-control"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value=""> Sélectionnez un sujet </option>
                      <option value="Demande de devis"> Demande de devis </option>
                      <option value="Demande d'information"> Demande d'information </option>
                      <option value="Réclamation"> Réclamation </option>
                      <option value="Collaboration & Partenariat"> Collaboration & Partenariat </option>
                      <option value="Service après-vente"> Service après-vente </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-30">
                    <label htmlFor="message"> message </label>
                    <textarea
                      rows="6"
                      placeholder="Écrivez votre message ici"
                      className="form-control"
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="butn hover-bg-orange1 text-capitalize bg-white rounded-pill mt-40"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyez votre message'}
                  <i className="fal fa-arrow-up-right ms-2"></i>
                </span>
              </button>
              <p className="fsz-12 color-666 mt-20">
                En soumettant, j'accepte les
                <a href="#" className="color-000 text-decoration-underline">
                  {' '}Conditions Générales
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
