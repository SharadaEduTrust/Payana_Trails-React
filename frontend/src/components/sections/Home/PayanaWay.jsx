import React from "react";
import wildlifeImg from "../../../assets/Home/PayanaWay/wildlife.jpg";
import CreamBtn from "../../common/buttons/CreamBtn";

const PayanaWay = () => {
  const features = [
    "Small Groups",
    "Gentle Pace",
    "Expert Curators",
    "Carefully Chosen Stays",
  ];

  return (
    <section className="bg-[#F3EFE9] w-full py-16 sm:py-20 lg:py-16">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-[#4A3B2A] text-4xl sm:text-5xl font-bold tracking-wide uppercase mb-4">
            The Payana Way
          </h2>
          <p className="text-[#4A3B2A] text-2xl sm:text-3xl font-serif italic">
            A more thoughtful way to travel
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-[#4A3B2A] rounded-4xl p-4 sm:p-6 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-xl">
          {/* 1. Image Section */}
          <div className="w-full lg:w-[40%] shrink-0">
            <img
              src={wildlifeImg}
              alt="The Payana Way"
              className="w-full h-full min-h-75 object-cover border-8 border-[#F3EFE9] rounded-3xl shadow-sm"
            />
          </div>

          {/* 2. Text Section*/}
          <div className="w-full lg:w-[60%] flex flex-col justify-center py-2 lg:py-4 text-[#F3EFE9]">
            {/* Description */}
            <p className="text-[15px] sm:text-[16px] lg:text-[18px] italic leading-relaxed mb-8 opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-[#F3EFE9] shrink-0"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                  </svg>
                  <span className="text-[16px] lg:text-[18px] font-medium opacity-95">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="flex justify-start mt-auto lg:mt-0">
              <CreamBtn
                text="Discover The Payana Way"
                className="w-fit px-8 py-3 sm:py-3.5 text-[16px] sm:text-[18px] shadow-md hover:shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayanaWay;
