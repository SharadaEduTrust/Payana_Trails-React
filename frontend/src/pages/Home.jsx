import React from "react";
import Hero from "../components/sections/Home/Hero";
import Whatwedo from "../components/sections/Home/Whatwedo";
import FeaturedJourney from "../components/sections/Home/FeaturedJourney";
import PayanaWay from "../components/sections/Home/PayanaWay";
import StoriesMoments from "../components/sections/Home/StoriesMoments";
import ClosingInvitation from "../components/sections/Home/ClosingInvitation";

const Home = () => {
  return (
    <div>
      <Hero />
      <Whatwedo />
      <FeaturedJourney />
      <PayanaWay />
      <StoriesMoments />
      <ClosingInvitation />
    </div>
  );
};

export default Home;
