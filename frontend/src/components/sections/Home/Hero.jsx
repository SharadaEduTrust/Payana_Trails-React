import React, { useState, useEffect } from "react";
import CreamBtn from "../../common/buttons/CreamBtn";

export default function Hero({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 0)
    return (
      <div className="w-full h-screen bg-gray-200 flex items-center justify-center">
        No images found
      </div>
    );

  return (
    <section className="relative w-full h-[100dvh] flex items-center overflow-hidden bg-black">
      {/* Background Images Layer */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[2500ms] ease-in-out ${
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
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-400 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pointer-events-none">
        <div className="max-w-md mx-auto sm:mx-0 sm:max-w-xl lg:max-w-2xl pt-20 pointer-events-auto text-center sm:text-left">
          <h1
            className="text-[#4A3B2A] text-2xl sm:text-3xl lg:text-[40px] italic font-bold leading-[1.1] mb-6 
            [text-shadow:0_0_15px_rgba(255,255,255,1),0_0_30px_rgba(255,255,255,0.8)]"
          >
            Thoughtfully Curated Journeys for the Discerning Traveller
          </h1>

          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 mb-10">
            {[
              { icon: "🦁", text: "WILDLIFE" },
              { icon: "🏛️", text: "HERITAGE" },
              { icon: "🌿", text: "SLOW TRAVEL" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-white text-xs font-bold tracking-widest">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center sm:justify-start">
            <CreamBtn
              text="Plan Your Journey &rarr;"
              className="py-3 px-10 text-[18px]"
            />
          </div>
        </div>
      </div>

      {/* RESTORED: Sliding Dynamic Dots Indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 w-32 h-6 pointer-events-none
        [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
      >
        <div
          className="absolute top-0 left-1/2 flex gap-2 h-full items-center transition-transform duration-500 ease-out pointer-events-auto"
          style={{ transform: `translateX(-${currentIndex * 20 + 6}px)` }}
        >
          {images.map((_, index) => (
            <div
              key={index}
              className="w-3 flex justify-center cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <button
                className={`rounded-full transition-all duration-500 shadow-md ${
                  currentIndex === index
                    ? "bg-white w-3 h-3 opacity-100"
                    : "bg-white/60 hover:bg-white/90 w-2 h-2 opacity-60"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
