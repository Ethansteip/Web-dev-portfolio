import React from 'react';
//useSWR allows the use of SWR inside function components
import useSWR from 'swr';
import PhotoCarousel from 'components/PhotoCarousel';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { projects } from '/Data/projects_data.js'


//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

const ProjectDetail = () => {

    //Set up SWR to run the fetcher function when calling "/api/staticdata"
    //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data)
    const { data, error } = useSWR('/api/staticdata', fetcher);
    const [projectId, setProjectId] = useState();

    const router = useRouter();;

    useEffect(() => {
      if (!router.query.projectId) {
        return;
      }
      setProjectId(Number(router.query.projectId));
    }, [router.isReady]);

     //Handle the error state
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div>Loading...</div>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const projectData =  JSON.parse(data);
    //console.log(projectId);

    const images = projectData.projects[0].project_photos;
    //console.log(images);

  return (
    <section className="w-full h-auto">
      <PhotoCarousel images={images} />
    </section>
  );

}

export default ProjectDetail;