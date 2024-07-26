import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../../CustomComponents/buttons';

const images = [
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-1-66a36f243e6b8.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-1.jpg'
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-2-66a36f244d8b4.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-2.jpg'
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-3-66a36f31b1271.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-3.jpg'
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-4-66a36f3254f54.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-4.jpg'
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-5-66a36f3dbfafa.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-5.jpg'
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-6-66a36f3f24d12.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-6.jpg'
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-7-66a36f4a25cce.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-7.jpg'
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-8-66a36f4b647bc.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-8.jpg'
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-23-66a36f563a91c.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-23.jpg'
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-24-66a36f5785006.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-24.jpg'
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-25-66a36f5fd06ec.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-25.jpg'
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-26-66a36f61b8ab6.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-26.jpg'
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-27-66a36f69251d4.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-27.jpg'
  },
  {
    webp: 'images/projectVI/bumblebee-cottage-main-street-burton-overy-28-66a36f6b5dbaf.webp',
    jpg: 'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-28.jpg'
  },
];

export default function HeroTwo() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setInitialLoad(false); // Disable the initial load flag after the first interval
    }, 4000); // Change every 4 seconds

    return () => clearInterval(intervalId);
  }, []);

  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({ triggerOnce: true });

  return (
    <div className="relative isolate overflow-hidden h-[80vh] flex pt-14">
      <div className="absolute inset-0 -z-10 w-full h-full">
        {images.map((image, index) => (
          <picture key={index} className="absolute inset-0 w-full h-full">
            <source srcSet={image.webp} type="/webp" />
            <source srcSet={image.jpg} type="/jpeg" />
            <img
              src={image.jpg}
              alt={`Photos ${index + 1}`}
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: 'auto',
                opacity: index === currentImageIndex ? 1 : 0,
                transition: 'opacity 2s ease-in-out, transform 4s ease-in-out',
                transform: index === currentImageIndex || (index === 0 && initialLoad) ? 'scale(1.1)' : 'scale(1)',
              }}
              className="absolute inset-0 w-full h-full"
            />
          </picture>
        ))}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="w-full px-4 lg:px-6 max-w-screen-xl mx-auto flex items-center">
        <div className="max-w-2xl lg:max-w-xl lg:pt-8 text-left">
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
            Lambert & Wright
          </p>
          <h1
            ref={headerRef}
            className={`text-5xl font-bold text-white ${
              headerInView ? 'animate-slideInRight' : 'opacity-0'
            }`}
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Adjust the shadow to your preference
              lineHeight: '1.5', // Set the line height to 1.5 times the font size
            }}
          >
            Masters in Refurbishment Since 1990
          </h1>
          <div className="mt-10 flex items-center gap-x-6">
            <Button variant='tertiary' to="/contact" aria-label="Contact us">
              Get A Free Quote
            </Button>
            <Button variant='tertiary' to="/about" aria-label="Find Out More">
              Find Out More <span aria-hidden="true">→</span>
            </Button>
          </div>
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
