import React, { useEffect, useState, useRef } from 'react';
import ImageGallery from '../PageComponents/imagegallery';
import { hardcodedItems } from '../MainPages/gallery';
import Button from '../CustomComponents/buttons';

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
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-fontColour">Our Projects</h2>
        <p className="mt-4 text-lg text-fontColour">
          Take a look at some of the projects we've completed. Click the button below to see our full gallery.
        </p>
      </div>
      <div>
        <ImageGallery items={hardcodedItems.slice(0, 3)} />
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
