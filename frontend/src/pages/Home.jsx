import React from "react";
import Hero from "../components/sections/Home/Hero";
import ExploreOurTrails from "../components/sections/Home/ExploreOurTrails";
import SignatureTrails from "../components/sections/Home/SignatureTrails";
import PayanaWay from "../components/sections/Home/PayanaWay";
import StoriesMoments from "../components/sections/Home/StoriesMoments";
import ClosingInvitation from "../components/sections/Home/ClosingInvitation";

const Home = () => {
  return (
    <div>
      <Hero />
      <ExploreOurTrails />
      <SignatureTrails />
      <PayanaWay />
      <StoriesMoments />
      <ClosingInvitation />
    </div>
  );
};

export default Home;
