import React from "react";
import CreamBtn from "../buttons/CreamBtn";

const MainFeaturedCard = ({ image, title, desc, btnText = "View Journey" }) => {
  return (
    <div className="bg-[#4A3B2A] rounded-[32px] p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10 w-full max-w-[1200px] mx-auto shadow-xl">
      {/* 1. Image Section */}
      <div className="w-full lg:w-[55%] shrink-0 h-[300px] sm:h-[400px] lg:h-[450px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover border-[8px] border-[#F3EFE9] rounded-[24px] shadow-sm"
        />
      </div>

      {/* 2. Text Content Section */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center py-2 lg:py-4">
        {/* Title */}
        <h2 className="text-[#F3EFE9] text-[28px] sm:text-[32px] lg:text-[40px] font-bold mb-4 leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-[#F3EFE9] text-[15px] sm:text-[16px] lg:text-[18px] italic leading-relaxed mb-8 opacity-90">
          {desc}
        </p>

        {/* Action Button */}
        <div className="mt-auto lg:mt-0">
          <CreamBtn
            text={btnText}
            className="w-fit px-8 py-3 sm:py-3.5 text-[18px] sm:text-[20px] shadow-md hover:shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MainFeaturedCard;
