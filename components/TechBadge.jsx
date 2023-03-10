import React from 'react';

const TechBadge = (props) => {

  return (
    <div className="badge badge-ghost text-xs md:text-md">{props.tech}</div>
  );

}

export default TechBadge;