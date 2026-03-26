import React from "react";
import CommonHero from "../components/common/CommonHero";
// Use an appropriate image from your assets
import storiesImg from "../assets/Home/Stories/stories-moments.webp";

const Stories = () => {
  return (
    <div className="bg-[#F3EFE9] min-h-screen">
      <CommonHero
        title="STORIES"
        subtitle="TALES FROM THE TRAILS"
        bgImage={storiesImg}
        breadcrumb="HOME / STORIES"
      />
      {/* Rest of your Stories content goes here */}
    </div>
  );
};

export default Stories;
