import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NavbarDark from './components/common/NavbarDark';
import Home1 from './pages/home1';
import AboutPage from './pages/innerpages/about';
import Contact from './pages/innerpages/contact';
import Portfolio from './pages/innerpages/portfolio';
import SinglePost from './pages/innerpages/single_post';
import SingleProject from './pages/innerpages/single_project';
import SingleProject2 from './pages/innerpages/single_project2';

// This component controls which pages show the global navbar
function NavbarController() {
  const location = useLocation();
  
  // These routes have their own Menu component, so they don't need NavbarDark
  const pagesWithMenu = ['/', '/about', '/gallery', '/contact'];
  
  // Only show NavbarDark if the current path is not in the pagesWithMenu list
  const shouldShowNavbar = !pagesWithMenu.includes(location.pathname);
  
  return shouldShowNavbar ? <NavbarDark /> : null;
}

function AppContent() {
  return (
    <>
      <NavbarController />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/single-post" element={<SinglePost />} />
        <Route path="/single-project" element={<SingleProject />} />
        <Route path="/single-project2" element={<SingleProject2 />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
