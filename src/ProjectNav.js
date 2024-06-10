import React from 'react';
import { Link } from 'react-router-dom';
import projectData from './professionalProject.json';
import "./ProjectNav.css";

export default function ProjectNav(props) {
  const prevIndex = (props.index - 1 + projectData.length) % projectData.length;
  const nextIndex = (props.index + 1) % projectData.length; 

  return (
    <div className="projectNav">
      <Link className='projectNavLink' to={"/projects" + projectData[prevIndex].link}>
        <img src={`${process.env.PUBLIC_URL}/assets/chevron-left.svg`} alt="left arrow" />
        <h1>{projectData[prevIndex].title}</h1>
      </Link>
      
      <Link className='projectNavLink' to={"/projects" + projectData[nextIndex].link}>
        <h1>{projectData[nextIndex].title}</h1>
        <img src={`${process.env.PUBLIC_URL}/assets/chevron-right.svg`} alt="right arrow" />
      </Link>
    </div>
  );
}