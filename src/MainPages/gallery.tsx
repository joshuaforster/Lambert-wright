// src/pages/Gallery.tsx
import React from 'react';
import ImageGallery, { GalleryItem } from '../PageComponents/imagegallery';

export const hardcodedItems: GalleryItem[] = [
  { type: 'image', imageUrl: 'images/image1.jpg' },
  { type: 'image', imageUrl: 'images/image2.jpg' },
  { type: 'slider', firstImage: 'images/before1.jpg', secondImage: 'images/after1.jpg' },
  // Add more items as needed
];

export default function Gallery() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:pt-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-800 sm:text-lg dark:text-white">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Gallery
          </h2>
          <p>
            Take a look at some of our best work. Our gallery showcases the high-quality window cleaning services we provide. From residential to commercial properties, our team ensures that every window sparkles. See the difference for yourself!
          </p>
        </div>
      </div>
      <ImageGallery items={hardcodedItems} limit={3} />
    </section>
  );
}