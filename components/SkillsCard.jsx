import React from 'react';

const SkillsCard = (props) => {

  return (
    <div className="w-auto h-auto py-3 rounded-xl shadow-xl flex items-center justify-between px-3 gap-x-2">
      <img className="object-contain w-10" src={props.img_src} alt="React Logo" />
      <p className="uppercase text-sm tracking-wide text-gray-600" >{props.name}</p>
    </div>
  );

}

export default SkillsCard;