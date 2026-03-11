import React from "react";
import Hero from "../components/sections/Home/Hero";
import Whatwedo from "../components/sections/Home/Whatwedo";
import FeaturedJourney from "../components/sections/Home/FeaturedJourney";

const Home = () => {
  return (
    <div>
      <Hero />
      <Whatwedo />
      <FeaturedJourney />
    </div>
  );
};

export default Home;
