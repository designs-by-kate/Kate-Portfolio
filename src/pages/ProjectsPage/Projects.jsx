// pages/Project.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';
import project from '../../data/project.json';

function Project() {

  const [projectData, setProjectData] = useState(project);

  return (
    <div className="container project-gallery">
      <h2 className="text-center">Project Details</h2>

      <div className="row">
        {projectData.map(project => (
          <div key={project.id} className="col-12 mb-4">
            <h3 className="project-title text-center">{project.title}</h3>
            <div className="row">
              <div className="col-md-2">
                <img src={project.image} alt={project.title} className="project-image img-fluid" />
              </div>
              <div className="project-details col-md-10">
                <p><strong>Description:</strong> {project.description}</p>
                <p><strong>Project Type:</strong> {project.projectType}</p>
                <p><strong>Role:</strong> {project.role}</p>
                <p><strong>Dependencies:</strong> {project.dependencies}</p>
                <p><strong>Tools Used:</strong> {project.tools}</p>
                <p><strong>Deployed URL:</strong> <a href={project.deployedURL} target="_blank" rel="noopener noreferrer">{project.deployedURL}</a></p>
                <p><strong>GitHub URL:</strong> <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer">{project.gitHubUrl}</a></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
