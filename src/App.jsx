import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import global styles
import Nav from './components/NavComp/Nav';
import Header from './components/HeaderComp/Header';
import Footer from './components/FooterComp/Footer';
import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import ProjectGallery from './pages/ProjectGalleryPage/ProjectGallery';
import Project from './pages/ProjectsPage/Projects';
import Contact from './pages/ContactPage/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} index />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<ProjectGallery />} />
        <Route path="project" element={<Project />} />
        {/* Define a route that will have descendant routes */}
        <Route path="contact/*" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
