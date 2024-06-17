export default function Services() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex align-middle lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-full lg:-ml-8 lg:h-full lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="images/service.png"
              alt="Property"
            />
          </div>
        </div>
        <div className="px-6 lg:contents h-full flex items-center">
          <div className="mx-auto max-w-2xl pb-16 pt-10 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none xl:w-1/2">
            <h2 className="text-base font-semibold leading-7 text-">Services</h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">WHAT WE OFFER</h1>
            <p className="mt-4 text-xl leading-8 text-gray-700">
              We provide comprehensive project management for all your needs, from internal adjustments to full-scale developments and extensions.
            </p>
            <div className="mt-6 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <ul role="list" className="space-y-6 list-disc pl-5 text-gray-600">
                <li>
                  <span>
                    <strong className="font-semibold text-gray-900">Complete Property Renovations</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong className="font-semibold text-gray-900">Architectural Planning</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong className="font-semibold text-gray-900">Property Extensions</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong className="font-semibold text-gray-900">Bathroom & Kitchen Refurbishments</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong className="font-semibold text-gray-900">Heating Installation & Upgrades</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong className="font-semibold text-gray-900">Landscaping</strong>
                  </span>
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