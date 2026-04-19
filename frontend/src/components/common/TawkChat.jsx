import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMessage } from "react-icons/fa6";

const TawkChat = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. Initialize Tawk_API
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // 2. Load Tawk.to Script (only if not already loaded)
    const existingScript = document.querySelector('script[src*="embed.tawk.to"]');
    if (!existingScript) {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6986ba72fcf37c1c39799025/1jgr4gki3";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    } else {
      // If already loaded, set isLoaded to true so the button shows up
      setIsLoaded(true);
      // Ensure it starts hidden on re-mount
      if (window.Tawk_API && typeof window.Tawk_API.hideWidget === "function") {
        window.Tawk_API.hideWidget();
      }
    }

    // 3. Configure Tawk.to behavior
    window.Tawk_API.onLoad = function () {
      setIsLoaded(true);
      window.Tawk_API.hideWidget();
    };

    window.Tawk_API.onChatMaximized = function () {
      // Keep it visible when maximized
    };

    window.Tawk_API.onChatMinimized = function () {
      window.Tawk_API.hideWidget();
    };

    return () => {
      // 4. Hide the widget when leaving the Connect page
      if (window.Tawk_API && typeof window.Tawk_API.hideWidget === "function") {
        window.Tawk_API.hideWidget();
      }
    };
  }, []);

  const handleToggleChat = () => {
    if (window.Tawk_API && isLoaded) {
      if (window.Tawk_API.isChatMaximized()) {
        window.Tawk_API.minimize();
      } else {
        window.Tawk_API.showWidget();
        window.Tawk_API.maximize();
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleToggleChat}
          className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[#4A3B2A] rounded-full flex items-center justify-center shadow-2xl cursor-pointer border-2 border-[#F3EFE9]/20 group"
          aria-label="Chat with us"
        >
          {/* Subtle Pulse Effect */}
          <span className="absolute inset-0 rounded-full bg-[#4A3B2A] animate-ping opacity-20 group-hover:hidden"></span>
          
          <FaMessage className="text-[#F3EFE9] text-xl transition-transform group-hover:rotate-12" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 px-3 py-1 bg-[#4A3B2A] text-[#F3EFE9] text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg border border-white/10 uppercase tracking-widest font-serif font-bold">
            Chat with us
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default TawkChat;
