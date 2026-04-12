import React, { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BedDouble, Coffee, UtensilsCrossed } from "lucide-react";

const ItineraryDaySection = forwardRef(function ItineraryDaySection(
  { day, index, imageUrl, isActive, trailName },
  ref,
) {
  const shouldReduceMotion = useReducedMotion();
  const panelOrderClassName =
    index % 2 === 0 ? "lg:pl-10" : "lg:order-first lg:pr-10";

  return (
    <section
      ref={ref}
      data-itinerary-day="true"
      data-day-index={index}
      className="relative min-h-[108svh] py-8 md:py-10"
      style={{ contentVisibility: "auto", containIntrinsicSize: "920px" }}
    >
      <div className="sticky top-24">
        <motion.article
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: isActive ? 1 : 0.985,
                  opacity: isActive ? 1 : 0.88,
                }
          }
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative isolate min-h-[78svh] overflow-hidden rounded-[34px] border border-[#4A3B2A]/10 bg-[#20170F] shadow-[0_34px_85px_rgba(41,29,17,0.22)]"
        >
          <div className="absolute inset-0">
            <img
              src={imageUrl}
              alt={`${trailName} day ${index + 1}`}
              className={`h-full w-full object-cover transition-transform duration-[1600ms] ${
                isActive ? "scale-[1.03]" : "scale-100"
              }`}
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,16,10,0.88)_0%,rgba(24,16,10,0.48)_42%,rgba(24,16,10,0.76)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(246,226,193,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.10),transparent_20%)]" />
          </div>

          <div className="relative z-10 grid min-h-[78svh] items-end gap-8 p-5 md:p-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:p-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E9D8BE]/20 bg-[#E9D8BE]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E9D8BE] backdrop-blur-md">
                Day {String(index + 1).padStart(2, "0")}
              </div>

              <h2 className="mt-5 font-serif text-[clamp(2.15rem,4.5vw,4.35rem)] leading-[0.98] tracking-tight text-[#FFF7EE]">
                {day.title}
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#F8F2E8]/74 md:text-base">
                A slower, story-led read of the saved day plan. Scroll past this
                scene and the next chapter takes the frame.
              </p>
            </div>

            <div className={panelOrderClassName}>
              <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,250,244,0.95)_0%,rgba(246,237,223,0.96)_100%)] p-6 text-[#2F2319] shadow-[0_24px_70px_rgba(27,19,12,0.22)] backdrop-blur-md md:p-7">
                <div className="flex flex-wrap gap-2">
                  {day.accommodation && (
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#4A3B2A]/8 bg-white/75 px-3 py-2 text-xs font-semibold text-[#5D4837]">
                      <BedDouble className="h-3.5 w-3.5" />
                      {day.accommodation}
                    </div>
                  )}
                  {day.meals && (
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#4A3B2A]/8 bg-white/75 px-3 py-2 text-xs font-semibold text-[#5D4837]">
                      <UtensilsCrossed className="h-3.5 w-3.5" />
                      {day.meals}
                    </div>
                  )}
                  {!day.accommodation && !day.meals && (
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#4A3B2A]/8 bg-white/75 px-3 py-2 text-xs font-semibold text-[#5D4837]">
                      <Coffee className="h-3.5 w-3.5" />
                      Move with the day
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8B6B50]">
                    Trail notes
                  </p>

                  {day.points.length > 0 ? (
                    <ol className="mt-5 space-y-4">
                      {day.points.map((point, pointIndex) => (
                        <li
                          key={`${point}-${pointIndex}`}
                          className="flex gap-4"
                        >
                          <div className="relative flex flex-col items-center">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4A3B2A] text-sm font-semibold text-[#F8F2E8] shadow-sm">
                              {pointIndex + 1}
                            </div>
                            {pointIndex < day.points.length - 1 && (
                              <div className="mt-2 h-full w-px bg-[linear-gradient(180deg,rgba(74,59,42,0.28)_0%,rgba(74,59,42,0)_100%)]" />
                            )}
                          </div>
                          <p className="pt-1 text-sm leading-7 text-[#5A4738] md:text-[15px]">
                            {point}
                          </p>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p className="mt-5 text-sm leading-7 text-[#5A4738]">
                      This chapter is intentionally light on bullet points, leaving
                      the day open for pacing, pauses, and whatever the trail gives
                      you in the moment.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
});

export default ItineraryDaySection;
