import React from "react";
import { Hero } from "./Hero/Hero";
import { LatestCollection } from "./LatestCollection/LatestCollection";
import { BestSeller } from "./BestSeller/BestSeller";
import { OurPolicy } from "./OurPolicy/OurPolicy";
import { Newsletter } from "./Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <Newsletter />
    </>
  );
};

export default Home;
