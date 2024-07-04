// src/components/ServicesSection.tsx
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { services }  from '../Data/serviceData';

const ServicesSection = () => {
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
    <section className="bg-customGray dark:bg-gray-900 py-16">
      <div
        ref={sectionRef}
        className={`max-w-screen-xl mx-auto px-4 lg:px-6 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
   
        <div className="grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div key={service.id}>
              <Link to={`/services/${service.id}`}>
                <div key={index} className="border-b border-gray-300 pb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-fontColour mt-2">{service.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
