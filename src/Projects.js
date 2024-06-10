import React, { forwardRef } from 'react';
import ProjectCard from './ProjectCard';
import projectData from './professionalProject.json';
import './projectCard.css';

const Projects = forwardRef((props, ref) => ( 
  <div ref={ref} className='projectDisplay' id='projects'>
    {projectData.map((project, index) => (
      <ProjectCard 
        key={index} 
        title={project.title} 
        imageSrc={project.imageSrc} 
        description={project.description} 
        tags={project.tags} 
        link={project.link} 
        alt={project.alt}
      />
    ))}        
  </div>
));

export default Projects;