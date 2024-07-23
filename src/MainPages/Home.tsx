import React from "react";
import Steps from "../PageComponents/HomeComponents/steps";
// import Services from "../PageComponents/services";
import TestimonialSlider from "../PageComponents/HomeComponents/Reviews";
import Logo from "../PageComponents/HomeComponents/logo";
import HeroTwo from "../PageComponents/HomeComponents/heroTwo";
import HomeGallery from "../PageComponents/HomeComponents/homegallery";
import Assurance from "../PageComponents/HomeComponents/services";
// import HomeProjects from "../PageComponents/HomeProjects";

export default function Home() {
  return (
    <>
      <HeroTwo />
      <Logo />
      <Steps />
      {/* <Services /> */}
      <HomeGallery />
      <Assurance />
      {/* <HomeProjects /> */}
      <TestimonialSlider />
    </>
  );
}
