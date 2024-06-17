import React from 'react';
import Projects from './Projects';

export default function ProjectHolder() {
  return (
    <section className="bg-gray-100 py-8 flex flex-col items-center justify-center">
      <div className="max-w-screen-xl lg:pt-16 lg:px-6">
        <div className="max-w-screen-lg text-center text-gray-800 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">
            Our Projects
          </h2>
          <p className='mb-4'>
            Explore some of the projects we've successfully completed. From renovations to new constructions, we take pride in delivering exceptional results that exceed our clients' expectations.
          </p>
        </div>
      </div>
      <Projects />
    </section>
  );
}