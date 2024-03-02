import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../../data/project.json';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details-container">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {/* Add more project details as needed */}
    </div>
  );
};

export default ProjectDetails;
