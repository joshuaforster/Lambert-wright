import React from 'react';
import ImageGallery from '../PageComponents/imagegallery';
import { Link } from 'react-router-dom';
import { hardcodedItems } from '../MainPages/gallery';

export default function HomeGallery() {
  return (
    <div className="py-16  bg-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Some of Our Work</h2>
        <p className="mt-4 text-lg text-gray-600">
          Take a look at some of the projects we've completed. Click the button below to see our full gallery.
        </p>
      </div>
      <div>
      <ImageGallery items={hardcodedItems} limit={3} />
      </div>
      <div className="flex justify-center mt-8">
        <Link 
          to="/gallery" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          View more
        </Link>
      </div>
    </div>
  );
}