import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

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
    <div>
      <div className="relative isolate overflow-hidden pt-14">
        <div className="absolute inset-0 -z-10 h-full w-full">
          <div
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'background-image 2s ease-in-out',
            }}
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1
                ref={headerRef}
                className={`text-4xl font-bold tracking-tight text-white sm:text-6xl transition-transform duration-1500 ${
                    headerInView ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'
                }`}
                style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Adjust the shadow to your preference
                }}
                >
                Masters in Refurbishment
            </h1>
            <p
              ref={paragraphRef}
              className={`mt-6 text-lg leading-8 text-white transition-transform duration-3000 ${
                paragraphInView ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'
              }`}
            >
              - Since 1990 -
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="www.google.com"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </a>
              <a href="www.google.com" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}