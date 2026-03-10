import React from "react";

const CreamBtn = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#F3EFE9] text-[#4A3B2A] hover:bg-[#E8E2D5] font-semibold text-lg py-1.5 px-6 rounded-full transition-colors duration-200 cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default CreamBtn;
