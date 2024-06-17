import React from 'react';
import { useInView } from 'react-intersection-observer';

interface StepType {
  id: number;
  name: string;
  description: string;
}

const steps: StepType[] = [
  {
    id: 1,
    name: 'Who are JLR',
    description: 'Experienced and trusted Project Management and Construction team based in Leicestershire with over 30 years of experience.',
  },
  {
    id: 2,
    name: 'What we do',
    description: 'Complete key-turn Property Renovation and Project Management solutions from start to completion.',
  },
  {
    id: 3,
    name: 'Our Expertise',
    description: 'We specialize in House Renovations, Property Refurbishment, and Property Extensions.',
  },
  {
    id: 4,
    name: 'How it starts',
    description: 'We provide free quotations for your dream project. Contact us via call or email.',
  },
];

const Steps: React.FC = () => {
  return (
    <section className="bg-[#323D41]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-5xl font-bold leading-8 text-white">Your project your way...</h2>
            <div className="mt-8">
              <p className="text-xl text-gray-300">Building Dreams</p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:mt-0 lg:ml-16 lg:max-w-xl lg:grid-cols-2">
            {steps.map((step) => (
              <Step key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepProps {
  step: StepType;
}

const Step: React.FC<StepProps> = ({ step }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-y-3 border-l border-white pl-6 text-white transform transition-transform duration-700 ease-in-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <dt className="text-sm leading-6">{step.description}</dt>
      <dd className="order-first text-3xl font-semibold tracking-tight">{step.name}</dd>
    </div>
  );
};

export default Steps;