import React from 'react';
import { services } from '../Data/serviceData';

const navigation = {
  nav:[
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: "FAQ's", href: '/faq' },
    { name: 'Brochure', href: 'Brochure/Brochure_JLR2021-2.pdf', isExternal: true },
    { name: 'Contact', href: '/contact' }
  ],
  contact: [
    { name: 'Phone: 1234567890', href: 'tel:+1234567890' },
    { name: 'WhatsApp: 1234567890', href: 'https://wa.me/1234567890' },
    { name: 'Email: info@example.com', href: 'mailto:info@example.com' },
  ],
  services: services.map(service => ({
    name: service.title.charAt(0).toUpperCase() + service.title.slice(1).toLowerCase(),
    href: `/services/${service.id}`
  })),
  legal: [
    { name: 'Privacy Policy', href: '/privacypolicy' },
    { name: 'Terms & Conditions', href: '/termsandconditions' },
  ],

};

export default function Example() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-customBlue" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img
              className="h-16"
              src="images/logo.png"
              alt="Company name"
            />
            {/* <p className="text-sm leading-6 text-gray-300">
              Making the world a better place through constructing elegant hierarchies.
            </p> */}
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.nav.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.contact.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; {currentYear} Lambert & Wright - Lambert & Wright is a trading name of JLR Bespoke Property Renovations LTD</p>
        </div>
      </div>
    </footer>
  );
}
