import React from 'react';
import PhotoCarousel from 'components/PhotoCarousel';
import ProjectDescription from 'components/ProjectDescription';
import path from 'path';
import { promises as fs } from 'fs';
import { useRouter } from 'next/router';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

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

  return (
    <section className="w-screen flex justify-center h-auto md:h-screen mb-10">
      <div className="flex flex-col max-w-[1240px] md:flex-row w-full h-auto md:mt-8">
        <div className="flex flex-col md:hidden text-center mt-3 gap-y-2 px-5">
          <h1 className="text-2xl">{props.projectData.name}</h1>
          <p className="text-xs">{props.projectData.description}</p>
        </div>
        <div className=''>
          <PhotoCarousel images={props.projectData.project_photos} />
        </div>
        <div className="w-full mt-5 md:mt-0">
          <ProjectDescription
            name={props.projectData.name}
            description={props.projectData.description}
            technologies={props.projectData.technologies}
            github_link={props.projectData.github_link}
            project_description_html={props.projectData.project_description_html}
            project_tech_html={props.projectData.project_tech_html}
            project_challenges_html={props.projectData.project_challenges_html}
            />
        </div>
      </div>
      <div>
      </div>
    </section>
  );

}

export default ProjectDetail;