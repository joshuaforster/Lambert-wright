import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProjects } from '../CustomComponents/projectsContext';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { projects } = useProjects();
  const project = projects.find((proj) => proj.id === id);

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
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

  const similarProjects = projects.filter((proj) => proj.id !== id).slice(0, 3);

  return (
    <div
      ref={sectionRef}
      className={`bg-gray-100 pb-16 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative w-full h-96 mb-8">
        <img src={project.images[0]} alt={project.title} className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-8 shadow-lg">{project.title}</h1>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-8">
        <Link to="/projects" className="text-blue-600 hover:underline mb-4 inline-block">
          &larr; Back to All Projects
        </Link>
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
                <div key={index} className="relative w-full h-32 overflow-hidden cursor-pointer" onClick={() => openGallery(image)}>
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full h-32 object-cover transform transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-50 transition-opacity duration-200"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Similar Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {similarProjects.map((proj) => (
              <article
                key={proj.id}
                className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img src={proj.images[0]} alt={proj.title} className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <Link to={`/projects/${proj.id}`}>
                    <span className="absolute inset-0" />
                    {proj.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">{proj.description.substring(0, 100)}...</p>
                <Link to={`/projects/${proj.id}`} className="mt-4 text-blue-600 hover:underline">
                  View Project
                </Link>
              </article>
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
