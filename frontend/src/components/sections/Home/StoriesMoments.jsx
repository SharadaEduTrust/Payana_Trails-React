import React from "react";
import CreamBtn from "../../common/buttons/CreamBtn";
import storyImg from "../../../assets/Home/Stories/stories-moments.avif";

const StoriesMoments = () => {
  return (
    <section className="bg-[#F3EFE9] w-full py-16 sm:py-20 lg:py-16">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Container */}
        <div className="relative w-full h-100 sm:h-112.5 lg:h-125 rounded-4xl overflow-hidden shadow-xl group">
          {/* 1. Background Image */}
          <img
            src={storyImg}
            alt="Quiet travel moments"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
          />

          {/* 2. Uniform Overlay */}
          <div className="absolute inset-0 bg-[#c9bebd]/20 transition-opacity duration-300"></div>

          {/* 3. Quote Text */}
          <div className="absolute top-8 sm:top-12 lg:top-14 left-0 right-0 flex justify-center px-6 z-10">
            <h2 className="text-[#4A3B2A] text-[18px] sm:text-[22px] lg:text-[26px] font-sans italic font-semibold leading-relaxed tracking-wide text-center">
              "Travel isn't about checking places off a list. It's about the{" "}
              <br className="hidden sm:block" /> quiet moments you never
              expected."
            </h2>
          </div>

          {/* 4. Action Button */}
          <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 z-10">
            <CreamBtn
              text="Read Our Stories &rarr;"
              className="px-6 py-3 sm:px-8 sm:py-3.5 text-[15px] sm:text-[16px] shadow-lg hover:shadow-xl font-bold"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesMoments;