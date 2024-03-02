import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import project from './data/project.json'

import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import ProjectGallery from './pages/ProjectGalleryPage/ProjectGallery';
import ProjectDetails from './pages/ProjectDetailsPage/ProjectDetails';
import Contact from './pages/ContactPage/Contact';

import Nav from './components/NavComp/Nav';
import Header from './components/HeaderComp/Header';
import Footer from './components/FooterComp/Footer';
import Wrapper from './components/WrapperComp/Wrapper';


function App() {
  return (
    <Router>
    <div>
      <Header />
      <Nav />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/gallery" element={<ProjectGallery/>} />
          <Route path="/projectDetails" element={<ProjectDetails/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Wrapper>
      <Footer />
    </div>
  </Router>
);
}

export default App;
