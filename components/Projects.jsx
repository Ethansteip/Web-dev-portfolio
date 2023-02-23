import React from 'react';
import { useState, useEffect } from 'react';

const Projects = () => {
  
  return (
    <section className="flex flex-col justify-center items-center w-full px-5 mb-10">
      <h2>Projects</h2>
      <p className="uppercase text-sm text-center tracking-widest mb-3 mt-3">Here is some of my recent web deveopment work!</p>

      {/* Project Cards */}
      <section className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 bg-gray-100">
        <div class="w-1/3 h-32 bg-green-100">
        </div>
        <div class="w-1/3 h-32 bg-green-100">
        </div>
        <div class="w-1/3 h-32 bg-green-100">
        </div>
      </section>
    </section>
  );

}

export default Projects;