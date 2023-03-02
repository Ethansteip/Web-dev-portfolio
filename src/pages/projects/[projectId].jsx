import React from 'react';
import PhotoCarousel from 'components/PhotoCarousel';
import ProjectDescription from 'components/ProjectDescription';
import { useState } from 'react';
import path from 'path';
import { promises as fs } from 'fs';
import { useRouter } from 'next/router';

async function getData() {
  const filePath = path.join(process.cwd(), 'json', 'data.json');
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData.toString());
  return data;
}

export const getStaticProps = async (context) => {
  const itemID = context.params?.projectId;
  const data = await getData();
  const foundItem = data.projects.find((project) => itemID == project.id);

    if (!foundItem) {
      return {
        props: { hasError: true },
      }
  }
  return {
    props: {
      projectData: foundItem
    }
  }
}

export const getStaticPaths = async () => {
  const data = await getData();
  const pathsWithParams = data.projects.map((project) => ({ params: { projectId: project.id.toString() }}))

  return {
      paths: pathsWithParams,
      fallback: true
  }
}




const ProjectDetail = (props) => {

    const router = useRouter();

    if (props.hasError) {
      return <h1>Error - please try another parameter</h1>
    }
  
    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    // const images = projectData.projects[0].project_photos;
    // const name = projectData.projects[0].name;
    // const description = projectData.projects[0].description;
    // const challenges = projectData.projects[0].challenges;
    // const video = projectData.projects[0].video;
    // const technologies = projectData.projects[0].technologies;
    // const githubLink = projectData.projects[0].github_link;


  return (
    <section className="w-full h-screen">
      <div className="flex flex-col w-full h-auto">
        <div>
          <PhotoCarousel images={props.projectData.project_photos} />
        </div>
        <div className="w-full">
          <ProjectDescription
            name={props.projectData.name}
            description={props.projectData.description}
            challenges={props.projectData.challenges}
            video={props.projectData.video}
            technologies={props.projectData.technologies}
            githubLink={props.projectData.github_link}
            />
        </div>
      </div>
    </section>
  );

}

export default ProjectDetail;