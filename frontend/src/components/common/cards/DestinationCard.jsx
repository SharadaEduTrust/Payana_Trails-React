import React from "react";

const DestinationCard = ({ image, name }) => {
  return (
    <div className="relative w-full aspect-3/4 max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg cursor-pointer group bg-[#4A3B2A]">
      {/* Background Image with Zoom on Hover */}
      <img
        src={image}
        alt={`Landscape of ${name}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      />

      {/* Gradient Overlay using the custom #4A3B2A dark brown */}
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-80 group-hover:opacity-95"
        style={{
          background:
            "linear-gradient(to top, #4A3B2A 0%, rgba(74, 59, 42, 0.4) 50%, transparent 100%)",
        }}
      ></div>

      {/* Content Container */}
      <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end z-10">
        <h3 className="text-[#F3EFE9] text-2xl md:text-3xl font-semibold tracking-wide drop-shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          {name}
        </h3>

        {/* Subtle Decorative Underline using the custom #F3EFE9 cream color */}
        <div className="h-1 w-12 bg-[#F3EFE9] mt-2 md:mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shadow-sm"></div>
      </div>
    </div>
  );
};

export default DestinationCard;
