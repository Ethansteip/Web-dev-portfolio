import React from 'react';
import { useState, useEffect } from 'react';
import { projects } from '../Data/projects_data.js'
import ProjectCard from './ProjectCard';

const Projects = () => {

  const projectsArray = projects.map((project) => {
    return <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            github_link={project.github_link}
            cover_image={project.cover_image}
            />
  })
  
  return (
    <section className="flex flex-col justify-center items-center w-full px-5">
      <h2>Projects</h2>
      <p className="uppercase text-sm text-center tracking-widest mb-3 mt-3">Here is some of my recent web deveopment work!</p>

      {/* Project Cards */}
      <section className="w-5/6 md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {projectsArray}
      </section>
    </section>
  );

}

export default Projects;