import React, { useEffect, useState, useRef } from 'react';
import Button from '../CustomComponents/buttons';

const selectedImages = [
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-6.jpg',
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-5.jpg',
  'images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-2.jpg',
];

export default function HomeGallery() {
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
    <div
      ref={sectionRef}
      className={`py-16 bg-white transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-fontColour">Gallery</h2>
        <p className="mt-4 text-lg text-fontColour">
          Take a look at some of the projects we've completed. Click the button below to see our full gallery.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mt-8">
        {selectedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button
          to="/gallery"
          variant="primary"
          aria-label="Gallery Button"
        >
          View more
        </Button>
      </div>
    </div>
  );
}
