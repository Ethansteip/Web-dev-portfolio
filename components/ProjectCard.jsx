import React from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const ProjectCard = (props) => {

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border">
      {/* <figure className="w-2/3"><img className="" src={props.cover_image} alt="Album"/></figure> */}
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p className="">{props.description}</p>
        <div className="card-actions justify-end gap-x-4 mt-2">
            <Link href={props.github_link}>
              <FaGithub size={35}/>
            </Link>
            <Link href={"/projects/" + props.id}>
              <FaArrowRight size={35}/>
            </Link>
        </div>
      </div>
    </div>
  );

}

export default ProjectCard;