import React from "react";
import CommonHero from "../../common/CommonHero";
import destinationsImg from "../../../assets/Home/hero/Desktop/11.Floating_Market_Thailand.webp";

const Destinations = () => {
  return (
    <div className="bg-[#F3EFE9] min-h-screen">
      <CommonHero
        title="OUR DESTINATIONS"
        description="Explore the World."
        bgImage={destinationsImg}
        breadcrumbs={[
          { label: "HOME", path: "/" },
          { label: "JOURNEY", path: "/journeys" },
          { label: "DESTINATIONS" },
        ]}
      />
      {/* Rest of the Heritage page content */}
    </div>
  );
};

export default Destinations;
