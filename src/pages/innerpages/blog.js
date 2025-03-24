import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Header from '../../components/innerpage/blog/Header';
import Slider from '../../components/innerpage/blog/Slider';
import LatestPosts from '../../components/innerpage/blog/LatestPosts';
import FilterPosts from '../../components/innerpage/blog/FilterPosts';
import Footer from '../../components/innerpage/Footer';
import { Helmet } from 'react-helmet';

function BlogPage() {
  return (
    <PageLayout
      pageTitle="Groupe Strapex Maroc"
      className="inner-pages-style1 blog-pg-style1"
    >
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="/innerpages/assets/css/innerpages.css"
        />
        <script src="/common/assets/js/common_js.js"></script>
        <script src="/innerpages/assets/js/innerpages.js"></script>
        <script src="/common/assets/js/lib/mixitup.min.js"></script>
      </Helmet>
      <Header />
      <main>
        <Slider />
        <LatestPosts />
        <FilterPosts />
      </main>
      <Footer />
    </PageLayout>
  );
}

export default BlogPage;
