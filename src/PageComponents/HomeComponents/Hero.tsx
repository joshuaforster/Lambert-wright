import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

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

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 4000); // Change every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true, // Enable swipe detection with mouse as well
  });



  return (
    <div className="relative">
      <div>
        <div
          className="relative px-6 pb-24 pt-20 sm:pb-32 lg:col-span-7 lg:px-0  xl:col-span-6"
          style={{
            backgroundImage: "url('/images/w19.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative mx-auto max-w-2xl lg:mx-0">
            <div className="hidden sm:mt-32 sm:flex lg:mt-16"></div>
            <h1 
              className="mt-24 text-5xl font-bold  text-white sm:mt-10 sm:ml-6 md:ml-12 lg:ml-24"
              style={{ lineHeight: '1.25' }}
            >
              Masters In Refurbishment Since 1990
            </h1>
            {/* <p className="mt-6 text-lg leading-8 text-white sm:ml-6 md:ml-12 lg:ml-24">
              JL Bespoke Property Renovations: Elevate Your Living Space with Quality Workmanship, Tailored Solutions, and Unmatched Customer Satisfaction
            </p> */}
            <div className="mt-10 flex items-center gap-x-6 sm:ml-6 md:ml-12 lg:ml-24">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="relative lg:col-span-5 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 flex items-center justify-center"
          style={{ height: '100%', backgroundColor:'#1D1D1B' }}
        >
          <div className="relative w-full sm:m-6 md:m-12 lg:m-16 my-8 flex items-center justify-center" {...handlers}>
            <div className="relative flex items-center justify-center w-full h-full">
              <img
                src={images[currentImageIndex]}
                alt="Slider"
                style={{ transition: 'opacity 1s ease-in-out' }}
                className="max-w-full max-h-full object-contain transition-opacity duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 flex items-center justify-between">
                <button
                  onClick={prevImage}
                  className="text-white focus:outline-none bg-orange-500 rounded-full p-2"
                  style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="text-white focus:outline-none bg-orange-500 rounded-full p-2"
                  style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-4 w-full flex justify-center">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 mx-1 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-black'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;