import React from "react";
import svg from "../imeges/svg.svg";
import Common from "./common/Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={svg}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
