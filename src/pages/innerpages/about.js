import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Menu from '../../components/home1/Menu';
import Header from '../../components/innerpage/about/Header';
import About from '../../components/innerpage/about/About';
import Process from '../../components/innerpage/about/Process';
import Awards from '../../components/innerpage/about/Awards';
import Footer from '../../components/innerpage/Footer';

function AboutPage() {
  return (
    <PageLayout
      pageTitle="Groupe Strapex Maroc"
      className="inner-pages-style1 about-pg-style1"
      darkNavbar
    >
      <Menu />
      <Header />
      <main>
        <About />
        <Process />
        <Awards />
      </main>
      <Footer />
    </PageLayout>
  );
}

export default AboutPage;
