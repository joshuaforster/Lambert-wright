const stats = [
  { label: 'Founded', value: '2017' },
  { label: 'Employees', value: '37' },
  { label: 'Countries', value: '12' },
  { label: 'Raised', value: '$25M' },
];

export default function AboutHead() {
  return (
    <div className="bg-customBlue py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 lg:sticky lg:top-24 lg:flex lg:items-stretch">
            <div className="relative overflow-hidden flex-grow">
              <img
                className="w-full h-full lg:h-3/4 object-cover"
                src="images/aboutImage.png"
                alt="About "
              />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-white lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your Trusted Real Estate Partner
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  At Lambert & Wright, we take immense pride in the work we do because it defines who we are. Founded by Larry Lambert and Jason Wright, our company boasts over 70 years of combined experience in property builds and renovations. As Local Authority Building Control (LABC) award winners, we are perfectly equipped to manage large-scale renovations, helping homeowners transform their houses into dream homes without needing to move.
                </p>
                <h2 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">Our Story</h2>
                <p className="mt-4">
                Lambert & Wright was founded by Larry Lambert and Jason Wright who between them, have a wealth of knowledge and experience in property builds and renovation spanning over 70 years! As Local Authority Building Control (LABC) winners, they are the perfect project managers for large-scale renovations.
                </p>
                <p className="mt-4">
                  Both started Lambert & Wright Renovations so that they could continue to help more homeowners to create the dream home that they have always wanted, rather than having to leave the house that is in an area they love in search of the perfect property.
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-white">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}