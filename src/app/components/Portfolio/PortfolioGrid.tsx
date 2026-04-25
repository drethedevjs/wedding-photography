import { PortfolioGridProps } from "@/interface/PortfolioInterfaces";
import PortfolioCard from "./PortfolioCard";

/**
 * Pinterest-style masonry grid. CSS columns give us varying
 * card heights without any JS — 1 col on mobile, 2 on tablet,
 * 3 on desktop.
 */
export default function PortfolioGrid({
  category,
  covers
}: PortfolioGridProps) {
  if (!covers?.length) {
    return (
      <div className="container mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
        <p className="font-body italic text-secondary text-lg">
          New galleries coming soon.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full px-2 sm:px-3 md:px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
        {covers.map(cover => (
          <PortfolioCard
            key={`${cover.metadata.galleryName}-${cover.fileName}`}
            category={category}
            cover={cover}
          />
        ))}
      </div>
    </section>
  );
}
