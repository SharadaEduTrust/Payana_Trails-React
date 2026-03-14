import React from "react";
import heroBg from "../../../assets/Home/heroBg.webp";
import CreamBtn from "../../common/buttons/CreamBtn";

export default function Hero() {
  return (
    <section
      className="relative w-full h-125 sm:h-150 lg:h-187.5 bg-cover bg-center bg-no-repeat flex items-center -mt-18 sm:-mt-20"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="max-w-400 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-md sm:max-w-xl lg:max-w-2xl mb-20 sm:mb-0 pt-18 sm:pt-20">
          <h1 className="text-[#4A3B2A] text-2xl sm:text-3xl lg:text-[40px] italic font-bold leading-[1.1] mb-6 [text-shadow:0_2px_20px_rgba(255,255,255,0.9)]">
            Thoughtfully Curated Journeys for the Discerning Traveller
          </h1>

          <p className="text-white text-sm sm:text-base lg:text-lg font-bold uppercase tracking-[0.2em] mb-10 [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]">
            Wildlife &bull; Heritage &bull; Slow Travel
          </p>

          <div>
            <CreamBtn
              text="Plan Your Journey"
              className="py-3 px-10 text-[18px] sm:text-[20px] shadow-lg hover:shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
