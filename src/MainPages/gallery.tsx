import React, { useEffect, useState, useRef } from 'react';
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

  // Project 1
  { type: 'image', imageUrl: 'images/project1/Aerial-View.jpg' },
  { type: 'image', imageUrl: 'images/project1/Cinema-Room-1-1536x1024.jpg' },
  { type: 'image', imageUrl: 'images/project1/Cinema-Room-2-1536x1081.jpg' },
  { type: 'image', imageUrl: 'images/project1/Cinema-Room-3-1536x1025.jpg' },
  { type: 'image', imageUrl: 'images/project1/Courtyard-1536x1021.jpg' },
  { type: 'image', imageUrl: 'images/project1/Cupboard-Doors-made-from-old-Cheese-Boards-768x1278.jpg' },
  { type: 'image', imageUrl: 'images/project1/Entrance-Gates-1536x1069.jpg' },
  { type: 'image', imageUrl: 'images/project1/Garage-and-Gym-1.jpg' },
  { type: 'image', imageUrl: 'images/project1/Garage-and-Gym-2-1536x884.jpg' },
  { type: 'image', imageUrl: 'images/project1/Garden-1536x1024.jpg' },
  { type: 'image', imageUrl: 'images/project1/Gym-1536x1025.jpg' },
  { type: 'image', imageUrl: 'images/project1/Inglenook-1-1536x1091.jpg' },
  { type: 'image', imageUrl: 'images/project1/Inglenook-2-1536x1038.jpg' },
  { type: 'image', imageUrl: 'images/project1/Inglenook-3-1536x1024.jpg' },
  { type: 'image', imageUrl: 'images/project1/Kitchen-1-1024x682.jpg' },
  { type: 'image', imageUrl: 'images/project1/Kitchen-2-768x1152.jpg' },
  { type: 'image', imageUrl: 'images/project1/Kitchen-3.jpg' },
  { type: 'image', imageUrl: 'images/project1/Kitchen-4-1536x1025.jpg' },
  { type: 'image', imageUrl: 'images/project1/Mower-Hut-1536x1024.jpg' },
  { type: 'image', imageUrl: 'images/project1/Rear-and-side-Elevations-1536x1012.jpg' },
  { type: 'image', imageUrl: 'images/project1/Rear-Elevation-1024x704.jpg' },
  { type: 'image', imageUrl: 'images/project1/Side-Elevation-1024x683.jpg' },
  { type: 'image', imageUrl: 'images/project1/Sitting-Room-1536x1025.jpg' },
];

export default function Gallery() {
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
    <section
      ref={sectionRef}
      className={`bg-customGray py-8 flex flex-col items-center justify-center transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-screen-xl lg:pt-16 lg:px-6">
        {/* <div className="max-w-screen-lg text-center text-gray-800 sm:text-lg dark:text-white">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Gallery
          </h2>
          <p className='mb-4'>
            Take a look at some of our finest work. Our gallery showcases the high-quality property renovation services we offer. From residential refurbishments to commercial projects, our team ensures every detail is perfected. Witness the transformation for yourself!
          </p>
        </div> */}
      </div>
      <ImageGallery items={hardcodedItems} />
    </section>
  );
}
