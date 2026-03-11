import React from "react";
import CreamBtn from "../buttons/CreamBtn";

const WWD = ({ imgSrc, title, btnText = "Explore" }) => {
  return (
    <div className="flex flex-col bg-[#4A3B2A] rounded-[32px] p-3 gap-3 w-full max-w-[340px] mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      {/* 1. Top Section - Title */}
      <div className="bg-[#F3EFE9] rounded-t-[20px] h-[90px] sm:h-[100px] px-4 flex items-center justify-center shrink-0">
        <h3 className="text-[#4A3B2A] text-[20px] sm:text-[24px] font-bold text-center leading-tight line-clamp-2">
          {title}
        </h3>
      </div>

      {/* 2. Middle Section - Image */}
      <div className="w-full h-[240px] sm:h-[280px] overflow-hidden shrink-0">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* 3. Bottom Section - Using CreamBtn */}
      <CreamBtn
        text={btnText}
        className="w-full mt-auto !rounded-t-none !rounded-b-[20px] h-[64px] sm:h-[72px] !text-[22px] sm:!text-[24px]"
      />
    </div>
  );
};

export default WWD;
