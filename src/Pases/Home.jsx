import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OerPolicy from "../components/OerPolicy";
import NewslatterBox from "../components/NewslatterBox";

const Home = () => {
  return <div>
    <Hero />
    <LatestCollection />
    <BestSeller />
    <OerPolicy />
    <NewslatterBox />
  </div>;
};

export default Home;
