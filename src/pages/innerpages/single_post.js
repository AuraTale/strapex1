import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Slider from '../../components/innerpage/single_post/Slider';
import Content from '../../components/innerpage/single_post/Content';
import Comments from '../../components/innerpage/single_post/Comments';
import Footer from '../../components/innerpage/Footer';
import { Helmet } from 'react-helmet';

function SinglePost() {
  return (
    <PageLayout
      pageTitle="Groupe Strapex Maroc"
      className="inner-pages-style1 post-pg-style1"
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
        <Slider />
        <Content />
        <Comments />
      </main>
      <Footer />
    </PageLayout>
  );
}

export default SinglePost;
