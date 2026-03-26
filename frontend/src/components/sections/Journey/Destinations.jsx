import React from "react";
import CommonHero from "../../common/CommonHero";
import destinationsImg from "../../../assets/Journey/Destination_Main.webp";

const Destinations = () => {
  return (
    <div className="bg-[#F3EFE9] min-h-screen">
      <CommonHero
        title="OUR DESTINATIONS"
        description="The world is full of wonders waiting to be explored. Our handpicked destinations offer a gateway to extraordinary experiences."
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
