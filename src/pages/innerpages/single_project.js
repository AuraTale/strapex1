import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Project from '../../components/innerpage/single_project/Project';
import Testimonials from '../../components/innerpage/single_project/Testimonials';
import RelatedProjects from '../../components/innerpage/single_project/RelatedProjects';
import Chat from '../../components/innerpage/single_project/Chat';
import Footer from '../../components/innerpage/Footer';
import { Helmet } from 'react-helmet';

function SingleProject() {
  return (
    <PageLayout
      pageTitle="Groupe Strapex Maroc"
      className="inner-pages-style1 s-project-pg-style1"
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
      <main>
        <Project />
        <Testimonials />
        <RelatedProjects />
        <Chat />
      </main>
      <Footer />
    </PageLayout>
  );
}

export default SingleProject;
