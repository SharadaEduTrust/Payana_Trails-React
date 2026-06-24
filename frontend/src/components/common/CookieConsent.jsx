import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [hasConsented, setHasConsented] = useState(true); // Default to true to prevent flash

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    
    if (consent) {
      setHasConsented(true);
      if (consent === 'accepted') {
        loadGoogleAnalytics();
      }
      return;
    }

    setHasConsented(false);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBanner(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Show on scroll
    window.addEventListener('scroll', handleScroll);

    // Or show after a 3 second delay if they don't scroll
    const timer = setTimeout(() => {
      setShowBanner(true);
      window.removeEventListener('scroll', handleScroll);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const loadGoogleAnalytics = () => {
    // Prevent multiple injections
    if (document.getElementById('ga-script')) return;

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-C8YJX05D1S';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    // Important: call gtag as a global function 
    window.gtag = window.gtag || gtag;
    window.gtag('js', new Date());
    window.gtag('config', 'G-C8YJX05D1S');
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    loadGoogleAnalytics();
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (hasConsented) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div 
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 bg-[#F3EFE9] border-t border-[#4A3B2A]/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 font-sans"
        >
          <div className="text-[#4A3B2A] text-sm md:text-base max-w-4xl text-center md:text-left">
            We use cookies to improve your experience and analyze website traffic. 
            By clicking "Accept", you agree to our use of cookies. Read our{" "}
            <Link to="/privacy-policy" className="underline font-medium hover:text-[#4A3B2A]/70">
              Privacy Policy
            </Link>{" "}
            to learn more.
          </div>
          <div className="flex items-center justify-center gap-3 w-full md:w-auto">
            <button 
              onClick={handleReject}
              className="flex-1 md:flex-none px-6 py-2.5 border-2 border-[#4A3B2A] text-[#4A3B2A] rounded-full hover:bg-[#4A3B2A]/5 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
            >
              Reject
            </button>
            <button 
              onClick={handleAccept}
              className="flex-1 md:flex-none px-6 py-2.5 bg-[#4A3B2A] text-[#F3EFE9] rounded-full hover:bg-[#4A3B2A]/90 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
