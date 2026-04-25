import { GalleryDetailHeroProps } from "@/interface/PortfolioInterfaces";
import cloudinary from "@/utils/cloudinary";
import Image from "next/image";

/**
 * Full-bleed gallery hero — couple names + date overlaid in
 * Playfair Display, dark overlay for legibility.
 */
export default function GalleryDetailHero({
  imageFileName,
  alt = "Covenant LX gallery",
  coupleNames,
  date
}: GalleryDetailHeroProps) {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[calc(100dvh-122px)] overflow-hidden">
      {imageFileName ? (
        <Image
          src={cloudinary.getClientImageSrc(imageFileName)}
          alt={alt || coupleNames}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-dark" />
      )}

      <div className="absolute inset-0 bg-dark/55" />

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
        <div className="h-px w-12 sm:w-16 bg-gold mb-7 sm:mb-9" />
        <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wide">
          {coupleNames}
        </h1>
        {date && (
          <p className="mt-5 sm:mt-7 font-display italic text-goldLight tracking-[0.3em] uppercase text-xs sm:text-sm md:text-base">
            {date}
          </p>
        )}
      </div>
    </section>
  );
}
