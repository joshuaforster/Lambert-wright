import React from 'react';
import { services } from '../Data/serviceData';

const navigation = {
  nav: [
    { name: 'Home', href: '/', ariaLabel: 'Go to the Home page' },
    { name: 'About', href: '/about', ariaLabel: 'Learn more about us on the About page' },
    { name: 'Services', href: '/services', ariaLabel: 'Explore the Services we offer' },
    { name: 'Gallery', href: '/gallery', ariaLabel: 'View our Gallery' },
    { name: "FAQ's", href: '/faq', ariaLabel: 'Find answers to Frequently Asked Questions' },
    { name: 'Brochure', href: 'Brochure/Brochure_JLR2021-2.pdf', isExternal: true, ariaLabel: 'Download our Brochure' },
    { name: 'Contact', href: '/contact', ariaLabel: 'Get in touch with us on the Contact page' }
  ],
  contact: [
    { name: 'Larry Lambert: 07710311165', href: 'tel:07710311165', ariaLabel: 'Call Larry Lambert' },
    { name: 'Jason Wright: 07866741261', href: 'tel:07866741261', ariaLabel: 'Call Jason Wright' },
    { name: 'Email: info@lambertandwright.co.uk', href: 'mailto:info@lambertandwright.co.uk', ariaLabel: 'Email us at info@lambertandwright.co.uk' },
  ],
  services: services.map(service => ({
    name: service.title.charAt(0).toUpperCase() + service.title.slice(1).toLowerCase(),
    href: `/services/${service.id}`,
    ariaLabel: `Learn more about our ${service.title} service`
  })),
  legal: [
    { name: 'Privacy Policy', href: '/privacypolicy', ariaLabel: 'Read our Privacy Policy', alt:'Read our privacy policy' },
    { name: 'Terms & Conditions', href: '/termsandconditions', ariaLabel: 'Read our Terms & Conditions' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-customBlue border-t-2 border-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <picture>
              <source srcSet="/images/logos/logo-66a385c761f9d.webp" type="image/webp" />
              <img
                className="h-16"
                src="/images/logos/logo-66a385c761f9d.webp"
                alt="Lambert & Wright Company logo"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.nav.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} aria-label={item.ariaLabel} className="text-sm leading-6 text-gray-300 hover:text-customGold transition duration-300">
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
                      <a href={item.href} aria-label={item.ariaLabel} className="text-sm leading-6 text-gray-300 hover:text-customGold transition duration-300">
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
                      <a href={item.href} aria-label={item.ariaLabel} className="text-sm leading-6 text-gray-300 hover:text-customGold transition duration-300">
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
                      <a href={item.href} aria-label={item.ariaLabel} className="text-sm leading-6 text-gray-300 hover:text-customGold transition duration-300">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start mt-10">
          <a target="_blank" rel="noopener noreferrer" href="https://flex-stone.co.uk/" aria-label="Visit Flextone website">
            <picture>
              <source srcSet="/images/logos/flextone-66a385c5a44f2.webp" type="image/webp" />
              <img
                className="h-12"
                src="/images/logos/flextone-66a385c5a44f2.webp"
                alt="Flextone logo"
              />
            </picture>
          </a>
        </div>

        <div className="mt-4 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {currentYear} Lambert & Wright - Lambert & Wright is a trading name of JLR Bespoke Property Renovations LTD
          </p>
          <p className="text-xs leading-5 text-gray-400 mt-2">
            Registered Office: 19 Warren Park Way, Leicester LE19 4SA
          </p>
          <p className="text-xs leading-5 text-gray-400 mt-2">
            Company Registration Number: 10701923 | Registered in England
          </p>
        </div>
      </div>
    </footer>
  );
}
