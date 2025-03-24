import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Menu from '../components/home1/Menu';
import Header from '../components/home1/Header';
import Experience from '../components/home1/Experience';
import Services from '../components/home1/Services';
import Process from '../components/home1/Process';
import Awards from '../components/home1/Awards';
import Projects from '../components/home1/Projects';
import Testimonials from '../components/home1/Testimonials';
import Blog from '../components/home1/Blog';
import Chat from '../components/home1/Chat';
import Footer from '../components/innerpage/Footer';

function Home1() {
  return (
    <PageLayout
      pageTitle="Groupe Strapex Maroc"
      className="home-style1"
      customCss="/home1/assets/css/home_1_style.css"
      customScript="/home1/assets/js/home_1_scripts.js"
      darkNavbar
    >
      <Menu />
      <Header />
      <main>
        <Experience />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <Awards />
        <span id="#"></span>
        <Blog />
        <Chat />
      </main>
      <Footer />
    </PageLayout>
  );
}

export default Home1;
