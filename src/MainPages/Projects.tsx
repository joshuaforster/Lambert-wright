import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../CustomComponents/projectsContext';
import Button from '../CustomComponents/buttons';

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
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Projects</h1>
          <p className="text-lg text-gray-600">Explore some of the amazing projects we've worked on.</p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <div key={project.id} className="flex flex-col items-center">
              <article className="relative isolate flex justify-end overflow-hidden bg-gray-900 w-full h-80 sm:h-96 lg:h-[400px] mb-4">
                <img src={project.images[0]} alt={project.title} className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </article>
              <div className="mt-4 text-center px-4">
                <h3 className="text-lg font-semibold leading-6 text-black mb-2">
                  <Link to={`/projects/${project.id}`}>
                    {project.title}
                  </Link>
                </h3>
                <p className="text-sm leading-6 text-black mb-4">{project.description.substring(0, 100)}...</p>
                <Button variant='tertiary-black' to={`/projects/${project.id}`} className="mt-4">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
