import React from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import TechBadge from './TechBadge';

const ProjectCard = (props) => {

  const techBadgeArray = props.technologies.map((tech) => {
    return <TechBadge
              tech={tech}
          />
  })

  return (
    <Link href={"/projects/" + props.id }>
      <div className="rounded-lg cursor-pointer lg:card-side bg-base-100 shadow border hover:shadow-lg hover:shadow-indigo-500/50 transition duration-200">
        {/* <figure className="w-2/3"><img className="" src={props.cover_image} alt="Album"/></figure> */}
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p className="">{props.description}</p>
          <div className="card-actions justify-end gap-x-4 mt-2">
              <a target="_blank" href={props.github_link}>
                <FaGithub size={35}/>
              </a>
          </div>
        </div>
      </div>
      </Link>
  );

}

export default ProjectCard;