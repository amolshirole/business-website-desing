import React from "react";
import about from "../imeges/about.svg";
import Common from "./common/Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={about}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
