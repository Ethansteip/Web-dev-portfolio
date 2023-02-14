import React from 'react';
import { useEffect, useState } from 'react';
import SkillsCard from './SkillsCard';
import frameworks from '../Data/skills_data.js';

const Skills = () => {

  const frameworkArray = frameworks.map((framework) => {
    return <SkillsCard
              key={framework.name}  
              name={framework.name}
              img_src={framework.img_src}
            />
    });

  

    console.log("frameworks: ", frameworks);
    console.log("frameworks array: ", frameworkArray);

  return(
    <section className="w-full h-1/2 text-left px-5">
      <h2>Skills</h2>
      <p className="uppercase text-sm tracking-widest text-gray-600 mb-3 mt-3">These are the technologies I enjoy working with.</p>
      <div className='flex w-full justify-between'>
        {frameworkArray}
      </div>
    </section>
  );

}

export default Skills;