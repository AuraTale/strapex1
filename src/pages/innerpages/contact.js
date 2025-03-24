import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Menu from '../../components/home1/Menu';
import Header from '../../components/innerpage/contact/Header';
import ContactInfo from '../../components/innerpage/contact/ContactInfo';
import Map from '../../components/innerpage/contact/Map';
import ContactForm from '../../components/innerpage/contact/ContactForm';
import Footer from '../../components/innerpage/Footer';

function ContactPage() {
  return (
    <PageLayout
      pageTitle="Groupe Strapex Maroc"
      className="inner-pages-style1 contact-pg-style1"
      darkNavbar
    >
      <Menu />
      <Header />
      <main>
        {/* <ContactInfo /> */}
        <Map />
        <ContactForm />
      </main>
      <Footer />
    </PageLayout>
  );
}

export default ContactPage;
