import React from 'react';
import AboutHead from '../PageComponents/AboutComponents/AboutHead';
import WhyJLR from '../PageComponents/AboutComponents/whyJLR';
import MeetTeam from '../PageComponents/AboutComponents/MeetTeam';
import HeaderSection from '../CustomComponents/headerSection';

const About = () => {
  return (
    <div>
      <HeaderSection
          image='images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-7.jpg'
          title="About"
      />
      <AboutHead />
      <WhyJLR />
      <MeetTeam/>
    </div>
  );
};

export default About;