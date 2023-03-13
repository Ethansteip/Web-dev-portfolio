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
            project_photos={project.project_photos}
            />
  })
  
  return (
    <section className="flex flex-col justify-center items-center w-full px-5">
      <h2>Projects</h2>
      <p className="uppercase text-sm text-center tracking-widest mb-3 mt-3">Here is some of my recent web deveopment work!</p>

      {/* Project Cards */}
      <section className="w-5/6 lg:4/5 grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 justify-items-center">
        {projectsArray}
      </section>
    </section>
  );

}

export default Projects;