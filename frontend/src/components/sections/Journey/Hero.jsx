import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Compass, Map, Minus } from "lucide-react";
import BrownBtn from "../../common/buttons/BrownBtn";

// Updated default images to match your new object structure { desktop, mobile }
const defaultImages = [
  {
    desktop:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    mobile:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    desktop:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    mobile:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Hero({ images = defaultImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // 6 seconds per image
    return () => clearInterval(timer);
  }, [images.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="relative w-full h-screen min-h-[750px] flex items-center overflow-hidden font-sans bg-[#110C08]">
      {/* Background Image Slider */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat sm:hidden"
              style={{ backgroundImage: `url(${img.mobile})` }}
            />
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat hidden sm:block"
              style={{ backgroundImage: `url(${img.desktop})` }}
            />
          </div>
        ))}

        {/* Immersive Dark Overlays - Lightened for better image visibility */}
        <div className="absolute inset-0 bg-black/5 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/5 to-transparent hidden md:block z-10" />
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[8%] top-[18%] z-10 text-white"
      >
        <Compass className="h-32 w-32 md:h-48 md:w-48" strokeWidth={0.5} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -8, 0],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-[15%] right-[10%] z-10 text-white"
      >
        <Map className="h-36 w-36 md:h-52 md:w-52" strokeWidth={0.5} />
      </motion.div>

      {/* Main Content Wrapper */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Top Label */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-10 h-[1px] bg-[#B89474]" />
            <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E5D7C5]">
              Explore Our World
            </p>
          </motion.div>

          {/* Main Title - Reduced Size */}
          <motion.h1
            variants={itemVariants}
            className="text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[3.75rem] font-semibold leading-[1.1] font-serif text-[#FDFBF7] mb-6 drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
          >
            JOURNEYS THAT STAY,
            <br />
            <span className="text-[#D4A373]">LONG AFTER</span> YOU RETURN
          </motion.h1>

          {/* Description - Reduced Size */}
          <motion.p
            variants={itemVariants}
            className="text-[#F3EFE9] text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-xl font-light drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
          >
            Trails designed for those who value depth over distance – shaped by
            stories, places and experiences that stay with you.
          </motion.p>

          {/* Button CTA */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <BrownBtn
              text="EXPLORE YOUR JOURNEY"
              onClick={() => {
                const section = document.getElementById("our-trails");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="!px-9 !py-4.5 !rounded-full !text-[12px] !tracking-[0.2em] !font-bold transition-all duration-300 shadow-2xl hover:shadow-[#D4A373]/20 bg-[#694924] hover:bg-[#7d502a] text-white"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
