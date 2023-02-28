import React from 'react';
import { useRouter } from 'next/router';
import { projects } from '/Data/projects_data.js'

const ProjectDetail = () => {

  const router = useRouter();
  const projectId = Number(router.query.projectId);

  const myProject = projects.find(x => x.id === projectId);

  return (
    <h1>Project Details</h1>
  );

}

export default ProjectDetail