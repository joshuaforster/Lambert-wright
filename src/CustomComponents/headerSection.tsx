import React from 'react';

interface HeaderSectionProps {
  image: string;
  title: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ image, title }) => {
  return (
    <div className="relative w-full h-96 ">
      <img src={image} alt={title} className="w-full h-96 object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
      </div>
    </div>
  );
};

export default HeaderSection;
