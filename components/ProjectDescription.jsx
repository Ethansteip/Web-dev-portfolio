import React from 'react';
import { useState } from 'react';

const ProjectDescription = (props) => {
  const [descriptionActive, setdescriptionActive] = useState('Overview');
  const [content, setContent] = useState(props.description);

  console.log("Description: ", props.video);

  const activeSkillTab = "cursor-pointer mb-2 uppercase text-sm text-center tracking-widest mb-3 mt-3 skills-border";
  const inactiveSkillTab = "cursor-pointer mb-2 uppercase text-sm text-center tracking-widest mb-3 mt-3 skills-border-inactive";

  const activateDescription = (string) => {
    setdescriptionActive(string);
    if (string ===  'Overview') {
      setContent(props.description);
    } else if (string === 'Challenges') {
      setContent(props.challenges)
    } else {
      setContent(props.video);
    }
  }

  return(
    <section className="flex flex-col justify-center items-center w-full px-5 mb-10">
      <h2>{props.name}</h2>

        {/* Skills card sections */}
        <section className="w-full flex gap-x-5 justify-center">
          <p 
            className={ descriptionActive === 'Overview' ? activeSkillTab : inactiveSkillTab }
            onClick={() => activateDescription('Overview')}>
            Overview
          </p>
          <p 
            className={ descriptionActive === 'Challenges' ? activeSkillTab : inactiveSkillTab }
            onClick={() => activateDescription('Challenges')}>
            Challenges
          </p>
          <p 
            className={ descriptionActive === 'video' ? activeSkillTab : inactiveSkillTab }
            onClick={() => activateDescription('video')}>
            Video
          </p>
        </section>
        <section className="w-full px-5 text-center">
          <p>{content}</p>
        </section>
    </section>
  );

}

export default ProjectDescription;