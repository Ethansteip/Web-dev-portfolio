import React from 'react';
import { useEffect, useState } from 'react';
import SkillsCard from './SkillsCard';
import { frameworks, languages, databases } from '../Data/skills_data.js';

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

  const databaseArray = databases.map((database) => {
    return <SkillsCard
              key={database.id}  
              name={database.name}
              icon={database.icon}
            />
    });

  return(
    <section className="flex flex-col justify-center items-center w-full h-1/2 px-5">
      <h2>Skills</h2>
      <p className="uppercase text-sm text-center tracking-widest text-gray-600 mb-3 mt-3">These are the technologies I enjoy working with.</p>
      <p className="uppercase text-sm tracking-widest text-gray-600 mb-3 mt-3 border-b-2 border-primary">Languages</p>
      <div className='grid grid-cols-5 md:flex fex-wrap md:w-auto md:justify-center gap-x-5 mb-5'>
        {languagesArray}
      </div>
      <p className="uppercase text-sm tracking-widest text-gray-600 mb-3 mt-3 border-b-2 border-primary">Frameworks & Libraries</p>
      <div className='grid grid-cols-5 md:flex fex-wrap md:w-auto md:justify-center gap-x-5 mb-5'>
        {frameworkArray}
      </div>
      <p className="uppercase text-sm tracking-widest text-gray-600 mb-3 mt-3 border-b-2 border-primary">Database Management</p>
      <div className='grid grid-cols-5 md:flex fex-wrap md:w-auto md:justify-center gap-x-5 mb-5'>
        {databaseArray}
      </div>
    </section>
  );

}

export default Skills;