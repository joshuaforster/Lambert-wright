import React, { useRef } from 'react';

export default function ServicesHead() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-customGray py-16 lg:py-24">
      <div ref={sectionRef} className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full h-80 object-cover"
            src='images/project1/Side-Elevation-1024x683.jpg'
            alt="office content 1"
          />
          <img
            className="w-full h-80 object-cover"
            src='images/project1/Rear-Elevation-1024x704.jpg'
            alt="office content 2"
          />
        </div>
        <div className="font-light mt-4 lg:mt-0 text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 font-semibold text-4xl text-gray-900 dark:text-white">
            What we can do for you
          </h2>
          <p className="mb-4 text-base text-fontColour">
            We are strategists, designers, and developers. Innovators and problem solvers. Small enough to be simple and
            quick, but big enough to deliver the scope you want at the pace you need. 
          </p>
        </div>
      </div>
    </section>
  );
}
