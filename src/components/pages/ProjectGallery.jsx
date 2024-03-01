import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/ProjectGallery.css';

const ProjectGallery = () => {
  const projects = [
    {
      id: 1,
      title: 'Bootstrap-Portfolio',
      description: 'Description for Project 1. This is a sample project.',
      image: '../../src/assets/images/Bootstrap-Portfolio.png',
    },
    {
      id: 2,
      title: 'Password-Generator',
      description: 'Description for Project 2. Another example project.',
      image: '../../src/assets/images/PasswordGenerator.png',
    },
    {
      id: 3,
      title: 'Code-Quiz',
      description: 'Description for Project 3. Another example project.',
      image: '../../src/assets/images/CodeQuiz.png',
    },
    {
      id: 4,
      title: 'Work-Day-Scheduler',
      description: 'Description for Project 4. Another example project.',
      image: '../../src/assets/images/WorkDayScheduler.png',
    },
    {
      id: 5,
      title: 'Weather-Dashboard',
      description: 'Description for Project 5. Another example project.',
      image: '../../src/assets/images/Weather-Dashboard.png',
    },
    {
      id: 6,
      title: 'Movie-Game',
      description: 'Description for Project 6. Another example project.',
      image: '../../src/assets/images/Movie-Game.png',
    },
    {
      id: 7,
      title: 'Team-Profile-Generator',
      description: 'Description for Project 7. Another example project.',
      image: '../../src/assets/images/Team-Profile-Generator.png',
    },
    // Add more projects as needed
  ].reverse();

  return (
    <div className="container project-gallery">
    <h2 className="text-center">Project Gallery</h2>

    <div className="row">
      {projects.map(project => (
        <div key={project.id} className="col-12 col-md-6 col-lg-4 mb-4">
          <Link to={`projectDetails/${project.id}`} className="project-link">
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image img-fluid" />
              <div className="project-details">
                <h3 className="project-title text-center">{project.title}</h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProjectGallery;

