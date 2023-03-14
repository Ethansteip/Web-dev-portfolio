import React from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import TechBadge from './TechBadge';

const ProjectCard = (props) => {

  const badgeArray = props.technologies.map((tech) => {
    return <TechBadge
            key={tech}
            tech={tech}
            />
  })

  return (
    <div className="carousel-item">
    <Link href={"/projects/" + props.id}>
      <div className="card w-full md:w-full max-w-[600px] h-[400px] md:h-[500px] bg-base-100 border shadow hover:shadow-lg hover:shadow-indigo-500/50 cursor-pointer transition duration-200">
        <figure className=""><img className="object-fit" src={props.project_photos[0]} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {props.name}
          </h2>
          <p className="text-sm md:text-md">{props.description}</p>
          <div className="card-actions justify-end mt-2">
            {badgeArray}
          </div>
        </div>
      </div>
    </Link>
    </div>
  );

}

export default ProjectCard;