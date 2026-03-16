import React from "react";
import {
  LuLuggage,
  LuMapPin,
  LuBuilding,
  LuMap,
  LuCar,
  LuConciergeBell,
  LuTicket,
} from "react-icons/lu";

const EOTCard = ({
  imgSrc,
  title = "Vietnam Mosaic – From Delta to the Bay",
  category = "Small Group Adventures / Couple & Family Escapes",
  location = "India",
  duration = "7D - 6N",
}) => {
  return (
    <div className="group w-full max-w-[400px] p-4 bg-gradient-to-bl from-[#E3D5C4] to-[#F3EFE9] border-[3px] border-[#4A3B2A] rounded-[2.5rem] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-sans">
      {/* Image Section */}
      <div className="relative w-full h-[260px] rounded-3xl overflow-hidden mb-5 shadow-sm">
        <img
          src={
            imgSrc ||
            "https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=1000&auto=format&fit=crop"
          }
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Top Left Badge */}
        <div className="absolute top-4 left-4 bg-[#4A3B2A] text-[#F3EFE9] px-4 py-1.5 rounded-xl text-sm font-semibold tracking-wide shadow-md">
          Best Seller
        </div>

        {/* Bottom Category Overlay */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[92%] bg-[#F3EFE9]/95 backdrop-blur-sm text-[#4A3B2A] py-2.5 px-3 rounded-[14px] flex items-center justify-center gap-2 shadow-md">
          <LuLuggage className="w-4 h-4 shrink-0" />
          <span className="text-xs sm:text-[13px] font-bold truncate">
            {category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-2 pb-1 flex flex-col gap-5">
        {/* Title */}
        <h3 className="text-[22px] font-bold text-[#4A3B2A] leading-[1.3] line-clamp-2">
          {title}
        </h3>

        {/* Location & Duration */}
        <div className="flex justify-between items-center text-[#4A3B2A]">
          <div className="flex items-center gap-1.5">
            <LuMapPin className="w-5 h-5" strokeWidth="2.5" />
            <span className="text-lg font-semibold">{location}</span>
          </div>

          <div className="px-4 py-1 rounded-full border-2 border-[#4A3B2A]/20 text-[#4A3B2A] text-sm font-bold tracking-wide bg-white/30">
            {duration}
          </div>
        </div>

        {/* Divider: Package Includes */}
        <div className="flex items-center gap-2 text-[#4A3B2A]/50 w-full mt-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#4A3B2A]/20 shrink-0"></div>
          <div className="flex-1 h-[2px] bg-[#4A3B2A]/10"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#4A3B2A]/20 shrink-0"></div>

          <span className="text-[13px] font-semibold uppercase tracking-wider px-1">
            Package Includes
          </span>

          <div className="w-1.5 h-1.5 rounded-full bg-[#4A3B2A]/20 shrink-0"></div>
          <div className="flex-1 h-[2px] bg-[#4A3B2A]/10"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#4A3B2A]/20 shrink-0"></div>
        </div>

        {/* Icons */}
        <div className="bg-white rounded-2xl p-4 flex justify-between items-center shadow-sm border border-[#4A3B2A]/5">
          <LuBuilding className="w-6 h-6 text-[#4A3B2A]" />
          <LuMap className="w-6 h-6 text-[#4A3B2A]" />
          <LuCar className="w-6 h-6 text-[#4A3B2A]" />
          <LuConciergeBell className="w-6 h-6 text-[#4A3B2A]" />
          <LuTicket className="w-6 h-6 text-[#4A3B2A]" />
        </div>
      </div>
    </div>
  );
};

export default EOTCard;
