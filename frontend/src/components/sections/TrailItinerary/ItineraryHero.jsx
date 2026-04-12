import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Compass,
  MapPin,
  MoonStar,
  Route,
  TentTree,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const formatJourneyDate = (journeyDate) => {
  if (!journeyDate) return null;

  return new Date(journeyDate).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const ItineraryHero = ({ trail, dayCount }) => {
  const heroMeta = [
    {
      icon: Compass,
      value: trail.trailTheme || trail.trailType || "Signature Trail",
    },
    {
      icon: MapPin,
      value: trail.trailDestination,
    },
    {
      icon: Route,
      value: trail.duration,
    },
    {
      icon: MoonStar,
      value: `${dayCount} day${dayCount === 1 ? "" : "s"} mapped`,
    },
  ].filter((item) => item.value);

  const journeyDate = formatJourneyDate(trail.journeyDate);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#1F160E] text-[#F8F2E8]">
      <div className="absolute inset-0">
        <img
          src={trail.heroImageUrl}
          alt={trail.trailName}
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,16,10,0.28)_0%,rgba(24,16,10,0.58)_38%,rgba(24,16,10,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(241,215,173,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,250,242,0.14),transparent_28%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-6 pb-10 pt-28 md:px-10 lg:px-14 lg:pt-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants}>
            <Link
              to={`/trails/${trail.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-white/88 backdrop-blur-md transition hover:bg-white/12"
            >
              <TentTree className="h-4 w-4" />
              Back to trail details
            </Link>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-10 text-xs font-semibold uppercase tracking-[0.34em] text-[#E9D8BE]"
          >
            Live Trail Walkthrough
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-5 max-w-3xl font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.96] tracking-tight"
          >
            {trail.trailName}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base leading-7 text-[#F8F2E8]/80 md:text-xl md:leading-9"
          >
            Scroll through the journey the way it unfolds on the ground. Each
            section reveals one day at a time, using the saved itinerary from the
            trail record.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3 text-sm text-[#F8F2E8]"
          >
            {heroMeta.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.value}-${item.value}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2.5 backdrop-blur-md"
                >
                  <Icon className="h-4 w-4 text-[#E9D8BE]" />
                  <span>{item.value}</span>
                </div>
              );
            })}
            {journeyDate && (
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2.5 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#E9D8BE]" />
                <span>{journeyDate}</span>
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-xl rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E9D8BE]">
              Walking Pace
            </p>
            <p className="mt-3 text-sm leading-7 text-white/80 md:text-base">
              The flow below favors atmosphere over dense UI. Each day becomes
              the full scene while the next one waits just below the fold.
            </p>
          </div>

          <a
            href="#itinerary-journey"
            className="inline-flex items-center gap-2 self-start rounded-full border border-[#E9D8BE]/30 bg-[#E9D8BE]/10 px-5 py-3 text-sm font-semibold text-[#FFF5E8] transition hover:bg-[#E9D8BE]/18"
          >
            Start the walkthrough
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ItineraryHero;
