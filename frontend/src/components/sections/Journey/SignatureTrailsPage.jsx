import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CommonHero from "../../common/CommonHero";
import JourneySearchBar from "./JourneySearchBar";
import EOTCard from "../../common/cards/EOTCard";
import { api, IMAGE_BASE_URL } from "../../../services/api";
import destinationsImg from "../../../assets/Journey/Destination_Main.webp";
import usePageHeroImages from "../../../hooks/usePageHeroImages";

const SignatureTrailsPage = () => {
  const [trails, setTrails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const SITE_URL = (
    import.meta.env.VITE_SITE_URL || "https://payanatrails.com"
  ).replace("www.", "");

  const { images: fixedDepImgs } = usePageHeroImages("journeys/fixed-departure");
  const { images: signatureImgs } = usePageHeroImages("journeys/signature");
  const heroImgs = fixedDepImgs?.length > 0 ? fixedDepImgs : signatureImgs;
  const heroBg = heroImgs?.length > 0 ? (heroImgs[0].desktop || heroImgs[0]) : destinationsImg;

  useEffect(() => {
    const fetchTrails = async () => {
      try {
        const data = await api.getTrails();
        const fixedDepartureTrails = data.filter((trail) => {
          const type = (trail.trailType || "").toLowerCase().trim();
          const theme = (trail.trailTheme || "").toLowerCase().trim();
          return (
            type.includes("fixed departure") ||
            type.includes("signature") ||
            theme.includes("fixed departure")
          );
        });

        setTrails(fixedDepartureTrails);
      } catch (err) {
        console.error("Error fetching fixed departure trails:", err);
        setError("Failed to load trails. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrails();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const filteredTrails = trails.filter(
    (trail) =>
      trail.trailName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trail.trailDestination?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="bg-[#F3EFE9] min-h-screen font-['Lato',sans-serif]">
      <Helmet>
        <title>Fixed Departure Trails | Payana Trails</title>
        <meta
          name="description"
          content="A handpicked collection of Payana Trails fixed departure journeys, designed to bring together the most memorable landscapes, stories, and experiences."
        />
        <link rel="canonical" href={`${SITE_URL}/journeys/fixed-departure`} />
        <meta property="og:url" content={`${SITE_URL}/journeys/fixed-departure`} />
      </Helmet>

      <CommonHero
        title="Explore Our Fixed Departure Trails"
        description="A handpicked collection of Payana Trails journeys, designed to bring together the most memorable landscapes, stories, and experiences."
        images={heroImgs}
        bgImage={destinationsImg}
        breadcrumbs={[
          { label: "HOME", path: "/" },
          { label: "JOURNEY", path: "/journeys" },
          { label: "FIXED DEPARTURE TRAILS" },
        ]}
      />

      <div className="max-w-7xl mx-auto pt-2 pb-16 px-6 md:px-12">
        {!loading && !error && (
          <JourneySearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4A3B2A]"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 py-10 font-bold">
            {error}
          </div>
        )}

        {!loading &&
          !error &&
          filteredTrails.length === 0 &&
          trails.length > 0 && (
            <div className="text-center text-[#4A3B2A]/70 py-10 text-lg">
              No trails match your search criteria.
            </div>
          )}

        {!loading && !error && trails.length === 0 && (
          <div className="text-center text-[#4A3B2A]/70 py-10 text-lg">
            No fixed departure trails available at the moment.
          </div>
        )}

        {!loading && !error && filteredTrails.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
            {filteredTrails.map((trail) => (
              <EOTCard
                key={trail._id}
                title={trail.trailName}
                description={trail.trailSubTitle}
                location={trail.trailDestination}
                duration={trail.duration}
                date={formatDate(trail.journeyDate)}
                trail={trail.trailRoute}
                trailType={trail.trailType || ""}
                imgSrc={
                  trail.heroImage ? `${IMAGE_BASE_URL}${trail.heroImage}` : null
                }
                trailSlug={trail.slug}
                pricing={trail.pricing}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignatureTrailsPage;
