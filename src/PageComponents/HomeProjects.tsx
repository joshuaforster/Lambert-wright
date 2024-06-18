import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Projects from '../MainPages/Projects';

const HomeProjects: React.FC = () => {
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
    <div
      ref={sectionRef}
      className={`bg-gray-100 py-16 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-center text-gray-600 mb-12">
          Check out some of our latest and greatest projects. Click the button below to view all our projects.
        </p>
        <Projects limit={3} />
        <div className="text-center mt-12">
          <Link to="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
