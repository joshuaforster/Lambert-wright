#!/bin/bash

# Array of images to be converted
images=(
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w20.jpg"
  
"/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/97195000951550_MAH190125_IMG_03-Copy-1024x684.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w-6.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w1.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w2.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w3.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w4.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w5.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w7.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w8.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w9.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w10.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w11.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w12.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w13.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w14.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w15.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w16.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w18.jpg"
  "/Users/joshuaforster/Documents/Final-portfolio-projects/Lambert-wright/public/images/project4/w19.jpg"
)

# Loop through each image and convert to WebP
for image in "${images[@]}"; do
  if [[ -f "$image" ]]; then
    cwebp -q 80 "$image" -o "${image%.*}.webp"
    echo "Converted: $image"
  else
    echo "File not found: $image"
  fi
done

echo "Conversion completed."


