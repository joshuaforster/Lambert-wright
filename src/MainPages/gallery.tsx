// src/pages/Gallery.tsx
import React from 'react';
import ImageGallery, { GalleryItem } from '../PageComponents/imagegallery';

export const hardcodedItems: GalleryItem[] = [
  // project 4
  { type: 'image', imageUrl: 'images/project4/97195000951550_MAH190125_IMG_03-Copy-1024x684.jpg' },
  { type: 'image', imageUrl: 'images/project4/w-6.jpg' },
  { type: 'image', imageUrl: 'images/project4/w1.jpg' },
  { type: 'image', imageUrl: 'images/project4/w2.jpg' },
  { type: 'image', imageUrl: 'images/project4/w3.jpg' },
  { type: 'image', imageUrl: 'images/project4/w4.jpg' },
  { type: 'image', imageUrl: 'images/project4/w5.jpg' },
  { type: 'image', imageUrl: 'images/project4/w7.jpg' },
  { type: 'image', imageUrl: 'images/project4/w8.jpg' },
  { type: 'image', imageUrl: 'images/project4/w9.jpg' },
  { type: 'image', imageUrl: 'images/project4/w10.jpg' },
  { type: 'image', imageUrl: 'images/project4/w11.jpg' },
  { type: 'image', imageUrl: 'images/project4/w12.jpg' },
  { type: 'image', imageUrl: 'images/project4/w13.jpg' },
  { type: 'image', imageUrl: 'images/project4/w14.jpg' },
  { type: 'image', imageUrl: 'images/project4/w15.jpg' },
  { type: 'image', imageUrl: 'images/project4/w16.jpg' },
  { type: 'image', imageUrl: 'images/project4/w18.jpg' },
  { type: 'image', imageUrl: 'images/project4/w19.jpg' },
  { type: 'image', imageUrl: 'images/project4/w20.jpg' },

  // project 6
  { type: 'image', imageUrl: 'images/project6/galleryimg32.jpg' },
  { type: 'image', imageUrl: 'images/project6/galleryimg33.jpg' },
  { type: 'image', imageUrl: 'images/project6/galleryimg35.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_0964-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_0999-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_1038-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_1084-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_1099-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_1184-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_1200-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_1211-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_1352-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_1451-1024x768.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_1460-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_1549-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_1556-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_1558-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_1768-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_1956-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_1996-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_2037-1024x768.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_2082-1024x768.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_2095-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_2213-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_2228-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_2230-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_2235-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_2237-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_2251-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_2278-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_2281-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_3408-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/IMG_4238-768x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/Lambert-1-1536x1024.jpg' },
  { type: 'image', imageUrl: 'images/project6/Lambert-11-1536x1024.jpg' },
];

export default function Gallery() {
  return (
    <section className="bg-white py-8 flex flex-col items-center justify-center">
      <div className="max-w-screen-xl lg:pt-16 lg:px-6">
        <div className="max-w-screen-lg text-center text-gray-800 sm:text-lg dark:text-white">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Gallery
          </h2>
          <p className='mb-4'>
            Take a look at some of our finest work. Our gallery showcases the high-quality property renovation services we offer. From residential refurbishments to commercial projects, our team ensures every detail is perfected. Witness the transformation for yourself!
          </p>
        </div>
      </div>
      <ImageGallery items={hardcodedItems} />
    </section>
  );
}