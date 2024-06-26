import React, { useEffect, useState, useRef } from 'react';

const services = [
  {
    title: 'PROJECT PLANNING',
    description: 'We offer comprehensive project planning services, including property sourcing, local surveys, architectural design and building, planning application assistance, and financial planning for builds.',
  },
  {
    title: 'BUILDING & CONSTRUCTION',
    description: 'Our building and construction services encompass project management, building and carpentry work, roofing, and plastering, ensuring your renovation is completed to the highest standards.',
  },
  {
    title: 'PLUMBING & ELECTRICAL',
    description: 'Our plumbing and electrical services include electrical design and installation, kitchen and bathroom installations, hot/cold pipework alterations, above ground drainage systems, hot water system upgrades, heating system upgrades, and boiler installations.',
  },
  {
    title: 'DESIGN',
    description: 'Our design services cover interior flooring, painting and decorating, kitchen and bathroom designs, tiling, wooden floors, carpet fitting, door upgrades, and window upgrades.',
  },
  {
    title: 'PROPERTY EXTENSIONS',
    description: 'Need more space in your home but don’t want to move? An extension could be the perfect solution. Often, it’s cheaper to extend than to relocate. Whether you’re after a new kitchen, an extra bedroom, or additional living space, our team will guide you through the process, ensuring all rules and regulations are adhered to, to create the space you need.',
  },
  {
    title: 'LANDSCAPING',
    description: 'Looking for creative flair outside as well as inside? We deliver functional and beautiful outdoor spaces. Our team is experienced in both hard and soft landscaping, catering to a range of budgets and requirements, ensuring a high-quality exterior finish that adds value to your property.',
  },
  {
    title: 'BATHROOM & KITCHEN UPGRADES',
    description: 'Transform your property into a space you can enjoy. With over 30 years of experience in home renovations, refurbishments, and kitchen and bathroom fittings, we are Leicestershire’s top choice for kitchen and bathroom renovations. We create bespoke designs tailored to your needs, making your kitchen or bathroom a space you’ll love.',
  },
  {
    title: 'HEATING INSTALL & UPGRADES',
    description: 'Efficient heating systems not only provide comfort but also enhance energy efficiency. Whether you’re looking for underfloor heating, a new boiler system, or improvements to your existing system, JLR will help you achieve the best results for your home.',
  },
];

const ServicesSection = () => {
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
    <section
      ref={sectionRef}
      className={`bg-customGray dark:bg-gray-900 py-16 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-12">OUR REAL ESTATE SERVICE</h2>
        <div className="grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border-b border-gray-300 pb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-fontColour  mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
