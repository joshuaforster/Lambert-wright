import React, { useState } from 'react';
import SingleImage from '../CustomComponents/singleImage';

export interface ImageItem {
  type: 'image';
  imageUrl: string;
  category: string;
  title?: string;
  altText?: string;
}

export type GalleryItem = ImageItem;

interface ImageGalleryProps {
  items: GalleryItem[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    }
  };

  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % items.length);
    }
  };

  const closeFullscreen = () => {
    setCurrentIndex(null);
  };

  return (
    <section className="bg-white dark:bg-dark-gray">
      <div className="px-4 py-8 mx-auto max-w-screen-xl lg:px-6 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-100 overflow-hidden border border-black dark:border-white cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <div className="w-full h-full">
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  className="w-full h-full object-cover"
                />
                <h3 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {currentIndex !== null && (
        <SingleImage
          imageUrl={items[currentIndex].imageUrl}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onClose={closeFullscreen}
        />
      )}
    </section>
  );
};

export default ImageGallery;
