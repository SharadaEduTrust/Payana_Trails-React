import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center bg-[#F3EFE9]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full"
      >
        {/* Visual Element - Using an Icon instead of an Image */}
        <div className="relative mb-8 flex justify-center">
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              y: [0, -10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#4A3B2A]/10"
          >
            <Compass size={280} strokeWidth={0.5} />
          </motion.div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-9xl font-serif italic text-[#4A3B2A]/20 select-none">404</span>
          </div>
        </div>

        {/* Text Content */}
        <motion.h1 
          className="text-5xl md:text-6xl font-serif font-semibold text-[#4A3B2A] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Lost in the Wilderness?
        </motion.h1>
        
        <motion.p 
          className="text-lg text-[#4A3B2A]/80 mb-10 max-w-md mx-auto leading-relaxed px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          It seems you've wandered off the trail. Don't worry, even the most seasoned explorers take a wrong turn sometimes.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link 
            to="/" 
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#4A3B2A] text-[#F3EFE9] rounded-full font-medium overflow-hidden transition-all hover:bg-[#68533B] active:scale-95 shadow-lg hover:shadow-[#4A3B2A]/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Return to Base Camp
            </span>
            <div className="absolute inset-0 bg-[#352a1e] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Subtle detail */}
        <motion.div 
          className="mt-20 text-[#4A3B2A]/30 text-sm font-mono tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Error Code: 404 // Trail Not Found
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
