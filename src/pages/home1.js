import React, { useEffect, useRef } from 'react';
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
  const firstRender = useRef(true);
  const isMobile = useRef(window.innerWidth < 768);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Check if mobile device
    const checkMobile = () => window.innerWidth < 768;
    isMobile.current = checkMobile();
    
    // Handle mobile animations
    const handleMobileAnimations = () => {
      if (isMobile.current) {
        // Simple fix: Force all animations to be visible on mobile
        document.querySelectorAll('[data-scroll]').forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.visibility = 'visible';
        });
        
        // Make animated elements visible
        document.querySelectorAll('.animated').forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.visibility = 'visible';
        });
      }
    };
    
    // Skip the first render as PageLayout already handles initial animations
    if (!firstRender.current) {
      // Force a refresh of ScrollTrigger animations
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
      
      // Reinitialize ScrollSmoother if it exists
      if (window.ScrollSmoother) {
        // Kill existing instance if any
        if (window.ScrollSmoother.get()) {
          window.ScrollSmoother.get().kill();
        }
        
        // Create new instance with slight delay to ensure DOM is ready
        setTimeout(() => {
          window.ScrollSmoother.create({
            wrapper: '#scrollsmoother-container',
            content: '.smooth-scroll-content',
            smooth: isMobile.current ? 0.5 : 1.5, // Less smooth on mobile
            effects: true
          });
          
          // Refresh ScrollTrigger again after ScrollSmoother is created
          if (window.ScrollTrigger) {
            window.ScrollTrigger.refresh();
          }
          
          // Handle mobile animations
          handleMobileAnimations();
          
          // Init any page-specific animations that might be needed
          if (window.initHomeAnimations && typeof window.initHomeAnimations === 'function') {
            window.initHomeAnimations();
          }
        }, 50);
      }
    } else {
      firstRender.current = false;
      
      // Add resize event listener to handle orientation changes
      window.addEventListener('resize', () => {
        const wasMobile = isMobile.current;
        isMobile.current = checkMobile();
        
        // If mobile status changed, handle animations
        if (wasMobile !== isMobile.current) {
          handleMobileAnimations();
        }
      });
      
      // Still handle mobile animations on first load
      setTimeout(handleMobileAnimations, 500);
    }
    
    return () => {
      // Clean up animations when navigating away
      if (window.ScrollSmoother && window.ScrollSmoother.get()) {
        // Don't kill it when unmounting as it's used by the overall layout
        // Just mark that we need to refresh it when coming back
        firstRender.current = false;
      }
      
      // Remove resize event listener
      window.removeEventListener('resize', () => {});
    };
  }, []);

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
