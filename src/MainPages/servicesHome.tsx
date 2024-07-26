import React from 'react';
import { Helmet } from 'react-helmet';
import ServicesHead from '../PageComponents/Services/servicesHead';
import ServicesSection from '../PageComponents/Services/servicesSection';
import HeaderSection from '../CustomComponents/headerSection';

export default function ServicesHome() {
  return (
    <div>
      <Helmet>
        <title>Our Services | Lambert & Wright</title>
        <meta 
          name="description" 
          content="Discover the range of services offered by Lambert & Wright. From architectural planning to full project management, our experienced team is here to help you with your renovation and building needs." 
        />
      </Helmet>
      <HeaderSection 
        image='images/projectVI/bumblebee-cottage-main-street-burton-overy-2-66a36f244d8b4.webp' 
        title="Services" 
      />
      <ServicesHead />
      <ServicesSection />
    </div>
  );
}
