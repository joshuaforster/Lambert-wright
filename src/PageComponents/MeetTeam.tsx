import React, { useEffect, useState, useRef } from 'react';

const people = [
  {
    name: 'Larry Lambert',
    role: 'Co-Founder & Project Manager',
    imageUrl: 'images/about/larry.png',
    bio: `Larry’s career began in exhibition construction and management before transitioning to property design and construction in the 70s. He has managed an independent family property company since 1927, gaining extensive experience in complex construction and historical restoration over 45 years.`,
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jason Wright',
    role: 'Co-Founder & Property Developer',
    imageUrl: 'images/about/wright.png',
    bio: `Jason has over 38 years in the trade, starting with a City & Guilds in Plumbing and Heating. He founded successful plumbing companies and transitioned to property development, setting up JLR Bespoke Property Renovations Limited in 2017 with Larry Lambert, delivering top-quality renovations.`,
    xUrl: '#',
    linkedinUrl: '#',
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
    <div
      ref={sectionRef}
      className={`bg-customBlue py-24 md:py-32 lg:py-20 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
              <img className="aspect-[4/3] w-full rounded-2xl object-cover object-top" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-white">{person.name}</h3>
              <p className="text-base leading-7 text-white">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-white">{person.bio}</p>
              <ul className="mt-6 flex gap-x-6">
                <li>
                  <a href={person.xUrl} className="text-white hover:text-gray-500">
                    <span className="sr-only">X</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={person.linkedinUrl} className="text-white hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
