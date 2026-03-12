import React from "react";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import logoImg from "../../assets/logo.png";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Payana Way", path: "/payana-way" },
    { name: "Stories", path: "/stories" },
    { name: "Connect", path: "/connect" },
  ];

  // Social media icon
  const socialLinks = [
    {
      name: "YouTube",
      icon: <FaYoutube className="text-[#FF0000]" size={22} />,
      href: "#",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-[#E1306C]" size={22} />,
      href: "#",
    },
    {
      name: "X",
      icon: <FaXTwitter className="text-black" size={20} />,
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="text-[#0A66C2]" size={22} />,
      href: "#",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-[#25D366]" size={22} />,
      href: "#",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4A3B2A] w-full pt-12 pb-8">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        {/* === TOP SECTION === */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img
                src={logoImg}
                alt="Payana Trails"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
              />
              <span className="text-[#F3EFE9] text-3xl sm:text-4xl italic tracking-wide font-serif">
                Payana Trails
              </span>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-[#F3EFE9] rounded-[10px] flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:items-end text-[#F3EFE9] gap-2 text-left md:text-right">
            <h3 className="font-bold text-[20px] sm:text-[22px] tracking-wide mb-1">
              Journeys, thoughtfully curated!
            </h3>
            <a
              href="mailto:info@payanatrails.com"
              className="text-[16px] sm:text-[18px] underline hover:text-white transition-colors"
            >
              info@payanatrails.com
            </a>
            <a
              href="tel:+910000000000"
              className="text-[16px] sm:text-[18px] italic hover:text-white transition-colors tracking-widest"
            >
              +91 0000000000
            </a>
          </div>
        </div>

        {/* === DIVIDER === */}
        <hr className="border-[#F3EFE9] opacity-40 my-8 sm:my-10" />

        {/* === BOTTOM SECTION === */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[#F3EFE9] text-[15px] sm:text-[16px]">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-semibold tracking-wide">
            {navLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link
                  to={link.path}
                  className="hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.name}
                </Link>

                {index < navLinks.length - 1 && (
                  <span className="opacity-80 font-normal select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="font-semibold tracking-wide text-center md:text-right">
            © {currentYear} Payana Trails. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
