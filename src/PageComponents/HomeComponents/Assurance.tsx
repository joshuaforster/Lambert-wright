import React, { useState, useEffect, useRef } from 'react';
import Button from '../../CustomComponents/buttons';

const images = [
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-1.jpg',
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-2.jpg',
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-3.jpg',
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-4.jpg',
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-5.jpg',
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-6.jpg',
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-7.jpg',
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-8.jpg',
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-23.jpg',
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-24.jpg',
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-25.jpg',
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-26.jpg',
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-27.jpg',
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-28.jpg',
];


const services = [
  "Architectural and Planning services.",
  "Design consultation and advice.",
  "Full Project Management",
  "Detailed quotations - From bathroom and kitchen refurbishment, stunning garden landscaping to a complete new build",
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
    <div ref={sectionRef} className="relative bg-customBlue text-white">
      <div className="lg:block hidden lg:absolute lg:inset-0 lg:left-1/2 lg:w-1/2 overflow-hidden">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 h-full w-full transition-transform duration-1000 transform ${
                index === currentImageIndex
                  ? 'translate-x-0'
                  : index < currentImageIndex
                  ? '-translate-x-full'
                  : 'translate-x-full'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 xl:px-0">
        <div
          className={`px-6 py-16 lg:px-0 lg:py-24 bg-customBlue lg:bg-transparent transition-opacity duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-2xl">
            {/* <h2 className="text-base font-semibold leading-7">Assurance</h2> */}
            <h1 className="mt-2 text-3xl font-bold capitalize sm:text-4xl">
              Giving <span className='text-lightBlue'>you</span> Confidence
            </h1>
            <p className="mt-4 leading-8">
            Whether it is a new build, or a home renovation or refurbishment we have the skill, the experience and the team to deliver on your dream project
            </p>
            <div className="mt-6 max-w-xl text-base leading-7 lg:max-w-none">
              <h2>We offer:</h2>
              <ul className="space-y-4 list-disc pl-5 mb-8">
                {services.map((service, index) => (
                  <li key={index}>
                    <strong className="font-normal">{service}</strong>
                  </li>
                ))}
              </ul>
              {/* <p className="my-6">
                We are dedicated to enhancing your home or business with top-quality services.
              </p> */}
              <Button variant='primary' to="/contact" aria-label="Contact us">Contact</Button>
            </div>
          </div>
        </div>
        <div className="lg:hidden block w-full h-64 sm:h-80 overflow-hidden">
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 h-full w-full transition-transform duration-1000 transform ${
                  index === currentImageIndex
                    ? 'translate-x-0'
                    : index < currentImageIndex
                    ? '-translate-x-full'
                    : 'translate-x-full'
                }`}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
