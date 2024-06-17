import React from "react";
import Steps from "../PageComponents/steps";
import Services from "../PageComponents/services";
import Location from "../PageComponents/Location";
import TestimonialSlider from "../PageComponents/Reviews";
import Logo from "../PageComponents/logo";
import HeroTwo from "../PageComponents/heroTwo";
import HomeGallery from "../PageComponents/homegallery";
import Assurance from "../PageComponents/Assurance";
import HomeProjects from "../PageComponents/HomeProjects";

export default function Home() {
  return (
    <>
      <HeroTwo />
      <Logo />
      <Steps />
      <Services />
      <HomeGallery />
      <Assurance />
      <HomeProjects />
      <TestimonialSlider />
    </>
  );
}