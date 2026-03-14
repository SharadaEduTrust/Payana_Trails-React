import React from "react";
import CreamBtn from "../buttons/CreamBtn";

const EOTCard = ({ imgSrc, title, btnText = "Explore" }) => {
  return (
    <div className="group w-full max-w-sm p-4 bg-slate-50 rounded-[2.5rem] border-[3px] border-[#4A3B2A] transition-all duration-500 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
      {/* Image Section */}
      <div className="relative mb-6">
        <div className="absolute top-6 inset-x-4 h-full bg-[#E8E2D5] blur-2xl rounded-3xl opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 group-hover:translate-y-2"></div>

        {/* Floating Image Container */}
        <div className="relative z-10 overflow-hidden rounded-4xl border-[6px] border-white shadow-lg transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-1">
          <img
            src={
              imgSrc ||
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
            }
            alt={title || "Styled image"}
            className="w-full h-64 object-cover scale-105 transition-transform duration-700 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-[#4A3B2A]/5 mix-blend-overlay"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 pb-4 flex flex-col items-center text-center">
        <h3 className="text-xl font-bold text-[#4A3B2A] mb-5 leading-tight line-clamp-2">
          {title}
        </h3>

        <CreamBtn
          text={
            <span className="flex items-center gap-2">
              {btnText}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
          }
          className="group/btn shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          onClick={() => console.log("Card button clicked!")}
        />
      </div>
    </div>
  );
};

export default EOTCard;
