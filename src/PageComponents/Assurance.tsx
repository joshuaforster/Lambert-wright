import React, { useState, useEffect, useRef } from 'react';
import Button from '../CustomComponents/buttons';

const images = [
  'images/project4/w1.jpg',
  'images/project4/w2.jpg',
  'images/project4/w3.jpg',
  'images/project4/w4.jpg',
  // Add more images as needed
];

export default function Assurance() {
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
      className={`relative bg-customBlue text-white transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="lg:block hidden lg:absolute lg:inset-0 lg:left-1/2 lg:w-1/2 overflow-hidden">
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
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 xl:px-0">
        <div className="px-6 py-16 lg:px-0 lg:py-24 bg-customBlue lg:bg-transparent">
          <div className="max-w-2xl">
            <h2 className="text-base font-semibold leading-7">Assurance</h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl capitalize">Giving you confidence</h1>
            <p className="mt-4 leading-7">
              Whether it’s a complete home renovation or a refurbishment we have the skills, the experience, and the team to deliver on your dream project.
            </p>
            <p className="mt-4 leading-7">
              We take complete control of the project and ensure an enjoyable experience for you as our valued client.
            </p>
            <p className="my-4 leading-7">
              Communication is key to the success of any project which is why we maintain open communication channels with our clients every step of the way.
            </p>
            <Button variant='primary' className="px-6 py-3" to="/contact" aria-label="Contact us">Contact</Button>
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
      </div>
    </div>
  );
}

