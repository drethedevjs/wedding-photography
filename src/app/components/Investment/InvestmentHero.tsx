import { InvestmentHeroProps } from "@/interface/InvestmentInterfaces";
import cloudinary from "@/utils/cloudinary";
import Image from "next/image";

/**
 * Full-bleed hero for the Investments page.
 * Dark overlay keeps the headline legible while the image
 * carries the couple-forward tone of the page.
 */
export default function InvestmentHero({
  imageFileName,
  alt = "Covenant LX wedding photography",
  headline
}: InvestmentHeroProps) {
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
      <div className="absolute inset-0 bg-dark/50" />

      {/* Headline */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
        <p className="font-display italic text-goldLight tracking-[0.35em] uppercase text-[11px] sm:text-lg mb-5 sm:mb-7">
          The Investment
        </p>
        <div className="h-px w-12 sm:w-16 bg-gold mb-7 sm:mb-9" />
        <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wide max-w-5xl">
          {headline}
        </h1>
      </div>
    </section>
  );
}
