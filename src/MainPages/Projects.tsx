// src/pages/Projects.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../CustomComponents/projectsContext';

interface ProjectsProps {
  limit?: number;
}

const Projects: React.FC<ProjectsProps> = ({ limit }) => {
  const { projects } = useProjects();

  // Limit the projects if the limit prop is provided
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={project.images[0]} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description.substring(0, 100)}...</p>
                <Link to={`/projects/${project.id}`} className="text-blue-600 hover:underline">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Projects;