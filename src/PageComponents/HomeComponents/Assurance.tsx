import React, { useState, useEffect, useRef } from 'react';
import Button from '../../CustomComponents/buttons';

const images = [
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-1-66a36f243e6b8.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-1.jpg',
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-2-66a36f244d8b4.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-2.jpg',
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-3-66a36f31b1271.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-3.jpg',
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-4-66a36f3254f54.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-4.jpg',
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-5-66a36f3dbfafa.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-5.jpg',
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-6-66a36f3f24d12.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-6.jpg',
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-7-66a36f4a25cce.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-7.jpg',
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-8-66a36f4b647bc.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-8.jpg',
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-23-66a36f563a91c.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-23.jpg',
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-24-66a36f5785006.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-24.jpg',
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-25-66a36f5fd06ec.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-25.jpg',
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-26-66a36f61b8ab6.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-26.jpg',
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-27-66a36f69251d4.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-27.jpg',
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-28-66a36f6b5dbaf.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-28.jpg',
  },
];

const services = [
  "Architectural and Planning services",
  "Design consultation and advice",
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
            <picture
              key={index}
              className={`absolute inset-0 h-full w-full transition-transform duration-1000 transform ${
                index === currentImageIndex
                  ? 'translate-x-0'
                  : index < currentImageIndex
                  ? '-translate-x-full'
                  : 'translate-x-full'
              }`}
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <source srcSet={image.webp} type="webp" />
              <source srcSet={image.jpg} type="jpeg" />
              <img
                src={image.jpg}
                alt={`Photos ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
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
              <Button className='mt-4' variant='primary' to="/contact" aria-label="Contact us">Contact</Button>
            </div>
          </div>
        </div>
        <div className="lg:hidden block w-full h-64 sm:h-80 overflow-hidden">
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <picture
                key={index}
                className={`absolute inset-0 h-full w-full transition-transform duration-1000 transform ${
                  index === currentImageIndex
                    ? 'translate-x-0'
                    : index < currentImageIndex
                    ? '-translate-x-full'
                    : 'translate-x-full'
                }`}
                style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <source srcSet={image.webp} type="webp" />
                <source srcSet={image.jpg} type="jpeg" />
                <img
                  src={image.jpg}
                  alt={`Photos ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
