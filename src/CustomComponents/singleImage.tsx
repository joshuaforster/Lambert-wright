import React from 'react';

interface SingleImageProps {
  imageUrl: string;
}

export default function SingleImage({ imageUrl }: SingleImageProps) {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <img
        src={imageUrl}
        alt="placeholder"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
