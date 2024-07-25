import React, { useEffect, useState, useRef } from 'react';

const reviews = [
  {
    id: 1,
    text: "We employed JLR Bespoke Properties to project manage our kitchen redesign and build. We were instantly impressed with the professional nature in which they approached our requests and linked us in with an excellent kitchen designer. Once the build was under way we were very happy with the quality of workmen he employed along with the nature in which he tackled and solved our changes and the unforeseen problems which surfaced. The final result is a high quality kitchen finished to the best standards.",
    name: "Ed & Liz Barnett",
    image: "/images/reviews/review1.png",
  },
  {
    id: 2,
    text: "We engaged JLR Bespoke Property Renovations Ltd to undertake the conversion of our garage into a studio/multipurpose room with an adjacent Jack and Jill bathroom, remodelling of a utility room, and total heating and plumbing upgrade. We have been very happy with the quality of work. We had a clear schedule of works and despite the challenges of Covid this was adhered to. All the tradespeople were of a high quality, a pleasure to work with, and were always responsive to our input. Jason managed the project closely and is focused on ensuring work is undertaken to a high standard with a clear attention to detail. From start to finish the build went smoothly. We would happily recommend JLR Bespoke Property Renovations Ltd.",
    name: "J.Rollin",
    image: "/images/reviews/review2.png",
  },
  {
    id: 3,
    text: "I would highly recommend JLR. All aspects of their work from initial consultation through to the aftercare provided are really of the highest level. We have recently had a new heating system and boiler installed by Jason and his team and we were very pleased with the initial advice on both the correct remedial work for our old system and the best products to use. We are extremely happy with the installation and quality of workmanship. Jason took the time to explain in detail the new system and how it works and the aftercare service has been fantastic.",
    name: "Amy Baxter",
  },
  {
    id: 4,
    text: "We have recently engaged Jason to install a new family bathroom into our house. From our first meeting, Jason’s extensive knowledge of bathrooms, kitchens and central heating systems impressed us. Jason introduced us to Joanne from Bathrooms by Regency in Wigston, who patiently assisted us in making choices with regard to all the necessary sanitary ware and fittings. Jason also coordinated all the necessary associated trade’s people, which helped enormously to expedite the process. The final result has been a completely modernised, functional and aesthetically pleasing bathroom with a superb quality of finishing. We would have no hesitation in recommending Jason and look forward to him returning shortly to overhaul our Central Heating Systems and re-fit our ensuite bathroom.",
    name: "Neil & Sharon Burke",
  },
];

export default function Reviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextReview, 5000); // Change every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75 && bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="isolate overflow-hidden bg-white">
      <div className="relative mx-auto max-w-screen-xl px-4 lg:px-6 py-24 sm:py-32">
        <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />
        <div className={`transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl text-fontColour font-bold text-center mb-12">WHAT OUR CUSTOMERS SAY</h2>
          <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
            <div className="relative col-span-2 lg:col-start-1 lg:row-start-2 flex flex-col justify-center h-full">
              <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" className="absolute -top-12 left-0 -z-10 h-32 stroke-gray-900/10">
                <path
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                />
                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
              </svg>
              <blockquote className="text-l font-semibold leading-8 text-fontColour sm:leading-9 h-80 overflow-hidden">
                <p>{reviews[currentReviewIndex].text}</p>
              </blockquote>
            </div>
            <div className={`hidden lg:flex col-end-1 w-16 lg:row-span-4 lg:w-96 lg:h-80 ${!reviews[currentReviewIndex].image ? 'col-span-2' : ''}`}>
              {reviews[currentReviewIndex].image ? (
                <img
                  className="bg-indigo-50 h-full"
                  src={reviews[currentReviewIndex].image}
                  alt={reviews[currentReviewIndex].name}
                />
              ) : (
                ''
                // <div className="h-full bg-indigo-50 flex items-center justify-center text-lg text-gray-500">
                //   No Image Available
                // </div>
              )}
            </div>
            <figcaption className="text-base lg:col-start-1 lg:row-start-3">
              <div className="font-semibold text-fontColour">{reviews[currentReviewIndex].name}</div>
            </figcaption>
          </figure>
          <div className="flex justify-center items-center mt-8">
            <button onClick={prevReview} className="mx-2 text-fontColour hover:text-gray-900 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {reviews.map((_, index) => (
              <div key={index} className={`h-2 w-2 rounded-full mx-1 ${index === currentReviewIndex ? 'bg-gray-900' : 'bg-gray-300'}`} />
            ))}
            <button onClick={nextReview} className="mx-2 text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center items-center mt-4">
            <span className="text-sm text-fontColour">{currentReviewIndex + 1} of {reviews.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
