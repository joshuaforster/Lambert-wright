import React from 'react';

export default function Assurance() {
  return (
    <div className="relative bg-customBlue text-white">
      <div className="lg:absolute lg:inset-0 lg:left-1/2 lg:w-1/2">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="images/service.png"
          alt="Property"
        />
      </div>
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 xl:px-0">
        <div className="px-6 py-16 lg:px-0 lg:py-24">
          <div className="max-w-2xl">
            <h2 className="text-base font-semibold leading-7">Assurance</h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Giving you confidence</h1>
            <p className="mt-4 text-xl leading-8">
              Whether it’s a complete home renovation or a refurbishment we have the skills, the experience, and the team to deliver on your dream project.
            </p>
            <p className="mt-4 text-xl leading-8">
              We take complete control of the project and ensure an enjoyable experience for you as our valued client.
            </p>
            <p className="mt-4 text-xl leading-8">
              Communication is key to the success of any project which is why we maintain open communication channels with our clients every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}