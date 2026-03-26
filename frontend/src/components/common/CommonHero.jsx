import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

const CommonHero = ({ title, description, bgImage, breadcrumbs }) => {
  const navigate = useNavigate();

  // 1. The Master Orchestrator: This now wraps the ENTIRE component
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // The perfectly synced delay between each element
        delayChildren: 0.1, // Initial pause before the sequence starts
      },
    },
  };

  // 2. The Individual Item Animation
  const fadeUpItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Extracted button to keep code clean
  const renderBackButton = () => (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-[#F3EFE9] text-xs md:text-sm tracking-widest uppercase opacity-90 hover:opacity-100 transition-all duration-300 bg-[#4A3B2A]/60 hover:bg-[#4A3B2A]/90 px-5 py-2.5 rounded-full border border-[#F3EFE9]/30 backdrop-blur-md shadow-lg group"
    >
      <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
      <span>Go Back</span>
    </button>
  );

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative w-full h-[60vh] md:h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[#4A3B2A]/60 via-[#4A3B2A]/20 to-[#4A3B2A]/60"></div>

      {/* Top Left Controls: Back Button (Desktop Only) */}
      <motion.div
        variants={fadeUpItem} // Now perfectly synced in the queue
        className="hidden md:block absolute top-24 left-6 md:top-32 md:left-12 z-10"
      >
        {renderBackButton()}
      </motion.div>

      {/* Main text content */}
      <div className="relative z-10 flex flex-col items-center px-4 max-w-5xl mx-auto mt-12 md:mt-16 text-[#F3EFE9]">
        {title && (
          <motion.h1
            variants={fadeUpItem}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-4 md:mb-6 uppercase tracking-wider drop-shadow-xl"
          >
            {title}
          </motion.h1>
        )}

        {description && (
          <motion.p
            variants={fadeUpItem}
            className="text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-3xl drop-shadow-lg text-[#F3EFE9]"
          >
            {description}
          </motion.p>
        )}

        {/* Shifted & Styled Breadcrumbs (Pill Design) */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            variants={fadeUpItem}
            className="mt-8 flex items-center space-x-2 bg-[#4A3B2A]/80 backdrop-blur-md border border-[#F3EFE9]/30 rounded-full px-6 py-2.5 text-[#F3EFE9] text-sm md:text-base font-semibold shadow-xl hover:bg-[#4A3B2A]/95 transition-all duration-300"
          >
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {crumb.path ? (
                  <Link
                    to={crumb.path}
                    className="hover:text-white hover:underline underline-offset-4 decoration-[#F3EFE9]/50 transition-all duration-300 drop-shadow-sm"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="opacity-100 tracking-wide drop-shadow-sm">
                    {crumb.label}
                  </span>
                )}

                {/* The >> divider */}
                {index < breadcrumbs.length - 1 && (
                  <span className="opacity-70 text-xs font-bold tracking-tighter mx-1 drop-shadow-sm">
                    &gt;&gt;
                  </span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        {/* Go Back Button (Mobile Only - Centered Under Breadcrumbs) */}
        <motion.div
          variants={fadeUpItem} // Also perfectly synced for smaller screens
          className="md:hidden mt-8 flex justify-center w-full"
        >
          {renderBackButton()}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CommonHero; 
