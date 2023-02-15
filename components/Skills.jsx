import React from 'react';
import { useEffect, useState } from 'react';
import SkillsCard from './SkillsCard';
import { frameworks, languages } from '../Data/skills_data.js';

const Skills = () => {

  const languagesArray = languages.map((language) => {
    return <SkillsCard
              key={language.id}  
              name={language.name}
              icon={language.icon}
            />
    });

  const frameworkArray = frameworks.map((framework) => {
    return <SkillsCard
              key={framework.id}  
              name={framework.name}
              icon={framework.icon}
            />
    });

  return(
    <section className="w-full h-1/2 text-left px-5">
      <h2>Skills</h2>
      <p className="uppercase text-sm tracking-widest text-gray-600 mb-3 mt-3">These are the technologies I enjoy working with.</p>
      <p className="uppercase text-sm tracking-widest text-gray-600 mb-3 mt-3">Languages, Markup and Styling</p>
      <div className='flex w-full justify-start gap-x-5'>
        {languagesArray}
      </div>
      <p className="uppercase text-sm tracking-widest text-gray-600 mb-3 mt-3">Frameworks & Libraries</p>
      <div className='flex w-full justify-start gap-x-5'>
        {frameworkArray}
      </div>
    </section>
  );

}

export default Skills;