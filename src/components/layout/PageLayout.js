import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Loader from '../common/Loader';
import Menu from '../innerpage/Menu';
import Footer from '../innerpage/Footer';

function PageLayout({ 
  children, 
  pageTitle, 
  className, 
  darkNavbar,
  customCss,
  customScript 
}) {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Start the fade out animation after 1.5 seconds
    const fadeTimer = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.fadeOut();
      }
    }, 1500);
    
    // Actually remove the loader from DOM after animation (additional 500ms)
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
      // Initialize smooth scroll after content is visible
      if (window.ScrollSmoother && contentRef.current) {
        window.ScrollSmoother.create({
          wrapper: '#scrollsmoother-container',
          content: '.smooth-scroll-content',
          smooth: 1.5,
          effects: true
        });
      }
    }, 2000);
    
    // Safety timeout
    const safetyTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      clearTimeout(safetyTimer);
    };
  }, [pageTitle]);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        {/* Base styles */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/common/assets/css/common.css"
        />
        {/* Footer styles */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/common/assets/css/footer.css"
        />
        {/* Custom page style */}
        {customCss && (
          <link
            rel="stylesheet"
            type="text/css"
            href={customCss}
          />
        )}
        {/* Inner pages style */}
        {!customCss && (
          <link
            rel="stylesheet"
            type="text/css"
            href="/innerpages/assets/css/innerpages.css"
          />
        )}
        {/* Dark navbar style */}
        {darkNavbar && (
          <link
            rel="stylesheet"
            type="text/css"
            href="/innerpages/assets/css/dark-navbar.css"
          />
        )}
        {/* Scripts */}
        <script src="/common/assets/js/common_js.js"></script>
        {customScript && <script src={customScript}></script>}
        {!customScript && <script src="/innerpages/assets/js/innerpages.js"></script>}
      </Helmet>
      <body className={className}>
        {isLoading && <Loader ref={loaderRef} />}
        <div id="scrollsmoother-container">
          <div 
            ref={contentRef}
            className={`smooth-scroll-content ${isLoading ? 'content-hidden' : ''}`}
          >
            {children}
          </div>
        </div>
      </body>
    </>
  );
}

export default PageLayout; 