export default function Services() {
  return (
    <div className="relative bg-white text-gray-900">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end py-16 lg:py-24">
        <div className="lg:flex lg:w-1/2 lg:shrink-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-full lg:h-full lg:w-full xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="images/service.png"
              alt="Property"
            />
          </div>
        </div>
        <div className="px-6 lg:flex lg:items-center lg:w-1/2 lg:pr-8">
          <div className="mx-auto max-w-2xl pb-16 pt-10 lg:w-full lg:max-w-lg xl:w-full">
            <h2 className="text-base font-semibold leading-7 text-customBlue">Assurance</h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Giving you confidence</h1>
            <p className="mt-4 leading-8 text-gray-700">
              Whether it’s a complete home renovation or a refurbishment we have the skills, the experience and the team to deliver on your dream project.
            </p>
            <div className="mt-6 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <ul className="space-y-6 list-disc pl-5 text-gray-600">
                <li>
                  <strong className="font-semibold text-gray-900">Complete Property Renovations</strong>
                </li>
                <li>
                  <strong className="font-semibold text-gray-900">Architectural Planning</strong>
                </li>
                <li>
                  <strong className="font-semibold text-gray-900">Property Extensions</strong>
                </li>
                <li>
                  <strong className="font-semibold text-gray-900">Bathroom & Kitchen Refurbishments</strong>
                </li>
                <li>
                  <strong className="font-semibold text-gray-900">Heating Installation & Upgrades</strong>
                </li>
                <li>
                  <strong className="font-semibold text-gray-900">Landscaping</strong>
                </li>
              </ul>
              <p className="mt-6">
                We are dedicated to enhancing your home or business with top-quality services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}