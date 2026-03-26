import React from "react";
import CommonHero from "../../common/CommonHero";
import wildlifeImg from "../../../assets/Home/Whatwedo/wildlife.webp";

const Wildlife = () => {
  return (
    <div className="bg-[#F3EFE9] min-h-screen">
      <CommonHero
        title="Explore Our Wildlife Trails"
        description="Where every sighting unfolds at nature’s pace, in journeys designed for depth and comfort."
        bgImage={wildlifeImg}
        breadcrumbs={[
          { label: "HOME", path: "/" },
          { label: "JOURNEY", path: "/journeys" },
          { label: "WILDLIFE" },
        ]}
      />
      {/* Rest of the Heritage page content */}
    </div>
  );
};

export default Wildlife;
