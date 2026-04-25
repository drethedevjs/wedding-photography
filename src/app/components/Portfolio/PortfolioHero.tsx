import { PortfolioHeroProps } from "@/interface/PortfolioInterfaces";
import cloudinary from "@/utils/cloudinary";
import Image from "next/image";
import { categoryHeading } from "./portfolioHelpers";

/**
 * Full-bleed portfolio hero — Cloudinary image + dark overlay,
 * Playfair Display headline that switches per route, italic
 * DM Sans subhead beneath.
 */
export default function PortfolioHero({
  category,
  imageFileName,
  alt = "Covenant LX wedding photography"
}: PortfolioHeroProps) {
  const heading = categoryHeading(category);

  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[calc(100dvh-122px)] overflow-hidden">
      {imageFileName ? (
        <Image
          src={cloudinary.getClientImageSrc(imageFileName)}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-dark" />
      )}

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-dark/55" />

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
        <div className="h-px w-12 sm:w-16 bg-gold mb-7 sm:mb-9" />
        <h1 className="font-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-wide">
          {heading}
        </h1>
        <p className="mt-6 sm:mt-8 italic font-body text-lightGray/85 text-base sm:text-lg md:text-xl max-w-xl">
          Every gallery is a story. Here are a few of ours.
        </p>
      </div>
    </section>
  );
}
