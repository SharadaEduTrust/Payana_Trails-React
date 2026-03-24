import React from "react";
import EOTCard from "../../common/cards/EOTCard";

const SignatureJourneys = () => {
  // Sample data to populate the 3 cards
  const featuredJourneys = [
    {
      title: "Vietnam Mosaic",
      description:
        "A comprehensive journey through Vietnam's iconic highlights.",
      location: "Vietnam",
      duration: "7D - 6N",
      date: "Oct 12 - Oct 18",
      trail: "Siem Reap - Ho Chi Minh City - Da Nang - Hanoi",
      imgSrc:
        "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "The Great Migration Safari",
      description:
        "Witness the ultimate wildlife spectacle across the savannah.",
      location: "Kenya",
      duration: "6D - 5N",
      date: "Aug 05 - Aug 10",
      trail: "Nairobi - Maasai Mara - Lake Nakuru",
      imgSrc:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop",
    },
    {
      title: "Echoes of Antiquity",
      description:
        "Step back in time exploring ancient ruins and desert landscapes.",
      location: "Jordan",
      duration: "8D - 7N",
      date: "Nov 02 - Nov 09",
      trail: "Amman - Petra - Wadi Rum - Dead Sea",
      imgSrc:
        "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full bg-[#F3EFE9] py-20 px-6 md:px-12 lg:px-24 font-['Lato',_sans-serif]">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A3B2A] mb-6 font-serif">
          Signature Journeys
        </h2>

        {/* Divider Line matching the Hero section */}
        <div className="w-[60px] h-[2px] bg-[#4A3B2A] mb-6"></div>

        <p className="text-lg md:text-xl text-[#4A3B2A]/80 font-light leading-relaxed">
          Discover our most highly curated experiences, blending immersive
          culture, breathtaking landscapes, and unforgettable wildlife
          encounters.
        </p>
      </div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center max-w-7xl mx-auto">
        {featuredJourneys.map((journey, index) => (
          <EOTCard
            key={index}
            title={journey.title}
            description={journey.description}
            location={journey.location}
            duration={journey.duration}
            date={journey.date}
            trail={journey.trail}
            imgSrc={journey.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default SignatureJourneys;
