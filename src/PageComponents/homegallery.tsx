import React, { useEffect, useState, useRef } from 'react';
import ImageGallery from '../PageComponents/imagegallery';
import { Link } from 'react-router-dom';
import { hardcodedItems } from '../MainPages/gallery';

export default function HomeGallery() {
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
      className={`py-16 bg-gray-200 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Some of Our Work</h2>
        <p className="mt-4 text-lg text-gray-600">
          Take a look at some of the projects we've completed. Click the button below to see our full gallery.
        </p>
      </div>
      <div>
        <ImageGallery items={hardcodedItems} limit={3} />
      </div>
      <div className="flex justify-center mt-8">
        <Link
          to="/gallery"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          View more
        </Link>
      </div>
    </div>
  );
}
