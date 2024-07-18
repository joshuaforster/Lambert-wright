import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../Data/serviceData';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-customGray dark:bg-gray-900 py-16">
      <div ref={sectionRef} className="max-w-screen-xl mx-auto px-4 lg:px-6">
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
