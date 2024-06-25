import React, { useEffect, useState, useRef } from 'react';
import Button from '../CustomComponents/buttons';

const images = [
  'images/project4/w1.jpg',
  'images/project4/w2.jpg',
  'images/project4/w3.jpg',
  'images/project4/w4.jpg',
  // Add more images as needed
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
      className={`relative bg-white text-gray-900 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end pb-16 lg:py-24">
        <div className="relative h-full lg:h-full lg:w-1/2 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2 overflow-hidden">
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <img
                key={index}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ${
                  index === currentImageIndex
                    ? 'translate-x-0'
                    : index < currentImageIndex
                    ? '-translate-x-full'
                    : 'translate-x-full'
                }`}
                src={image}
                alt="Property"
              />
            ))}
          </div>
        </div>
        <div className="lg:hidden block w-full h-64 sm:h-80 overflow-hidden">
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <img
                key={index}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ${
                  index === currentImageIndex
                    ? 'translate-x-0'
                    : index < currentImageIndex
                    ? '-translate-x-full'
                    : 'translate-x-full'
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
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 capitalize sm:text-4xl">Giving you confidence</h1>
            <p className="mt-4 leading-8 text-gray-700">
              Whether it’s a complete home renovation or a refurbishment we have the skills, the experience and the team to deliver on your dream project.
            </p>
            <div className="mt-6 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <ul className="space-y-6 list-disc pl-5 text-gray-600">
                <li>
                  <strong className="font-semibold text-gray-900">Complete Property Renovations</strong>
                </li>
                <li>
                  <strong className="font-semibold text-gray-900">Architectural Planning</strong>
                </li>
                <li>
                  <strong className="font-semibold text-gray-900">Property Extensions</strong>
                </li>
                <li>
                  <strong className="font-semibold text-gray-900">Bathroom & Kitchen Refurbishments</strong>
                </li>
                <li>
                  <strong className="font-semibold text-gray-900">Heating Installation & Upgrades</strong>
                </li>
                <li>
                  <strong className="font-semibold text-gray-900">Landscaping</strong>
                </li>
              </ul>
              <p className="mt-6">
                We are dedicated to enhancing your home or business with top-quality services.
              </p>
              <Button variant='primary' className="mr-4" to="/contact">Contact</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
