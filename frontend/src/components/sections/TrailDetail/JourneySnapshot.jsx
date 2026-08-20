import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  LuMapPin,
  LuPalette,
  LuLeaf,
  LuSun,
  LuFileText,
  LuMap,
  LuTag,
  LuArrowRight,
  LuFlag,
  LuCornerDownLeft,
} from "react-icons/lu";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const JourneySnapshot = ({ trail }) => {
  const snapshotItems = useMemo(() => {
    const items = [
      {
        icon: LuMapPin,
        label: "Destination",
        value: trail.trailDestination || "Multiple locations",
      },
      {
        icon: LuPalette,
        label: "Theme",
        value: trail.trailTheme || "Curated",
      },
      {
        icon: LuLeaf,
        label: "Comfort",
        value: trail.comfortLevel || "Balanced",
      },
      {
        icon: LuSun,
        label: "Best Season",
        value: trail.bestTimeToTravel || "All year",
      },
      {
        icon: LuFileText,
        label: "Visa",
        value: trail.visa || "Check requirements",
      },
    ];

    if (trail.pricing) {
      items.push({
        icon: LuTag,
        label: "Pricing",
        value: trail.pricing,
      });
    }

    return items;
  }, [trail]);

  // Transform trail route into visual nodes/steps
  const routeSteps = useMemo(() => {
    if (!trail.trailRoute) return [];
    const normalizedRoute = String(trail.trailRoute)
      .replace(/\r\n/g, "\n")
      .replace(/\s*(?:->|=>|~>|→|➔|➜|➝|➞)\s*/g, " > ")
      .trim();

    return normalizedRoute
      .split(/\s*>\s*|\s*\|\s*|\s*,\s*|\n+|\s+(?:-|\u2013|\u2014)\s+(?=[A-Z0-9])/)
      .map((step) => step.trim().replace(/^(?:\*|-|\u2022|\u00B7)\s*/, ""))
      .filter(Boolean);
  }, [trail.trailRoute]);

  // Split route steps into rows of up to 6 stops for desktop route flow
  const routeStepRows = useMemo(() => {
    if (routeSteps.length === 0) return [];
    if (routeSteps.length <= 6) {
      return [routeSteps.map((step, idx) => ({ step, originalIndex: idx }))];
    }

    const maxPerRow = 6;
    const rows = [];
    let currentIdx = 0;
    for (let i = 0; i < routeSteps.length; i += maxPerRow) {
      const chunk = routeSteps.slice(i, i + maxPerRow).map((step) => ({
        step,
        originalIndex: currentIdx++,
      }));
      rows.push(chunk);
    }
    return rows;
  }, [routeSteps]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full overflow-hidden rounded-3xl border border-[#4A3B2A]/10 bg-white shadow-[0_8px_30px_rgba(74,59,42,0.04)]"
    >
      {/* Top Section: Standard Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-[#4A3B2A]/5 lg:flex lg:flex-row lg:divide-x lg:divide-y-0 relative z-10 border-b border-[#4A3B2A]/5">
        {snapshotItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              variants={itemVariants}
              key={item.label}
              className={`group flex flex-1 flex-col items-center justify-center p-6 sm:p-8 text-center transition-all duration-500 hover:bg-[#F3EFE9]/50 ${
                idx === snapshotItems.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative mb-4 flex items-center justify-center">
                <div className="absolute inset-0 scale-50 rounded-full bg-[#4A3B2A]/0 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#4A3B2A]/5 blur-md" />
                <Icon
                  className="relative z-10 h-7 w-7 text-[#D4A373] transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-[#4A3B2A]"
                  strokeWidth={1.5}
                />
              </div>

              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#4A3B2A]/40 transition-colors duration-300 group-hover:text-[#4A3B2A]/70">
                {item.label}
              </p>

              <p className="text-base font-semibold text-[#3D2C20] md:text-[1.05rem]">
                {item.value}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Authentic Visual Trail Route Flow */}
      {routeSteps.length > 0 && (
        <motion.div
          variants={itemVariants}
          className="group relative bg-[#F3EFE9]/50 p-6 sm:p-10 md:p-12 transition-colors duration-500 hover:bg-[#F3EFE9]"
        >
          {/* Header */}
          <div className="mb-10 flex flex-col items-center justify-center gap-4 text-center sm:mb-14 sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-col">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A373]">
                  Trail Route
                </p>
                <span className="rounded-full bg-[#4A3B2A]/8 px-2.5 py-0.5 text-[10px] font-bold text-[#4A3B2A]">
                  {routeSteps.length} Stops
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#4A3B2A]">
                Journey Sequence
              </h3>
            </div>
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#4A3B2A]/5 transition-transform duration-500 group-hover:rotate-12 group-hover:bg-white group-hover:scale-110 group-hover:shadow-sm">
              <LuMap
                className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-[#4A3B2A]/40 transition-colors duration-300 group-hover:text-[#D4A373]"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Visual Route Pathway */}
          <div className="relative mx-auto w-full max-w-5xl">
            {/* Desktop / Tablet Horizontal Route Flow */}
            <div className="hidden sm:flex flex-col gap-8 md:gap-10">
              {routeStepRows.map((rowItems, rowIndex) => {
                const isLastRow = rowIndex === routeStepRows.length - 1;

                return (
                  <div key={`row-${rowIndex}`} className="relative flex flex-col">
                    {/* Row of Waypoints connected by dashed trail line */}
                    <div className="relative flex items-center justify-between w-full">
                      {rowItems.map((item, colIndex) => {
                        const isFirstOverall = item.originalIndex === 0;
                        const isLastOverall = item.originalIndex === routeSteps.length - 1;
                        const isLastInRow = colIndex === rowItems.length - 1;

                        return (
                          <React.Fragment key={item.step + item.originalIndex}>
                            {/* Waypoint Node */}
                            <motion.div
                              className="group/node relative flex flex-col items-center z-10 cursor-pointer"
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: colIndex * 0.08 }}
                              viewport={{ once: true }}
                            >
                              {/* Top Label (Start / End / Stop #) */}
                              <div className="mb-2 min-h-[16px] flex items-center justify-center">
                                {isFirstOverall ? (
                                  <span className="rounded-full bg-[#4A3B2A] px-2 py-0.5 text-[9px] font-bold tracking-widest text-[#F8F1E7] uppercase shadow-xs">
                                    Start
                                  </span>
                                ) : isLastOverall ? (
                                  <span className="rounded-full bg-[#D4A373] px-2 py-0.5 text-[9px] font-bold tracking-widest text-white uppercase shadow-xs">
                                    Finish
                                  </span>
                                ) : (
                                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4A3B2A]/40 group-hover/node:text-[#D4A373] transition-colors">
                                    Stop {item.originalIndex + 1}
                                  </span>
                                )}
                              </div>

                              {/* Node Milestone Circle */}
                              <div
                                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover/node:scale-115 shadow-sm ${
                                  isFirstOverall
                                    ? "bg-[#4A3B2A] text-[#F8F1E7] ring-4 ring-[#D4A373]/30"
                                    : isLastOverall
                                      ? "bg-[#D4A373] text-white ring-4 ring-[#4A3B2A]/20"
                                      : "bg-white text-[#4A3B2A] border-2 border-[#D4A373] ring-4 ring-[#F3EFE9] group-hover/node:bg-[#4A3B2A] group-hover/node:text-white"
                                }`}
                              >
                                {isFirstOverall ? (
                                  <LuMapPin className="h-5 w-5" />
                                ) : isLastOverall ? (
                                  <LuFlag className="h-4 w-4" />
                                ) : (
                                  <span className="text-xs font-bold font-sans">
                                    {item.originalIndex + 1}
                                  </span>
                                )}
                              </div>

                              {/* City / Stop Name */}
                              <p className="mt-3 max-w-[130px] text-center text-xs md:text-sm font-semibold tracking-wide text-[#3D2C20] transition-colors duration-300 group-hover/node:text-[#D4A373]">
                                {item.step}
                              </p>
                            </motion.div>

                            {/* Trail Connecting Line Between Waypoints in the same row */}
                            {!isLastInRow && (
                              <div className="flex-1 flex items-center justify-center relative px-2 -mt-6">
                                <div className="w-full border-t-2 border-dashed border-[#D4A373]/40" />
                                <div className="absolute bg-[#FAF6F0] px-1 text-[#D4A373]/70">
                                  <LuArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                                </div>
                              </div>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>

                    {/* S-curve Connector indicating the trail continues to the next line */}
                    {!isLastRow && (
                      <div className="flex items-center justify-end pr-6 my-2 text-[#D4A373]/80">
                        <div className="flex items-center gap-2 rounded-full border border-dashed border-[#D4A373]/50 bg-white/70 px-3 py-1 text-[11px] font-bold tracking-wider uppercase text-[#7C5A3D] shadow-xs backdrop-blur-xs">
                          <span>Next leg</span>
                          <LuCornerDownLeft className="h-3.5 w-3.5 stroke-[2.5] text-[#D4A373]" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Vertical Trail Route */}
            <div className="flex flex-col sm:hidden relative pl-2">
              <div className="absolute left-[27px] top-6 bottom-6 w-[2px] border-l-2 border-dashed border-[#D4A373]/50 z-0" />

              {routeSteps.map((step, index) => {
                const isFirst = index === 0;
                const isLast = index === routeSteps.length - 1;

                return (
                  <motion.div
                    key={step + index}
                    className="relative z-10 flex items-center gap-4 mb-6 last:mb-0"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    {/* Node Icon */}
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-xs ${
                        isFirst
                          ? "bg-[#4A3B2A] text-white ring-4 ring-[#D4A373]/30"
                          : isLast
                            ? "bg-[#D4A373] text-white ring-4 ring-[#4A3B2A]/20"
                            : "bg-white text-[#4A3B2A] border-2 border-[#D4A373] ring-4 ring-[#F3EFE9]"
                      }`}
                    >
                      {isFirst ? (
                        <LuMapPin className="h-4 w-4" />
                      ) : isLast ? (
                        <LuFlag className="h-3.5 w-3.5" />
                      ) : (
                        <span className="text-[11px] font-bold">{index + 1}</span>
                      )}
                    </div>

                    {/* Location & Badge */}
                    <div className="flex flex-col">
                      {isFirst && (
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#D4A373]">
                          Start
                        </span>
                      )}
                      {isLast && (
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#D4A373]">
                          Destination
                        </span>
                      )}
                      <p className="text-sm font-semibold tracking-wide text-[#3D2C20]">
                        {step}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default JourneySnapshot;
