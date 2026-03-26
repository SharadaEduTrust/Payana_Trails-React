import React from "react";
import CommonHero from "../../common/CommonHero";
import culturalImg from "../../../assets/Home/Whatwedo/cultural.webp";

const Cultural = () => {
  return (
    <div className="bg-[#F3EFE9] min-h-screen">
      <CommonHero
        title="Explore Our Cultural & Immersive Trails"
        description="Meaningful encounters that connect you with the people, traditions and spirit of each destination."
        bgImage={culturalImg}
        breadcrumbs={[
          { label: "HOME", path: "/" },
          { label: "JOURNEY", path: "/journeys" },
          { label: "CULTURAL & IMMERSIVE" },
        ]}
      />
      {/* Rest of the Heritage page content */}
    </div>
  );
};

export default Cultural;
