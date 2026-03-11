import React, { useRef } from "react";
import elephantImg from "../../../assets/Home/FeaturedJourney/elephant.webp";
import pyramidImg from "../../../assets/Home/FeaturedJourney/pyramid.webp";
import leopardImg from "../../../assets/Home/FeaturedJourney/leopard.webp";
import islandImg from "../../../assets/Home/FeaturedJourney/island.webp";
import MainFeaturedCard from "../../common/cards/MainFeaturedCard";
import FeaturedCard from "../../common/cards/FeaturedCard";

const FeaturedJourney = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  const subJourneys = [
    {
      id: 1,
      title: "Journey Title",
      desc: "Describe this journey in one line. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      imgSrc: pyramidImg,
    },
    {
      id: 2,
      title: "Journey Title",
      desc: "Describe this journey in one line. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      imgSrc: leopardImg,
    },
    {
      id: 3,
      title: "Journey Title",
      desc: "Describe this journey in one line. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      imgSrc: islandImg,
    },
  ];

  return (
    <section className="bg-[#F3EFE9] w-full py-16 sm:py-20 lg:py-2">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-[#4A3B2A] text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-wide">
          Featured Journeys
        </h2>

        {/* 1. Top Section: Main Featured Card */}
        <div className="mb-16 sm:mb-20">
          <MainFeaturedCard
            title="Journey Title"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={elephantImg}
          />
        </div>

        {/* 2. Bottom Section */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow Button */}
          <button
            onClick={slideLeft}
            className="absolute left-0 lg:-left-6 z-10 bg-[#4A3B2A] hover:bg-[#3a2e20] text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
            aria-label="Scroll left"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable Container for Featured Cards */}
          <div
            ref={sliderRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth w-max max-w-full px-12 sm:px-16 lg:px-8 py-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {subJourneys.map((journey) => (
              <div
                key={journey.id}
                className="snap-center shrink-0 w-full sm:w-[340px]"
              >
                <FeaturedCard
                  title={journey.title}
                  desc={journey.desc}
                  imgSrc={journey.imgSrc}
                />
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={slideRight}
            className="absolute right-0 lg:-right-6 z-10 bg-[#4A3B2A] hover:bg-[#3a2e20] text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
            aria-label="Scroll right"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJourney;
