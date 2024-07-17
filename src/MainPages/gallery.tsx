import React, { useState } from 'react';
import ImageGallery, { GalleryItem } from '../PageComponents/imagegallery';

export const hardcodedItems: GalleryItem[] = [
  // Project 4
  { type: 'image', imageUrl: 'images/project4/97195000951550_MAH190125_IMG_03-Copy-1024x684.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w-6.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w1.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w2.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w3.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w4.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w5.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w7.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w8.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w9.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w10.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w11.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w12.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w13.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w14.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w15.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w16.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w18.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w19.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project4/w20.jpg', category: 'Project 4' },

  // Project 6
  { type: 'image', imageUrl: 'images/project6/galleryimg32.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/galleryimg33.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/galleryimg35.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_0964-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_0999-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_1038-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_1084-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_1099-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_1184-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_1200-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_1211-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_1352-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_1451-1024x768.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_1460-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_1549-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_1556-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_1558-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_1768-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_1956-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_1996-768x1024.jpg', category: 'Project 6' },
  // { type: 'image', imageUrl: 'images/project6/IMG_2037-1024x768.jpg', category: 'Project 6' },
  // { type: 'image', imageUrl: 'images/project6/IMG_2082-1024x768.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_2095-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_2213-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_2228-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_2230-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_2235-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_2237-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_2251-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_2278-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_2281-768x1024.jpg', category: 'Project 6' },
  // { type: 'image', imageUrl: 'images/project6/IMG_3408-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/IMG_4238-768x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/Lambert-1-1536x1024.jpg', category: 'Project 6' },
  { type: 'image', imageUrl: 'images/project6/Lambert-11-1536x1024.jpg', category: 'Project 6' },

  // Project 1
  { type: 'image', imageUrl: 'images/project1/Aerial-View.jpg', category: 'Project 1' },
  // { type: 'image', imag1eUrl: 'images/project1/Cinema-Room-1-1536x1024.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Cinema-Room-2-1536x1081.jpg', category: 'Project 1' },
  // { type: 'image', imageUrl: 'images/project1/Cinema-Room-3-1536x1025.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Courtyard-1536x1021.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Cupboard-Doors-made-from-old-Cheese-Boards-768x1278.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Entrance-Gates-1536x1069.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Garage-and-Gym-1.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Garage-and-Gym-2-1536x884.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Garden-1536x1024.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Gym-1536x1025.jpg', category: 'Project 1' },
  // { type: 'image', imageUrl: 'images/project1/Inglenook-1-1536x1091.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Inglenook-2-1536x1038.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Inglenook-3-1536x1024.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Kitchen-1-1024x682.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Kitchen-2-768x1152.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Kitchen-3.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Kitchen-4-1536x1025.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Mower-Hut-1536x1024.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Rear-and-side-Elevations-1536x1012.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Rear-Elevation-1024x704.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Side-Elevation-1024x683.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Sitting-Room-1536x1025.jpg', category: 'Project 1' },
];


const categories = ['Project 1', 'Project 4', 'Project 6', 'Clear'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === 'Clear' ? null : category);
  };

  const filteredItems = selectedCategory
    ? hardcodedItems.filter(item => item.category === selectedCategory)
    : hardcodedItems;

    return (
      <section className="bg-white dark:bg-dark-gray py-8">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
          <div className="max-w-screen-lg mx-auto text-gray-800 sm:text-lg dark:text-white text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Gallery</h2>
            {/* <p className="mb-16 text-lg text-gray-600 dark:text-gray-300">
              Explore some of the amazing projects we've worked on.
            </p> */}
          </div>
          
          <div className="max-w-screen-lg mx-auto text-gray-800 sm:text-lg dark:text-white text-center mb-8">
            {/* <h3 className="mb-2 text-2xl tracking-tight font-semibold text-gray-900 dark:text-white">Filter Projects</h3> */}
            <p className="mb-4  text-gray-600 dark:text-gray-300">
              Use the buttons below to filter the projects by category. Click "Clear Filters" to view all projects.
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-16 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                className={`mx-2 mb-2 px-4 py-2 rounded transition-colors duration-200 ${
                  selectedCategory === category ? 'bg-customBlue text-white' : 'bg-gray-200'
                } ${category === 'Clear' ? 'hover:bg-customGold' : 'hover:bg-customBlue hover:text-white'}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category === 'Clear' ? 'Clear Filters ✕' : category}
              </button>
            ))}
          </div>
  
          {selectedCategory === null ? (
            categories.filter(category => category !== 'Clear').map(category => (
              <div key={category} className="mb-12">
                <h3 className="text-3xl font-semibold my-4 text-center">{category}</h3>
                <ImageGallery items={hardcodedItems.filter(item => item.category === category)} />
              </div>
            ))
          ) : (
            <div>
              <h3 className="text-3xl font-semibold my-4 text-center">{selectedCategory}</h3>
              <ImageGallery items={filteredItems} />
            </div>
          )}
        </div>
      </section>
    );
}