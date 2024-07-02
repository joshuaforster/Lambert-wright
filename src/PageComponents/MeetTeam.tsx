import React, { useEffect, useState, useRef } from 'react';

const people = [
  {
    name: 'Larry Lambert',
    role: 'Co-Founder & Project Manager',
    imageUrl: 'images/about/larry.png',
    bio: `Larry’s career began in exhibition construction and management before transitioning to property design and construction in the 70s. He has managed an independent family property company since 1927, gaining extensive experience in complex construction and historical restoration over 45 years.`,
  },
  {
    name: 'Jason Wright',
    role: 'Co-Founder & Property Developer',
    imageUrl: 'images/about/wright.png',
    bio: `Jason has over 38 years in the trade, starting with a City & Guilds in Plumbing and Heating. He founded successful plumbing companies and transitioned to property development, setting up JLR Bespoke Property Renovations Limited in 2017 with Larry Lambert, delivering top-quality renovations.`,
  },
];

export default function Example() {
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
    <div className="bg-customBlue py-24 md:py-32 lg:py-20">
      <div
        ref={sectionRef}
        className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-white">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul className="mt-10 mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none md:gap-x-40">
          {people.map((person) => (
            <li key={person.name}>
              <img className="aspect-[4/3] w-full rounded-2xl object-cover object-top" src={person.imageUrl} alt={person.name} />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-white">{person.name}</h3>
              <p className="text-base leading-7 text-white">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-white">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
