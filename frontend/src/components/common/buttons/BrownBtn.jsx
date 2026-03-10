import React from "react";

const BrownBtn = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#4A3B2A] text-[#F3EFE9] hover:bg-[#3a2e20] font-semibold text-lg py-1.5 px-6 rounded-full transition-colors duration-200 cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default BrownBtn;
