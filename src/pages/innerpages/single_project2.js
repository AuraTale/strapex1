import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Header from '../../components/innerpage/single_project2/Header';
import MainInfo from '../../components/innerpage/single_project2/MainInfo';
import Challenge from '../../components/innerpage/single_project2/Challenge';
import Testimonials from '../../components/innerpage/single_project2/Testimonials';
import MainVideo from '../../components/innerpage/single_project2/MainVideo';
import Contact from '../../components/innerpage/single_project2/Contact';
import Footer from '../../components/innerpage/Footer';
import { Helmet } from 'react-helmet';

function SingleProject2() {
  return (
    <PageLayout
      pageTitle="Groupe Strapex Maroc"
      className="inner-pages-style1 s-project-pg-style2"
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
        <MainInfo />
        <Challenge />
        <Testimonials />
        <MainVideo />
        <Contact />
      </main>
      <Footer />
    </PageLayout>
  );
}

export default SingleProject2;
