import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Menu from '../../components/home1/Menu';
import Header from '../../components/innerpage/portfolio/Header';
import LatestCases from '../../components/innerpage/portfolio/LatestCases';
import Footer from '../../components/innerpage/Footer';

function Portfolio() {
  return (
    <PageLayout
      pageTitle="Groupe Strapex Maroc"
      className="inner-pages-style1 portfolio-pg-style1"
      darkNavbar
    >
      <Menu />
      <Header />
      <main>
        <LatestCases />
      </main>
      <Footer />
    </PageLayout>
  );
}

export default Portfolio;
