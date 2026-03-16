import React from "react";
import wildlifeImg from "../../../assets/Home/Whatwedo/wildlife.webp";
import unescoImg from "../../../assets/Home/Whatwedo/unesco.webp";
import culturalImg from "../../../assets/Home/Whatwedo/cultural.webp";
import EOTCard from "../../common/cards/EOTCard";
import BrownBtn from "../../common/buttons/BrownBtn";

const ExploreOurTrails = () => {
  const services = [
    {
      id: 1,
      title: "Wildlife Trails",
      imgSrc: wildlifeImg,
    },
    {
      id: 2,
      title: "Heritage Trails",
      imgSrc: unescoImg,
    },
    {
      id: 3,
      title: "Cultural & Immersive Trails",
      imgSrc: culturalImg,
    },
  ];

  return (
    <section className="bg-[#F3EFE9] w-full py-16 sm:py-20 lg:py-24">
      {/* Main Container */}
      <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-[#4A3B2A] text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-wide">
          Explore Our Trails
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 justify-items-center">
          {services.map((service) => (
            <EOTCard
              key={service.id}
              title={service.title}
              imgSrc={service.imgSrc}
            />
          ))}
        </div>

        {/* CTA Button Wrapper */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <BrownBtn
            text={
              <span className="flex items-center justify-center gap-2">
                View All Trails
                {/* Tailwind styled SVG Arrow */}
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
            }
            onClick={() => console.log("Navigate to trails page")}
            // Group class added for the arrow hover effect, plus padding/text size for height/width
            className="group px-8 py-4 sm:px-10 sm:py-4 text-lg font-semibold min-w-[240px] shadow-md hover:shadow-lg transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreOurTrails;
