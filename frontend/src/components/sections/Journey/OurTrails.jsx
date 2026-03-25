import React from "react";
import { motion } from "framer-motion";
import { LuLandmark, LuTrees, LuUsers } from "react-icons/lu";

const TrailTypeCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay }}
      whileHover={{ y: -10 }}
      className="group relative p-8 bg-white/50 backdrop-blur-sm border border-[#4A3B2A]/10 rounded-[2rem] shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 flex flex-col items-center text-center"
    >
      {/* Icon Container */}
      <div className="mb-6 p-5 bg-[#4A3B2A] rounded-2xl text-[#F3EFE9] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
        {/* Render icon if it exists, otherwise a fallback */}
        {Icon ? (
          <Icon size={32} strokeWidth={1.5} />
        ) : (
          <div className="w-8 h-8" />
        )}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-[#4A3B2A] mb-4 font-serif">
        {title}
      </h3>

      <p className="text-[#4A3B2A]/80 leading-relaxed font-light text-lg">
        {description}
      </p>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#4A3B2A] transition-all duration-500 group-hover:w-1/3 rounded-t-full"></div>
    </motion.div>
  );
};

export default function OurTrails() {
  const trails = [
    {
      icon: LuTrees,
      title: "Wildlife Trails",
      description:
        "Safari landscapes and wildlife encounters across iconic reserves, focusing on conservation and the raw beauty of nature.",
      delay: 0.1,
    },
    {
      icon: LuLandmark,
      title: "Heritage Trails",
      description:
        "Journeys through sites of exceptional cultural significance, uncovering the architectural marvels and stories of the past.",
      delay: 0.3,
    },
    {
      icon: LuUsers,
      title: "Cultural & Immersive Trails",
      description:
        "Experience the living culture of a destination—its people, traditions, food, art, and spiritual life in an unhurried pace.",
      delay: 0.5,
    },
  ];

  return (
    <section className="w-full bg-[#F3EFE9] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[4px] text-[#4A3B2A]/60 mb-3 font-semibold">
            Explore by style
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A3B2A] font-serif">
            Our Trails
          </h2>
          <div className="w-16 h-0.5 bg-[#4A3B2A] mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {trails.map((trail, index) => (
            <TrailTypeCard
              key={index}
              icon={trail.icon}
              title={trail.title}
              description={trail.description}
              delay={trail.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
