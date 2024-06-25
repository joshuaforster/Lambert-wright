import React, { useEffect, useState } from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface SingleImageProps {
  imageUrl: string;
  onPrevious: () => void;
  onNext: () => void;
  isFullscreen: boolean;
  setIsFullscreen: (value: boolean) => void;
}

export default function SingleImage({ imageUrl, onPrevious, onNext, isFullscreen, setIsFullscreen }: SingleImageProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isFullscreen) {
      setScrollPosition(window.scrollY);
      window.scrollTo(0, 0); // Scroll to the top when entering fullscreen
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto'; // Restore scrolling
      window.scrollTo(0, scrollPosition); // Restore the original scroll position
    }
  }, [isFullscreen, scrollPosition]);

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      <img
        src={imageUrl}
        alt="placeholder"
        className="cursor-pointer w-full h-full object-cover"
        onClick={openFullscreen}
      />
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeFullscreen}
          style={{ height: '100vh', width: '100vw' }} // Ensure the overlay takes the full height and width of the viewport
        >
          <div className="absolute top-5 right-5 text-white text-4xl leading-none z-50 cursor-pointer">
            <FaTimes onClick={closeFullscreen} />
          </div>
          <div
            className="absolute left-5 text-white text-4xl top-1/2 transform -translate-y-1/2 cursor-pointer z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <FaArrowLeft onClick={onPrevious} />
          </div>
          <div
            className="absolute right-5 text-white text-4xl top-1/2 transform -translate-y-1/2 cursor-pointer z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <FaArrowRight onClick={onNext} />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <div className="p-4 bg-opacity-75 flex items-center justify-center">
              <img
                src={imageUrl}
                alt="placeholder"
                className="max-h-[90vh] max-w-[90vw] object-contain"
                onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on the image
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
