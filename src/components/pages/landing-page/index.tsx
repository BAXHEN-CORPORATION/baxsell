import Lead from "@baxsell/components/Lead";
import { useBusinessStore } from "@baxsell/providers/business-store-provider";
import {
  selectBusinessCta,
  selectHeroHeading,
} from "@baxsell/stores/business-store";
import { LeadOption } from "@baxsell/stores/lead-store";
import { useShallow } from "zustand/shallow";

interface LandingPageProps {
  onGoalClick: (goal: LeadOption) => void;
}

export const LandingPage = ({ onGoalClick }: LandingPageProps) => {
  const cta = useBusinessStore(useShallow(selectBusinessCta));

  //   useShallow(selectServiceProviderName)
  // );
  const heroHeading = useBusinessStore(useShallow(selectHeroHeading));

  return (
    <main className="flex flex-col items-center justify-items-center min-h-(--page-min-height) p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Collaboration CTA */}
      <div className="text-center mt-6">
        <button className="text-[var(--primary)] transition-colors font-body">
          {cta}
        </button>
      </div>

      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mt-12">
        <h1 className="text-3xl md:text-4xl font-medium text-[var(--primary-light)] font-heading">
          {heroHeading.map((word, index) => {
            if (index % 2 === 0) {
              return <span key={index}>{word} </span>;
            }
            return (
              <span key={index} className="font-extrabold text-5xl">
                {word}{" "}
              </span>
            );
          })}
        </h1>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-4xl mt-12 relative mb-5">
        <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <iframe
              className="w-full h-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FDO8N0nT5xo?si=J3neA_Z0XGui6CtK"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <Lead onClick={onGoalClick} />
    </main>
  );
};
