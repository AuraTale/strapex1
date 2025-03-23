import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home1 from './pages/home1';
// Remove home2 import since the file is deleted
// import Home2 from './pages/home2';
// Remove imports for deleted pages
// import Home3 from './pages/home3_construction';
// import Home4 from './pages/home4_personal_architect';
// import Home5 from './pages/home5_residence';
// import Home6 from './pages/home6_furniture';
// import Home7 from './pages/home7_landscape';
// import Home7360 from './pages/home7_landscape_360';
// import Home8 from './pages/home8_portfolio';
// import Home10 from './pages/home10';
import AboutPage from './pages/innerpages/about';
import Blog from './pages/innerpages/blog';
import Contact from './pages/innerpages/contact';
import Portfolio from './pages/innerpages/portfolio';
import Services from './pages/innerpages/services';
import SinglePost from './pages/innerpages/single_post';
import SingleProject from './pages/innerpages/single_project';
import SingleProject2 from './pages/innerpages/single_project2';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1 />} />
          {/* Remove home2 route since the page is deleted */}
          {/* <Route path="/home2" element={<Home2 />} /> */}
          {/* Remove routes for deleted pages */}
          {/* <Route path="/home3_construction" element={<Home3 />} />
          <Route path="/home4_personal_architect" element={<Home4 />} />
          <Route path="/home5_residence" element={<Home5 />} />
          <Route path="/home6_furniture" element={<Home6 />} />
          <Route path="/home7_landscape" element={<Home7 />} />
          <Route path="/home7_landscape_360" element={<Home7360 />} />
          <Route path="/home8_portfolio" element={<Home8 />} />
          <Route path="/home10" element={<Home10 />} /> */}
          <Route path="/innerpages/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/single-post" element={<SinglePost />} />
          <Route path="/single-project" element={<SingleProject />} />
          <Route path="/single-project2" element={<SingleProject2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
