import React from 'react';
import { useEffect, useState } from 'react';
import SkillsCard from './SkillsCard';
import { frameworks, languages, databases } from '../Data/skills_data.js';

const Skills = () => {
  const [skillActive, setSkillActive] = useState('languages');

  const languagesArray = languages.map((language) => {
    return <SkillsCard
              key={language.id}  
              name={language.name}
              icon={language.icon}
            />
    });
  
  const [skillsArray, setSkillsArray] = useState(languagesArray);

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

  const activeSkillTab = "cursor-pointer mb-2 uppercase text-sm text-center tracking-widest text-gray-600 mb-3 mt-3 border-b-2 border-primary";
  const inactiveSkillTab = "cursor-pointer mb-2 uppercase text-sm text-center tracking-widest text-gray-600 mb-3 mt-3 hover:border-b-2 border-primary transition duration-300 ease-in-out";

  const activateSkill = (string) => {
    setSkillActive(string);
    if (string === 'languages') {
      setSkillsArray(languagesArray);
    } else if (string === 'Frameworks & Libraries') {
      setSkillsArray(frameworkArray);
    } else {
      setSkillsArray(databaseArray);
    }
  }

  return(
    <section className="flex flex-col justify-center items-center w-full px-5 mb-10">
      <h2>Skills</h2>
        <p className="uppercase text-sm text-center tracking-widest text-gray-600 mb-3 mt-3">These are the technologies I enjoy working with.</p>

        {/* Skills card sections */}
        <section className="w-full flex gap-x-5 justify-center">
          <p 
            className={ skillActive === 'languages' ? activeSkillTab : inactiveSkillTab }
            onClick={() => activateSkill('languages')}>
            Languages
          </p>
          <p 
            className={ skillActive === 'Frameworks & Libraries' ? activeSkillTab : inactiveSkillTab }
            onClick={() => activateSkill('Frameworks & Libraries')}>
            Frameworks & Libraries
          </p>
          <p 
            className={ skillActive === 'Databases' ? activeSkillTab : inactiveSkillTab }
            onClick={() => activateSkill('Databases')}>
            Databases
          </p>
        </section>
        <section className="grid grid-cols-3 gap-2 mt-2">
          {skillsArray}
        </section>
    </section>
  );

}

export default Skills;