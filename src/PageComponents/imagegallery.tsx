// src/PageComponents/imagegallery.tsx
import React, { useState } from 'react';
import Slider from '../CustomComponents/sliderImages';
import SingleImage from '../CustomComponents/singleImage';

export interface ImageItem {
  type: 'image';
  imageUrl: string;
}

export interface SliderItem {
  type: 'slider';
  firstImage: string;
  secondImage: string;
}

export type GalleryItem = ImageItem | SliderItem;

interface ImageGalleryProps {
  items: GalleryItem[];
  limit?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, limit }) => {
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

  const displayedItems = limit ? items.slice(0, limit) : items;

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {displayedItems.map((item, index) => (
            <div key={index} className="relative w-full overflow-hidden border border-black dark:border-white">
              {item.type === 'image' ? (
                <div className="w-full" style={{ height: '80vh' }}>
                  <SingleImage
                    imageUrl={item.imageUrl}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    isFullscreen={currentIndex === index}
                    setIsFullscreen={(value) => setCurrentIndex(value ? index : null)}
                  />
                </div>
              ) : (
                <div className="w-full h-full">
                  <Slider
                    firstImage={{ imageUrl: item.firstImage }}
                    secondImage={{ imageUrl: item.secondImage }}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    isFullscreen={currentIndex === index}
                    setIsFullscreen={(value) => setCurrentIndex(value ? index : null)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;