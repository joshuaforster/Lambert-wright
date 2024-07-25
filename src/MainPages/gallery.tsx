import React, { useState } from 'react';
import ImageGallery, { GalleryItem } from '../PageComponents/GalleryComponent/imagegallery';

export const hardcodedItems: GalleryItem[] = [
  // Project 1
  { type: 'image', imageUrl: 'images/project1/Aerial-View.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Courtyard-1536x1021.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Cupboard-Doors-made-from-old-Cheese-Boards-768x1278.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Entrance-Gates-1536x1069.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Garage-and-Gym-1.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Garage-and-Gym-2-1536x884.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Garden-1536x1024.jpg', category: 'Project 1' },
  { type: 'image', imageUrl: 'images/project1/Gym-1536x1025.jpg', category: 'Project 1' },
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

  // Project 2 (previously Project III and Project 8)
  { type: 'image', imageUrl: 'images/projectIII/Rectory Cottage 2.jpg', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/projectIII/Rectory Cottage 3.jpg', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/projectIII/Rectory Cottage 4.jpg', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/projectIII/Rectory Cottage 5.jpg', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/projectIII/Rectory Cottage 6.jpg', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/projectIII/Rectory Cottage 7.jpg', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/projectIII/Rectory Cottage 8.jpg', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/projectIII/Rectory Cottage 9.jpg', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/projectIII/Rectory Cottage 10.jpg', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/projectIII/Rectory Cottage 11.jpg', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/project8/0f1ca0ab-04c5-4a1b-9af7-496d6ad92715.jpeg.webp', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/project8/3e4eb8b9-0f3b-4413-ad8c-172c3d552ccc.jpeg.webp', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/project8/6c26863a-afcf-4afe-a3a0-210ac8c1486e.jpeg.webp', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/project8/7d32a26f-3f69-4702-8c8d-a6c9515e8317.jpeg.webp', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/project8/7e1a74e8-0fa9-4f78-9545-7801fb1ba428.jpeg.webp', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/project8/9c89872a-62d6-4c65-b8cc-fef2941a920f.jpeg.webp', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/project8/35cc5448-341c-4932-8ecb-6c57c4524a31.jpeg.webp', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/project8/553d17c1-e89d-4024-9a8a-ee64084ac08c.jpeg.webp', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/project8/676cbbd8-f638-4b6f-811e-c9ad0d74c37d.jpeg.webp', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/project8/c9d820fb-b3c5-4f68-a459-791e43242c6d.jpeg.webp', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/project8/d3d67df8-6bdf-45f8-991b-a4a0fa7c08c5.jpeg.webp', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/project8/d88585d1-272a-4dff-9488-ca8018bd1925.jpeg.webp', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/project8/eb7d91e0-b5af-43fd-98ca-f54b848148eb.jpeg.webp', category: 'Project 2' },
  { type: 'image', imageUrl: 'images/project8/ebfe5759-3a9f-4e96-8dba-9473e64267c5.jpeg.webp', category: 'Project 2' },

  // Project 3 (previously Project 4 and Project IV)
  { type: 'image', imageUrl: 'images/project4/97195000951550_MAH190125_IMG_03-Copy-1024x684.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w-6.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w1.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w2.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w3.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w4.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w5.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w7.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w8.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w9.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w10.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w11.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w12.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w13.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w14.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w15.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w16.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w18.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w19.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/project4/w20.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/projectIV/Project iv 1.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/projectIV/Project iv 2.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/projectIV/Project iv 3.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/projectIV/Project iv 4.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/projectIV/Project iv 5.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/projectIV/Project iv 6.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/projectIV/Project iv 7.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/projectIV/Project iv 8.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/projectIV/Project iv 9.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/projectIV/Project iv 10.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/projectIV/Project iv 11.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/projectIV/Project iv 12.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/projectIV/Project iv 13.jpg', category: 'Project 3' },
  { type: 'image', imageUrl: 'images/projectIV/Project iv 14.jpg', category: 'Project 3' },

  // Project 4 (previously Project VI and Project 6)
  { type: 'image', imageUrl: 'images/project6/galleryimg32.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/galleryimg33.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/galleryimg35.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_0964-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_0999-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_1038-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_1084-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_1099-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_1184-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_1200-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_1211-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_1352-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_1451-1024x768.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_1460-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_1549-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_1556-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_1558-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_1768-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_1956-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_1996-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_2095-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_2213-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_2228-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_2230-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_2235-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_2237-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_2251-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_2278-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_2281-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/IMG_4238-768x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/Lambert-1-1536x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/project6/Lambert-11-1536x1024.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-1.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-2.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-3.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-4.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-5.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-6.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-7.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-8.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-23.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-24.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-25.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-27.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-28.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-33.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-34.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-35.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-37.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-38.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-39.jpg', category: 'Project 4' },
  { type: 'image', imageUrl: 'images/projectVI/Bumblebee Cottage, Main Street, Burton Overy-40.jpg', category: 'Project 4' },

  // Kitchens & Bathrooms
  { type: 'image', imageUrl: 'images/Bathrooms/Bath 1.jpg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/Bath 2.jpg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/Bath 6.jpg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/Bath3.jpg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/Bath4.JPG', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/Bath5.JPG', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/Bumblebee Cottage, Main Street, Burton Overy-26.jpg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/Bumblebee Cottage, Main Street, Burton Overy-36.jpg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/Bumblebee Cottage, Main Street, Burton Overy-37.jpg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/Bumblebee Cottage, Main Street, Burton Overy-38.jpg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/Bumblebee Cottage, Main Street, Burton Overy-39.jpg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/Bumblebee Cottage, Main Street, Burton Overy-40.jpg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/WhatsApp Image 2024-07-20 at 11.18.20 (3).jpeg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/WhatsApp Image 2024-07-20 at 11.18.20 (2).jpeg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/WhatsApp Image 2024-07-20 at 11.18.20 (1).jpeg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/WhatsApp Image 2024-07-20 at 11.18.20.jpeg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/WhatsApp Image 2024-07-20 at 11.17.07 (4).jpeg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/WhatsApp Image 2024-07-20 at 11.17.07 (3).jpeg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/WhatsApp Image 2024-07-20 at 11.17.07 (2).jpeg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/WhatsApp Image 2024-07-20 at 11.17.07 (1).jpeg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/WhatsApp Image 2024-07-20 at 11.17.07.jpeg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/k1.jpg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/K2.webp', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/K3.jpg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/k4.jpg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/kitchen1.jpg', category: 'Kitchens & Bathrooms' },
  { type: 'image', imageUrl: 'images/Bathrooms/Kitchen3.jpg', category: 'Kitchens & Bathrooms' },

  // General
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 09.05.21.jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.48.07 (12).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.48.07 (11).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.48.07 (10).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.48.07 (9).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.48.07 (8).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.48.07 (7).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.48.07 (6).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.48.07 (5).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.48.07 (4).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.48.07 (3).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.48.07 (2).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.48.07 (1).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.48.07.jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (27).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (26).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (25).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (24).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (23).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (22).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (21).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (20).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (19).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (18).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (17).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (16).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (15).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (14).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (13).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (12).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (11).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (10).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (8).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (7).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (6).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (5).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (4).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (3).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (2).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07 (1).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.34.07.jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.17.38 (11).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.17.38 (10).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.17.38 (9).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.17.38 (8).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.17.38 (7).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.17.38 (6).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.17.38 (5).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.17.38 (4).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.17.38 (3).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.17.38 (2).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.17.38 (1).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 08.17.38.jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 11.16.16 (2).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 11.16.15.jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 11.16.16.jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 11.16.16 (1).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 11.16.16 (8).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 11.16.16 (7).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 11.16.16 (6).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 11.16.16 (5).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/WhatsApp Image 2024-07-20 at 11.16.16 (4).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/project7/1.jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/project7/WhatsApp Image 2024-07-17 at 15.14.32 (2).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/project7/WhatsApp Image 2024-07-17 at 15.14.32 (3).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/project7/WhatsApp Image 2024-07-17 at 15.14.32 (4).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/project7/WhatsApp Image 2024-07-17 at 15.14.32 (5).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/project7/WhatsApp Image 2024-07-17 at 15.14.32 (6).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/project7/WhatsApp Image 2024-07-17 at 15.14.32 (7).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/project7/WhatsApp Image 2024-07-17 at 15.14.32 (8).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/project7/WhatsApp Image 2024-07-17 at 15.14.32 (9).jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/project7/WhatsApp Image 2024-07-17 at 15.14.32.jpeg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/Doorway-and-cupboards-1024x768.jpg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/Entrance-to-Spa-1024x768.jpg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/feature 4.jpg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/feature 5.jpg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/feature 6.jpg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/feature 8.jpg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/feature 9.jpg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/feature work.jpg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/feature2.jpg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/Int 1.jpg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/Int2.jpg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/int3.jpg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/Lambert-Court2.jpg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/Lambert-Court3.jpg', category: 'General' },
  { type: 'image', imageUrl: 'images/General/Sauna-768x1024.jpg', category: 'General' },
];

const categories = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Kitchens & Bathrooms', 'General', 'Clear'];

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
          <h2 className="mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">Gallery</h2>
        </div>

        <div className="max-w-screen-lg mx-auto text-gray-800 sm:text-lg dark:text-white text-center mb-8">
          <p className="mb-4 text-gray-600 text-sm dark:text-gray-300">
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
              <h3 className="text-3xl font-semibold my-4 text-center flex items-center justify-center">
                {category}
                {category === 'Project 3' && (
                  <img src="images/logos/labc-logo.png" alt="LABC Logo" className="ml-4 h-16 w-auto inline-block" />
                )}
              </h3>
              <ImageGallery items={hardcodedItems.filter(item => item.category === category)} />
            </div>
          ))
        ) : (
          <div>
            <h3 className="text-3xl font-semibold my-4 text-center flex items-center justify-center">
              {selectedCategory}
              {selectedCategory === 'Project 3' && (
                <img src="images/logos/labc-logo.png" alt="LABC Logo" className="ml-4 h-16 w-auto inline-block" />
              )}
            </h3>
            <ImageGallery items={filteredItems} />
          </div>
        )}
      </div>
    </section>
  );
}
