import React from 'react';
import AboutHead from '../PageComponents/AboutHead';
import WhyJLR from '../PageComponents/whyJLR';
import MeetTeam from '../PageComponents/MeetTeam';
import HeaderSection from '../CustomComponents/headerSection';

const About = () => {
  return (
    <div>
      <HeaderSection
          image='images/project4/w1.jpg'
          title="About"
      />
      <AboutHead />
      <WhyJLR />
      <MeetTeam/>
    </div>
  );
};

export default About;