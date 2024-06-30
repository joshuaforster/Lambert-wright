import React, { useEffect, useState, useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    title: 'What is Lambert and Wright?',
    answer: 'Lambert and Wright are an experienced and trusted Project Management and Construction team based in Leicestershire. Lambert and Wright haVE over 70 years’ experience in the area of property renovations and project management.',
  },
  {
    title: 'What services do you offer?',
    answer: 'Whether it’s a new build, a complete home renovation or a refurbishment we have the skills, the experience, and the team to deliver on your dream project.',
  },
  {
    title: 'What are your areas of expertise?',
    answer: 'We specialise in House Renovations, Property Refurbishment, and Property Extensions.',
  },
  {
    title: 'How does the process start?',
    answer: 'If you have a project in mind, we provide a free quotation service to make your dream project come true! Simply give us a call, or drop us an email using the details on this website.',
  },
  {
    title: 'What is the typical timeline for a renovation project?',
    answer: 'The timeline for a renovation project varies depending on the scope and complexity of the work. Generally, small projects can take a few weeks, while larger projects can take several months.',
  },
  {
    title: 'Do you provide architectural planning services?',
    answer: 'Yes, we offer comprehensive architectural planning services to ensure your project meets all building regulations and achieves your desired outcome.',
  },
  {
    title: 'Are you insured?',
    answer: 'Yes, Lambert & Wright are fully insured, providing peace of mind for all our clients.',
  },
  {
    title: 'Can you work with my budget?',
    answer: 'We work closely with our clients to ensure that their projects are completed within budget while still maintaining high standards of quality.',
  },
  {
    title: 'Do you offer a warranty on your work?',
    answer: 'Yes, we offer a warranty on all our work to guarantee the quality and durability of our renovations.',
  },
  {
    title: 'How can I contact you?',
    answer: 'You can contact us via phone, WhatsApp messaging or email. Our contact details are provided on our website. We look forward to discussing your project with you.',
  },
];

const FAQ: React.FC = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndices((prevActiveIndices) => {
      if (prevActiveIndices.includes(index)) {
        return prevActiveIndices.filter((i) => i !== index);
      } else {
        return [...prevActiveIndices, index];
      }
    });
  };

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
    <section className="relative bg-customGray dark:bg-gray-900">
      <div className="relative w-full h-96 mb-8">
        <img src='images/project4/w3.jpg' alt="FAQ's" className="absolute inset-0 w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white shadow-lg">FAQ's</h1>
        </div>
      </div>
      <div
        ref={sectionRef}
        className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-800 capitalize dark:text-white">Frequently asked questions</h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-10">
                <h3
                  className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  {activeIndices.includes(index) ? (
                    <FaMinus className="mr-2 w-5 h-5 text-fontColour dark:text-white" />
                  ) : (
                    <FaPlus className="mr-2 w-5 h-5 text-fontColour dark:text-white" />
                  )}
                  {faq.title}
                </h3>
                {activeIndices.includes(index) && <div className="text-fontColour dark:text-white">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
