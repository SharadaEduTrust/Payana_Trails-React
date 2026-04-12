import React from "react";
import { motion } from "framer-motion";
import { MapPinned } from "lucide-react";

const formatDayLabel = (index) => `Day ${String(index + 1).padStart(2, "0")}`;

const ItineraryProgressRail = ({
  trailName,
  days,
  activeDayIndex,
  onSelectDay,
}) => {
  const totalDays = days.length;
  const progress =
    totalDays <= 1 ? 100 : ((activeDayIndex + 1) / totalDays) * 100;

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 overflow-hidden rounded-[28px] border border-[#4A3B2A]/10 bg-[linear-gradient(180deg,rgba(255,249,241,0.92)_0%,rgba(247,238,226,0.96)_100%)] p-6 shadow-[0_24px_60px_rgba(74,59,42,0.12)] backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4A3B2A] text-[#F8F2E9] shadow-sm">
            <MapPinned className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8B6B50]">
              Scroll Guide
            </p>
            <h2 className="mt-1 font-serif text-2xl leading-tight text-[#2F2319]">
              {trailName}
            </h2>
          </div>
        </div>

        <div className="mt-6 rounded-[24px] border border-[#4A3B2A]/8 bg-white/70 p-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8B6B50]">
                Current chapter
              </p>
              <p className="mt-2 font-serif text-3xl text-[#2F2319]">
                {String(activeDayIndex + 1).padStart(2, "0")}
              </p>
            </div>
            <p className="text-sm font-medium text-[#6A5240]">
              {totalDays} day{totalDays === 1 ? "" : "s"}
            </p>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#4A3B2A]/8">
            <motion.div
              className="h-full rounded-full bg-[linear-gradient(90deg,#4A3B2A_0%,#8B6B50_100%)]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>

        <div className="mt-6 space-y-2">
          {days.map((day, index) => {
            const isActive = index === activeDayIndex;

            return (
              <button
                key={`${day.title}-${index}`}
                type="button"
                onClick={() => onSelectDay(index)}
                className={`w-full rounded-[22px] border px-4 py-3 text-left transition ${
                  isActive
                    ? "border-[#4A3B2A]/15 bg-[#4A3B2A] text-[#F8F2E9] shadow-[0_16px_34px_rgba(74,59,42,0.18)]"
                    : "border-transparent bg-white/55 text-[#4A3B2A] hover:border-[#4A3B2A]/10 hover:bg-white"
                }`}
              >
                <p
                  className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
                    isActive ? "text-[#E9D8BE]" : "text-[#8B6B50]"
                  }`}
                >
                  {formatDayLabel(index)}
                </p>
                <p className="mt-2 line-clamp-2 font-serif text-lg leading-tight">
                  {day.title}
                </p>
                <p
                  className={`mt-2 text-xs ${
                    isActive ? "text-[#F8F2E9]/72" : "text-[#6A5240]"
                  }`}
                >
                  {day.points.length > 0
                    ? `${day.points.length} highlight${day.points.length === 1 ? "" : "s"}`
                    : "Scene notes only"}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default ItineraryProgressRail;
