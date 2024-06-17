import React from 'react';

const logos = [
  { src: "images/logos/logo.png", alt: "Transistor" },
  { src: "images/logos/llpm-logo.png", alt: "Reform" },
  { src: "images/logos/labcaward.png", alt: "Tuple" }
];

export default function Logo() {
  return (
    <section className="bg-white">
      <div className="py-24 lg:py-32 mx-auto max-w-screen-xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Our Recognitions and Partnerships
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 mt-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                className="max-h-28 w-full object-contain"
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={70}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}