import React, { useState, useEffect } from "react";
import CommonHero from "../../common/CommonHero";
import heritageImg from "../../../assets/Journey/Heritage_Main.webp";
import EOTCard from "../../common/cards/EOTCard";
import { Search } from "lucide-react";
import { api, IMAGE_BASE_URL } from "../../../services/api";

const Heritage = () => {
  const [trails, setTrails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchTrails = async () => {
      try {
        const data = await api.getTrails();
        
        // Filter only heritage trails
        const heritageTrails = data.filter(trail => trail.trailTheme === "Heritage");
        setTrails(heritageTrails);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching heritage trails:", err);
        setError("Failed to load trails. Please try again later.");
        setLoading(false);
      }
    };

    fetchTrails();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      day: "2-digit", 
      month: "short", 
      year: "numeric" 
    });
  };

  const filteredTrails = trails.filter(trail => 
    trail.trailName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trail.trailDestination?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#F3EFE9] min-h-screen font-['Lato',sans-serif]">
      <CommonHero
        title="Explore Our Heritage Trails"
        description="Discover the stories, architecture and legacies that have shaped civilisations across time."
        bgImage={heritageImg}
        breadcrumbs={[
          { label: "HOME", path: "/" },
          { label: "JOURNEY", path: "/journeys" },
          { label: "HERITAGE" },
        ]}
      />
      
      <div className="max-w-7xl mx-auto pt-2 pb-16 px-6 md:px-12">
        {/* Premium Floating Search Bar */}
        {!loading && !error && (
          <div className="w-full flex justify-center -mt-10 mb-16 relative z-20 px-2 sm:px-0">
            <div className="bg-white/90 backdrop-blur-xl p-2.5 sm:p-3 rounded-2xl sm:rounded-full shadow-[0_12px_40px_rgba(74,59,42,0.12)] border border-white flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full max-w-4xl transition-all duration-300">
              
              {/* Left Input Section */}
              <div className="flex items-center w-full sm:w-[65%] bg-[#F8F6F3] rounded-xl sm:rounded-full px-5 py-3.5 sm:py-4 relative group transition-colors focus-within:bg-white focus-within:ring-2 focus-within:ring-[#4A3B2A]/20 focus-within:shadow-sm">
                <Search className="h-5 w-5 text-[#4A3B2A]/40 shrink-0 group-focus-within:text-[#4A3B2A] transition-colors" />
                <input
                  type="text"
                  placeholder="Where do you want to explore next?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none focus:ring-0 focus:outline-none ml-3.5 text-[#4A3B2A] placeholder-[#4A3B2A]/40 text-[15px] sm:text-[16px] font-medium"
                />
              </div>

              {/* Right Result Badge & Info */}
              <div className="w-full sm:w-[35%] flex justify-between items-center px-4 py-2 sm:py-0">
                <div className="flex flex-col justify-center">
                  <span className="text-[11px] text-[#4A3B2A]/50 font-bold tracking-[0.15em] uppercase mb-0.5">Results Found</span>
                  <span className="text-[#4A3B2A] font-extrabold text-xl leading-none">
                    {filteredTrails.length} <span className="font-semibold text-base text-[#4A3B2A]/70">Trails</span>
                  </span>
                </div>
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#4A3B2A]/5 flex items-center justify-center border border-[#4A3B2A]/10 mix-blend-multiply transition-transform hover:scale-105">
                  <div className="h-2 w-2 rounded-full bg-[#4A3B2A]/40 animate-pulse"></div>
                </div>
              </div>

            </div>
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4A3B2A]"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 py-10 font-bold">
            {error}
          </div>
        )}

        {!loading && !error && filteredTrails.length === 0 && trails.length > 0 && (
          <div className="text-center text-[#4A3B2A]/70 py-10 text-lg">
            No trails match your search criteria.
          </div>
        )}

        {!loading && !error && trails.length === 0 && (
          <div className="text-center text-[#4A3B2A]/70 py-10 text-lg">
            No heritage trails available at the moment.
          </div>
        )}

        {!loading && !error && filteredTrails.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
            {filteredTrails.map((trail) => (
              <EOTCard
                key={trail._id}
                title={trail.trailName}
                description={trail.trailSubTitle}
                location={trail.trailDestination}
                duration={trail.duration}
                date={formatDate(trail.journeyDate)}
                trail={trail.trailRoute}
                imgSrc={trail.heroImage ? `${IMAGE_BASE_URL}${trail.heroImage}` : null}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Heritage;
