import React from "react";
import wildlifeImg from "../../../assets/Home/Whatwedo/wildlife.webp";
import unescoImg from "../../../assets/Home/Whatwedo/unesco.webp";
import culturalImg from "../../../assets/Home/Whatwedo/cultural.webp";
import WWD from "../../common/cards/WWD";

const Whatwedo = () => {
  const services = [
    {
      id: 1,
      title: "Wildlife Trails",
      imgSrc: wildlifeImg,
    },
    {
      id: 2,
      title: "UNESCO World Heritage Trails",
      imgSrc: unescoImg,
    },
    {
      id: 3,
      title: "Cultural & Living Heritage Trails",
      imgSrc: culturalImg,
    },
  ];

  return (
    <section className="bg-[#F3EFE9] w-full py-16 sm:py-20 lg:py-24">
      {/* Main Container */}
      <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-[#4A3B2A] text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-wide">
          What We Do
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-1 justify-items-center">
          {services.map((service) => (
            <WWD
              key={service.id}
              title={service.title}
              imgSrc={service.imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;
