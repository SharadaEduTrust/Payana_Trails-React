import React from "react";
import CommonHero from "../../common/CommonHero";
import heritageImg from "../../../assets/Home/Whatwedo/unesco.webp";

const Heritage = () => {
  return (
    <div className="bg-[#F3EFE9] min-h-screen">
      <CommonHero
        title="Explore Our Heritage Trails"
        description="Discover the stories, architecture and legacies that have shaped civilisations across time."
        bgImage={heritageImg}
        breadcrumbs={[
          { label: "HOME", path: "/" },
          { label: "JOURNEY", path: "/journeys" },
          { label: "HERITAGE" },
        ]}
      />
      {/* Rest of the Heritage page content */}
    </div>
  );
};

export default Heritage;
