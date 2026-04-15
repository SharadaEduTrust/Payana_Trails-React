import React from "react";
import { Plane, PlaneLanding, PlaneTakeoff } from "lucide-react";

const FlightsSection = ({ flights }) => {
  if (!flights) return null;

  const {
    domesticIntro,
    domesticLines,
    internationalIntro,
    arrivalAirport,
    arrivalOptions,
    departureAirport,
    departureOptions,
  } = flights;

  const filledDomesticLines = (domesticLines || []).filter(
    (l) => l && l.trim(),
  );
  const filledArrivalOptions = (arrivalOptions || []).filter(
    (o) => o && o.trim(),
  );
  const filledDepartureOptions = (departureOptions || []).filter(
    (o) => o && o.trim(),
  );

  const hasDomestic = domesticIntro?.trim() || filledDomesticLines.length;
  const hasInternational =
    internationalIntro?.trim() ||
    arrivalAirport?.trim() ||
    filledArrivalOptions.length ||
    departureAirport?.trim() ||
    filledDepartureOptions.length;

  if (!hasDomestic && !hasInternational) return null;

  return (
    <div className="w-full rounded-[28px] border border-[#E5D7C5]/80 bg-[#FAF7F2] shadow-[0_12px_30px_rgba(74,59,42,0.04)] overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-6 md:px-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5D7C5] bg-[#FDFBF7] text-[#8B6B50]">
          <Plane className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-[#8B6B50]">
            VOYAGES
          </p>
          <p className="text-sm text-[#8B6B50]">
            Domestic journeys and international connections for this itinerary.
          </p>
        </div>
      </div>

      <div className="space-y-0 border-t border-[#4A3B2A]/10">
        {hasDomestic ? (
          <div id="itinerary-domestic" className="px-6 py-6 md:px-8 scroll-mt-24">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5D7C5] bg-[#FDFBF7] text-[#8B6B50]">
                <PlaneLanding className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-[#8B6B50]">
                  DOMESTIC FLIGHTS · TRAINS · CRUISES
                </p>
                {domesticIntro?.trim() && (
                  <p className="mt-0.5 text-sm text-[#8B6B50]">
                    {domesticIntro.trim()}
                  </p>
                )}
              </div>
            </div>

            {filledDomesticLines.length > 0 && (
              <div className="space-y-3">
                {filledDomesticLines.map((line, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 rounded-2xl border border-white/60 bg-white/70 px-4 py-3.5"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#4A3B2A] text-xs font-semibold text-[#FDFBF7]">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <p className="text-[15px] leading-relaxed text-[#5A4738] md:text-base pt-0.5">
                      {line.trim()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : null}

        {hasInternational ? (
          <div
            id="itinerary-international"
            className={`px-6 py-6 md:px-8 space-y-5 scroll-mt-24 ${
              hasDomestic ? "border-t border-[#4A3B2A]/10" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5D7C5] bg-[#FDFBF7] text-[#8B6B50]">
                <PlaneTakeoff className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-[#8B6B50]">
                  International flights
                </p>
                {internationalIntro?.trim() && (
                  <p className="mt-0.5 text-sm text-[#8B6B50]">
                    {internationalIntro.trim()}
                  </p>
                )}
              </div>
            </div>

            {(arrivalAirport?.trim() || filledArrivalOptions.length > 0) && (
              <div className="rounded-[24px] border border-[#E5D7C5] bg-white p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF7F2] text-[#8B6B50]">
                    <PlaneLanding className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8B6B50]">
                      Arrival
                    </p>
                    {arrivalAirport?.trim() && (
                      <p className="text-sm font-medium text-[#4A3B2A]">
                        {arrivalAirport.trim()}
                      </p>
                    )}
                  </div>
                </div>

                {filledArrivalOptions.length > 0 && (
                  <div className="space-y-3">
                    {filledArrivalOptions.map((opt, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 rounded-2xl border border-[#E5D7C5]/60 bg-[#FAF7F2] px-4 py-3.5"
                      >
                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A373] shadow-sm" />
                        <p className="text-sm leading-relaxed text-[#5A4738]">
                          {opt.trim()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {(departureAirport?.trim() || filledDepartureOptions.length > 0) && (
              <div className="rounded-[24px] border border-[#E5D7C5] bg-white p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF7F2] text-[#8B6B50]">
                    <PlaneTakeoff className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8B6B50]">
                      Departure
                    </p>
                    {departureAirport?.trim() && (
                      <p className="text-sm font-medium text-[#4A3B2A]">
                        {departureAirport.trim()}
                      </p>
                    )}
                  </div>
                </div>

                {filledDepartureOptions.length > 0 && (
                  <div className="space-y-3">
                    {filledDepartureOptions.map((opt, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 rounded-2xl border border-[#E5D7C5]/60 bg-[#FAF7F2] px-4 py-3.5"
                      >
                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A373] shadow-sm" />
                        <p className="text-sm leading-relaxed text-[#5A4738]">
                          {opt.trim()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FlightsSection;
