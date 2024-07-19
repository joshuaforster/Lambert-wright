import React from 'react';
import AboutHead from '../PageComponents/AboutHead';
import WhyJLR from '../PageComponents/whyJLR';
import MeetTeam from '../PageComponents/MeetTeam';
import HeaderSection from '../CustomComponents/headerSection';

const About = () => {
  return (
    <div>
      <HeaderSection
          image='images/project1/Courtyard-1536x1021.jpg'
          title="About"
      />
      <AboutHead />
      <WhyJLR />
      <MeetTeam/>
    </div>
  );
};

export default About;