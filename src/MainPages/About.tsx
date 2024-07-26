import React from 'react';
import AboutHead from '../PageComponents/AboutComponents/AboutHead';
import WhyJLR from '../PageComponents/AboutComponents/whyJLR';
import MeetTeam from '../PageComponents/AboutComponents/MeetTeam';
import HeaderSection from '../CustomComponents/headerSection';

const About = () => {
  return (
    <div>
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
