import React from 'react';
import { Helmet } from 'react-helmet';
import AboutHead from '../PageComponents/AboutComponents/AboutHead';
import WhyJLR from '../PageComponents/AboutComponents/whyJLR';
import MeetTeam from '../PageComponents/AboutComponents/MeetTeam';
import HeaderSection from '../CustomComponents/headerSection';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About - Lambert & Wright</title>
        <meta name="description" content="Learn more about Lambert & Wright, our story, and our award-winning expertise in property builds and renovations. Meet our dedicated team and discover why homeowners trust us to transform their houses into dream homes." />
      </Helmet>
      <HeaderSection
          image='images/projectVI/bumblebee-cottage-main-street-burton-overy-7-66a36f4a25cce.webp'
          title="About"
      />
      <AboutHead />
      <WhyJLR />
      <MeetTeam/>
    </div>
  );
};

export default About;
