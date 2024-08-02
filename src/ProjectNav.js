import React from 'react';
import { Link } from 'react-router-dom';
import projectData from './professionalProject.json';
import "./ProjectNav.css";

export default function ProjectNav(props) {
  const prevIndex = (props.index - 1 + projectData.length) % projectData.length;
  const nextIndex = (props.index + 1) % projectData.length; 

  return (
    <div className="projectNav">
      <Link className='projectNavLinkLeft' to={"/projects" + projectData[prevIndex].link}>
        <div>{projectData[prevIndex].title}</div>
      </Link>
      
      <Link className='projectNavLinkRight' to={"/projects" + projectData[nextIndex].link}>
        <div>{projectData[nextIndex].title}</div>
      </Link>
    </div>
  );
}