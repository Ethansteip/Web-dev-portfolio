import React from 'react';
import { useState } from 'react';

const ProjectDescription = (props) => {
  const [descriptionActive, setdescriptionActive] = useState('Overview');
  const [content, setContent] = useState(props.project_description_html);

  const activeSkillTab = "cursor-pointer mb-2 pb-1 uppercase text-sm text-center tracking-widest mb-3 mt-3 skills-border";
  const inactiveSkillTab = "cursor-pointer mb-2 uppercase text-sm text-center tracking-widest mb-3 mt-3 skills-border-inactive";

  const activateDescription = (string) => {
    setdescriptionActive(string);
    if (string ===  'Overview') {
      setContent(props.project_description_html);
    } else if (string === 'Challenges') {
      setContent(props.project_challenges_html)
    } else {
      setContent(props.project_tech_html);
    }
  }

  return(
    <section className="flex flex-col justify-center items-center w-full px-5 mb-10">
      <h2 className="hidden md:flex text-center">{props.name}</h2>

        {/* Skills card sections */}
        <section className="w-full flex gap-x-5 justify-center">
          <p 
            className={ descriptionActive === 'Overview' ? activeSkillTab : inactiveSkillTab }
            onClick={() => activateDescription('Overview')}>
            Overview
          </p>
          <p 
            className={ descriptionActive === 'tech' ? activeSkillTab : inactiveSkillTab }
            onClick={() => activateDescription('tech')}>
            Tech
          </p>
          <p 
            className={ descriptionActive === 'Challenges' ? activeSkillTab : inactiveSkillTab }
            onClick={() => activateDescription('Challenges')}>
            Challenges
          </p>
        </section>
        <section className="w-full px-5 text-left">
          {/* <p>{content}</p> */}
          <div className="w-full text-sm md:text-md px-3" dangerouslySetInnerHTML={{ __html: content }}></div>
        </section>
    </section>
  );

}

export default ProjectDescription;