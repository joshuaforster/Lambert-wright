import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../CustomComponents/projectsContext';

interface ProjectsProps {
  limit?: number;
}

const Projects: React.FC<ProjectsProps> = ({ limit }) => {
  const { projects } = useProjects();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Limit the projects if the limit prop is provided
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

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
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <article
              key={project.id}
              className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img src={project.images[0]} alt={project.title} className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link to={`/projects/${project.id}`}>
                  <span className="absolute inset-0" />
                  {project.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">{project.description.substring(0, 100)}...</p>
              <Link to={`/projects/${project.id}`} className="mt-4 text-blue-600 hover:underline">
                View Project
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
