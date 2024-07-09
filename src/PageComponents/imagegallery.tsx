import React from 'react';
import SingleImage from '../CustomComponents/singleImage';

export interface ImageItem {
  type: 'image';
  imageUrl: string;
}

export type GalleryItem = ImageItem;

interface ImageGalleryProps {
  items: GalleryItem[];
  limit?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, limit }) => {
  const displayedItems = limit ? items.slice(0, limit) : items;

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {displayedItems.map((item, index) => (
            <div key={index} className="relative w-full overflow-hidden border border-black dark:border-white">
              {item.type === 'image' && (
                <div className="w-full" style={{ height: '80vh' }}>
                  <SingleImage imageUrl={item.imageUrl} />
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
