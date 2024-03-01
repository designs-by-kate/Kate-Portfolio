import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/ProjectGallery.css';
import project from '../../data/project.json';

function ProjectGallery() {

  const [projectData, setProjectData] = useState(project);
  
  return (
    <div className="container project-gallery">
    <h2 className="text-center">Project Gallery</h2>

    <div className="row">
      {projectData.map(project => (
        <div key={project.id} className="col-12 col-md-6 col-lg-4 mb-4">
          <Link to={`/project/${project.id}`} className="project-link">
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

