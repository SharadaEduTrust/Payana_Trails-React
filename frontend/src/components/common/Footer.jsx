import React from "react";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa6";
import logoImg from "../../../public/logo.svg";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Payana Way", path: "/payana-way" },
    { name: "Stories", path: "/stories" },
    { name: "Connect", path: "/connect" },
  ];

  // Social media icons
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-[#25D366]" size={22} />,
      href: "#",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-black" size={20} />,
      href: "https://www.facebook.com/payanatrails/",
    },
    {
      name: "YouTube",
      icon: <FaYoutube className="text-[#FF0000]" size={22} />,
      href: "www.youtube.com/@PayanaTrails",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-[#E1306C]" size={22} />,
      href: "https://www.instagram.com/payanatrails/",
    },
  ];

  const footerMenus = [
    {
      title: "Journeys",
      links: [
        { name: "Wildlife Trails", path: "/wildlife-trails" },
        { name: "Heritage Trails", path: "/unesco-trails" },
        { name: "Immersive Trails", path: "/immersive-trails" },
        { name: "Signature Trails", path: "/signature-journeys" },
      ],
    },
    {
      title: "The Payana Way",
      links: [
        { name: "About Payana", path: "/about" },
        { name: "Our Philosophy", path: "/philosophy" },
        { name: "How We Curate", path: "/curate" },
        { name: "Responsible Travel", path: "/responsible-travel" },
        { name: "Voices from the Trail", path: "/voices" },
        { name: "Press & Media", path: "/press" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Enquiry", path: "/enquiry" },
        { name: "Contact", path: "/contact" },
        { name: "FAQs", path: "/faqs" },
        { name: "Refer a Friend", path: "/refer" },
        { name: "Gift a Journey", path: "/gift" },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4A3B2A] w-full pt-12 pb-8">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        {/* === TOP SECTION === */}
        <div className="flex flex-col xl:flex-row justify-between items-start gap-12 xl:gap-8">
          {/* Left: Brand & Socials */}
          <div className="flex flex-col gap-6 xl:w-1/4">
            <div className="flex items-center gap-4">
              <img
                src={logoImg}
                alt="Payana Trails"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
              />
              <span className="text-[#F3EFE9] text-2xl sm:text-2xl italic tracking-wide font-serif">
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

          {/* 3-Column Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 xl:w-2/4 w-full">
            {footerMenus.map((menu, index) => (
              <div key={index} className="flex flex-col text-[#F3EFE9]">
                <h4 className="font-bold text-[18px] mb-4 tracking-wide font-serif">
                  {menu.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {menu.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.path}
                        className="text-[15px] sm:text-[16px] opacity-80 hover:opacity-100 hover:text-white hover:underline transition-all"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col xl:items-end text-[#F3EFE9] gap-3 text-left xl:text-right xl:w-1/4">
            <h3 className="font-bold text-[20px] sm:text-[18px] tracking-wide mb-1 font-serif">
              Journeys, thoughtfully curated!
            </h3>

            {/* Address */}
            <address className="not-italic text-[15px] sm:text-[16px] opacity-90 leading-relaxed max-w-62.5">
              Address: 110, Sowmya Springs, Basavanagudi, <br />
              Bangalore - 560 004
            </address>

            <a
              href="mailto:info@payanatrails.com"
              className="text-[16px] sm:text-[18px] underline hover:text-white transition-colors opacity-90 hover:opacity-100"
            >
              info@payanatrails.com
            </a>

            {/* Phone / WhatsApp */}
            <a
              href="tel:+918660460512"
              className="text-[12px] sm:text-[16px] hover:text-white transition-colors opacity-90 hover:opacity-100"
            >
              Call or WhatsApp:{" "}
              <span className="italic tracking-widest">+91 8660460512</span>
            </a>
          </div>
        </div>

        {/* === DIVIDER === */}
          <hr className="border-[#F3EFE9] opacity-30 my-10" />

        {/* === BOTTOM SECTION === */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[#F3EFE9] text-[14px] sm:text-[15px]">
          {/* Bottom inline links */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-medium tracking-wide opacity-80">
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
                  <span className="opacity-60 font-light select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Copyright */}
          <div className="font-medium tracking-wide text-center md:text-right opacity-80">
            © {currentYear} Payana Trails. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
