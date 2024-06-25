import React, { useEffect, useState, useRef } from 'react';
import Button from '../CustomComponents/buttons';

const images = [
  'images/project4/w1.jpg',
  'images/project4/w2.jpg',
  'images/project4/w3.jpg',
  'images/project4/w4.jpg',
  // Add more images as needed
];

const services = [
  "Complete Property Renovations",
  "Architectural Planning",
  "Property Extensions",
  "Bathroom & Kitchen Refurbishments",
  "Heating Installation & Upgrades",
  "Landscaping"
];

export default function Services() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

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
      className={`relative bg-customGray text-gray-900 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end pb-16 lg:py-24">
        <div className="relative w-full h-64 sm:h-80 lg:h-full lg:w-1/2 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2 overflow-hidden">
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <img
                key={index}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                src={image}
                alt="Property"
              />
            ))}
          </div>
        </div>
        <div className="px-6 lg:flex lg:items-center lg:w-1/2 lg:pr-8">
          <div className="mx-auto max-w-2xl pb-16 pt-10 lg:w-full lg:max-w-lg xl:w-full">
            <h2 className="text-base font-semibold leading-7 text-customBlue">Assurance</h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 capitalize sm:text-4xl">Giving <span className='text-lightBlue'>you</span> Confidence</h1>
            <p className="mt-4 leading-8 text-gray-700">
              Whether it’s a complete home renovation or a refurbishment we have the skills, the experience and the team to deliver on your dream project.
            </p>
            <div className="mt-6 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <ul className="space-y-6 list-disc pl-5 text-customBlue">
                {services.map((service, index) => (
                  <li key={index}>
                    <strong className="font-semibold text-customBlue">{service}</strong>
                  </li>
                ))}
              </ul>
              <p className="my-6">
                We are dedicated to enhancing your home or business with top-quality services.
              </p>
              <Button variant='primary' className="px-6 py-3 mt-4" to="/contact" aria-label="Contact us">Contact</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
