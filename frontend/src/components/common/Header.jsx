import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import BrownBtn from "./buttons/BrownBtn";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Payana Way", path: "/payana-way" },
    { name: "Stories", path: "/stories" },
    { name: "Connect", path: "/connect" },
  ];

  const textShadowClass =
    !isScrolled && !isMenuOpen
      ? "[text-shadow:0_2px_15px_rgba(255,255,255,0.9)]"
      : "";

  return (
    // CHANGED: "fixed" to "sticky", and added "|| isMenuOpen" to the background logic
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 py-2 ${
        isScrolled || isMenuOpen ? "bg-[#F3EFE9] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-4 lg:gap-8">
          <Link
            to="/"
            className="flex items-center gap-0.5 sm:gap-1.5 shrink-0"
            onClick={handleNavClick}
          >
            <img
              src={logo}
              alt="Payana Trails Logo"
              className="h-10 w-auto sm:h-12 lg:h-14 object-contain"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/150x70/ffffff/4A3B2A?text=Logo";
                e.currentTarget.onerror = null;
              }}
            />
            <span
              className={`text-[#4A3B2A] text-md sm:text-md lg:text-xl font-serif italic font-semibold whitespace-nowrap transition-all duration-300 ${textShadowClass}`}
            >
              Payana Trails
            </span>
          </Link>

          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div
              className={`flex items-center text-[#4A3B2A] font-semibold text-[16px] xl:text-[18px] 2xl:text-[20px] transition-all duration-300 ${textShadowClass}`}
            >
              {navItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className="hover:opacity-80 transition-opacity whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                  {index < navItems.length - 1 && (
                    <span className="mx-3 xl:mx-5 font-medium select-none text-[#4A3B2A]">
                      |
                    </span>
                  )}
                </div>
              ))}
            </div>
          </nav>

          <div className="hidden lg:flex shrink-0">
            <Link to="/signup" onClick={handleNavClick}>
              <BrownBtn text="Sign Up" />
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#4A3B2A] p-2 hover:bg-[#E8E2D5] rounded-lg transition-colors focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:w-7 sm:h-7"
            >
              {isMenuOpen ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#F3EFE9] border-t border-[#4A3B2A]/20 shadow-inner ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-[#4A3B2A] text-lg font-bold hover:bg-[#E8E2D5] px-4 py-3 rounded-xl transition-all active:scale-95"
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-6">
              <Link
                to="/signup"
                className="block w-full"
                onClick={handleNavClick}
              >
                <BrownBtn text="Sign Up" className="w-full text-center block" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
