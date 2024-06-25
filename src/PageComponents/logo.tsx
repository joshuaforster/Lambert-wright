import React, { useEffect, useState, useRef } from 'react';

const logos = [
  { src: "images/logos/logo.png", alt: "Transistor" },
  { src: "images/logos/llpm-logo.png", alt: "Reform" },
  { src: "images/logos/labcaward.png", alt: "Tuple" }
];

export default function Logo() {
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
    <section
      ref={sectionRef}
      className={`bg-white transition-opacity duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="py-12 mx-auto max-w-screen-xl px-6 lg:px-8">
        <h2 className="text-lg font-semibold leading-8 capitalize text-gray-900">
          Our Recognitions and Partnerships
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 mt-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                className="max-h-16 w-full max-w-xs object-contain"
                src={logo.src}
                alt={logo.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
