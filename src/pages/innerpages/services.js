import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Header from '../../components/innerpage/services/Header';
import Services from '../../components/innerpage/services/Services';
import Process from '../../components/innerpage/services/Process';
import Testimonials from '../../components/innerpage/services/Testimonials';
import Footer from '../../components/innerpage/Footer';
import { Helmet } from 'react-helmet';

function ServicesPage() {
  return (
    <PageLayout
      pageTitle="Groupe Strapex Maroc"
      className="inner-pages-style1 services-pg-style1"
    >
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="/innerpages/assets/css/innerpages.css"
        />
        <script src="/common/assets/js/common_js.js"></script>
        <script src="/innerpages/assets/js/innerpages.js"></script>
      </Helmet>
      <Header />
      <main>
        <Services />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </PageLayout>
  );
}

export default ServicesPage;
