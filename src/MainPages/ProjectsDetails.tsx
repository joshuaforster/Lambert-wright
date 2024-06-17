// src/MainPages/ProjectDetail.tsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProjects } from '../CustomComponents/projectsContext';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { projects } = useProjects();
  const project = projects.find((proj) => proj.id === id);

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  if (!project) {
    return <div>Project not found</div>;
  }

  const openGallery = (image: string) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  const nextImage = () => {
    const currentIndex = project.images.indexOf(currentImage!);
    const nextIndex = (currentIndex + 1) % project.images.length;
    setCurrentImage(project.images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = project.images.indexOf(currentImage!);
    const prevIndex = (currentIndex - 1 + project.images.length) % project.images.length;
    setCurrentImage(project.images[prevIndex]);
  };

  const similarProjects = projects.filter((proj) => proj.id !== id).slice(0, 4);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <Link to="/projects" className="text-blue-600 hover:underline mb-4 inline-block">
          &larr; Back to All Projects
        </Link>
        <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
        <img src={project.images[0]} alt={project.title} className="w-full h-96 object-cover rounded-lg mb-8" />
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700 mb-8">{project.description}</p>
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <p className="text-gray-700 mb-8">{project.location}</p>
            <h2 className="text-2xl font-semibold mb-4">Customer</h2>
            <p className="text-gray-700 mb-8">{project.customerName}</p>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-6 text-gray-700">
              {project.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/3 lg:ml-8 mt-8 lg:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title}  ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg cursor-pointer"
                  onClick={() => openGallery(image)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Similar Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {similarProjects.map((proj) => (
              <div key={proj.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={proj.images[0]} alt={proj.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
                  <p className="text-gray-600 mb-4">{proj.description.substring(0, 100)}...</p>
                  <Link to={`/projects/${proj.id}`} className="text-blue-600 hover:underline">
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeGallery}
          >
            <FaTimes />
          </button>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            onClick={prevImage}
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            onClick={nextImage}
          >
            <FaArrowRight />
          </button>
          <img
            src={currentImage!}
            alt="Full screen"
            className="max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;