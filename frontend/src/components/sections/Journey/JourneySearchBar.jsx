import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

const JourneySearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full flex justify-center -mt-8 mb-12 relative z-20 px-4 sm:px-0">
      <div className="bg-white/90 backdrop-blur-xl p-1.5 sm:p-2 rounded-2xl sm:rounded-full shadow-[0_8px_30px_rgba(74,59,42,0.1)] border border-white flex flex-col sm:flex-row items-center w-full max-w-2xl transition-all duration-300">
        
        {/* Search Input Section */}
        <div className="flex items-center w-full bg-transparent rounded-xl sm:rounded-full px-4 py-2 sm:py-2.5 relative group focus-within:bg-[#F8F6F3]/50 transition-colors">
          <Search className="h-5 w-5 text-[#4A3B2A]/40 shrink-0 group-focus-within:text-[#4A3B2A] transition-colors" />
          <input
            type="text"
            placeholder="Where do you want to explore next?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none focus:ring-0 focus:outline-none ml-3 text-[#4A3B2A] placeholder-[#4A3B2A]/40 text-[14px] sm:text-[15px] font-medium"
          />
        </div>

        {/* Refined Search Button */}
        <button 
          className="group w-full sm:w-auto mt-2 sm:mt-0 bg-[#4A3B2A] text-[#F3EFE9] px-7 py-2 sm:py-2.5 rounded-xl sm:rounded-full font-semibold text-sm tracking-wide hover:bg-[#3A2C1C] hover:-translate-y-px hover:shadow-[0_8px_16px_rgba(74,59,42,0.15)] active:translate-y-0 active:shadow-sm transition-all duration-300 ease-in-out shrink-0 flex items-center justify-center gap-2"
        >
          <span>Search</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default JourneySearchBar;
