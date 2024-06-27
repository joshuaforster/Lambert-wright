import React, { useEffect, useState, useRef } from 'react';

export default function ServicesHead() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-customGray py-16 lg:py-24">
      <div
        ref={sectionRef}
        className={`gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full"
            src="/images/services/image 12.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10"
            src="/images/services/image 11.png"
            alt="office content 2"
          />
        </div>
        <div className="font-light mt-4 lg:mt-0 text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 font-semibold text-4xl text-gray-900 dark:text-white">
            Services
          </h2>
          <p className="mb-4 text-base text-fontColour">
            We are strategists, designers, and developers. Innovators and problem solvers. Small enough to be simple and
            quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick,
            but big enough to deliver the scope you want at the pace you need.
          </p>
          <p className='text-fontColour text-base'>
            We are strategists, designers, and developers. Innovators and problem solvers. Small enough to be simple and quick.
          </p>
        </div>
      </div>
    </section>
  );
}
