import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../CustomComponents/buttons';

const images = [
  'images/project4/97195000951550_MAH190125_IMG_03-Copy-1024x684.jpg',
  'images/project4/w-6.jpg',
  'images/project4/w1.jpg',
  'images/project4/w2.jpg',
  'images/project4/w3.jpg',
  'images/project4/w4.jpg',
  'images/project4/w5.jpg',
  'images/project4/w7.jpg',
  'images/project4/w8.jpg',
  'images/project4/w9.jpg',
  'images/project4/w10.jpg',
  'images/project4/w11.jpg',
  'images/project4/w12.jpg',
  'images/project4/w13.jpg',
  'images/project4/w14.jpg',
  'images/project4/w15.jpg',
  'images/project4/w16.jpg',
  'images/project4/w18.jpg',
  'images/project4/w19.jpg',
  'images/project4/w20.jpg'
];

export default function HeroTwo() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(intervalId);
  }, []);

  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({ triggerOnce: true });

  return (
    <div className="relative isolate overflow-hidden h-/4 flex items-center justify-center pt-14">
      <div className="absolute inset-0 -z-10 w-full h-full">
        {images.map((image, index) => (
          <div
            key={image}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 2s ease-in-out',
            }}
            className="absolute inset-0 w-full h-full"
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:py-28 text-center">
        <h1
          ref={headerRef}
          className={`text-4xl font-bold tracking-tight text-white sm:text-6xl ${
            headerInView ? 'animate-slideInRight' : 'opacity-0'
          }`}
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Adjust the shadow to your preference
            lineHeight: '1.5', // Set the line height to 1.5 times the font size
          }}
        >
          Masters in Refurbishment
        </h1>
        <p
          ref={paragraphRef}
          className={`mt-6 text-lg leading-8 text-white ${
            paragraphInView ? 'animate-slideInLeft' : 'opacity-0'
          }`}
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Adjust the shadow to your preference
            lineHeight: '1.5', // Set the line height to 1.5 times the font size
          }}
        >
          - Since 1990 -
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button variant='primary' className="mr-4" to="/contact" aria-label="Contact us">Contact</Button>
          <Button variant='secondary' to="/about" aria-label="Find Out More">Find Out More</Button>
        </div>
      </div>

      <style>
        {`
          @keyframes slideInRight {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInLeft {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-slideInRight {
            animation: slideInRight 2s ease-in-out forwards;
          }

          .animate-slideInLeft {
            animation: slideInLeft 2s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
}