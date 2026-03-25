import React from "react";
import closingImg from "../../../assets/Home/ClosingInvitation/closing-invitation.webp";
import BrownBtn from "../../common/buttons/BrownBtn";

const ClosingInvitation = () => {
  return (
    <section className="bg-[#F3EFE9] w-full py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* 1. Image Section - 1/2 width */}
          <div className="w-full lg:w-1/2 shrink-0 p-2 sm:p-4">
            {/* 1a. Container to anchor the overlay, shadow, and hover effect */}
            <div
              className="relative border-[8px] border-[#4A3B2A] rounded-[24px] 
              overflow-hidden /* Ensures overlay stays in bounds */
              shadow-[8px_8px_0px_rgba(74,59,42,0.6)] 
              hover:shadow-[16px_16px_0px_rgba(74,59,42,0.4)] 
              hover:-translate-y-2 hover:-translate-x-2 hover:scale-[1.02]
              transition-all duration-500 ease-out"
            >
              {/* 1b. The actual image */}
              <img
                src={closingImg}
                alt="Traveler walking towards sunrise"
                className="w-full h-auto object-cover 
                sepia-[0.2] hover:sepia-0 /* Kept original effect */"
              />

              {/* 1c. Color/Opacity Overlay (using pseudo-element style) */}
              <div className="absolute inset-0 bg-[#4A3B2A] opacity-20 transition-opacity duration-300 hover:opacity-10 pointer-events-none"></div>
            </div>
          </div>

          {/* 2. Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
            {/* Elegant Quote */}
            <p className="text-[#4A3B2A] text-[18px] sm:text-[20px] font-serif italic mb-4 opacity-90">
              "Travel, when designed with care, becomes memory."
            </p>

            {/* Main Heading */}
            <h3 className="text-[#4A3B2A] text-[28px] sm:text-[36px] font-serif font-bold leading-tight mb-4">
              Let's design a journey that suits you.
            </h3>

            {/* Supporting Paragraph */}
            <p className="text-[#4A3B2A]/80 text-[16px] sm:text-[18px] font-sans font-normal leading-relaxed mb-8 max-w-lg">
              Each journey is thoughtfully crafted and tailored to suit you,
              even beyond the trails or destinations listed on our website.
            </p>

            {/* Action Button */}
            <BrownBtn
              text="Connect With Us &rarr;"
              className="px-8 py-3 sm:px-10 sm:py-4 text-[16px] sm:text-[18px] font-medium shadow-md hover:shadow-lg w-fit mb-10 transition-all duration-300"
            />

            {/* Contact Section - Forced to One Line */}
            <div className="flex flex-col items-center gap-4 border-t border-[#4A3B2A]/10 pt-8 w-full">
              <p className="text-[#4A3B2A]/70 text-[13px] sm:text-[14px] uppercase tracking-widest font-sans font-semibold">
                Prefer speaking directly?
              </p>

              {/* Using flex-row and whitespace-nowrap to guarantee one line */}
              <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 w-full">
                {/* Email */}
                <a
                  href="mailto:info@payanatrails.com"
                  className="flex items-center gap-2 text-[#4A3B2A] hover:text-[#7A634A] transition-colors duration-300 font-sans text-[14px] sm:text-[16px] font-medium whitespace-nowrap"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  info@payanatrails.com
                </a>

                {/* Vertical Divider */}
                <span className="text-[#4A3B2A]/30 font-light">|</span>

                {/* Phone/WhatsApp */}
                <a
                  href="tel:+918660460512"
                  className="flex items-center gap-2 text-[#4A3B2A] hover:text-[#7A634A] transition-colors duration-300 font-sans text-[14px] sm:text-[16px] font-medium whitespace-nowrap"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +91 8660460512
                  <span className="font-normal text-[13px] opacity-70 ml-1 hidden sm:inline">
                    (Call/Whatsapp)
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingInvitation;
