import { PortfolioCardProps } from "@/interface/PortfolioInterfaces";
import cloudinary from "@/utils/cloudinary";
import Image from "next/image";
import Link from "next/link";
import { categoryToSingular, parseGallerySlug } from "./portfolioHelpers";

/**
 * Single masonry card — full-width Cloudinary cover image with a
 * lower-third caption showing the couple's names. On hover the
 * image zooms in slightly. Click navigates to the gallery page.
 */
export default function PortfolioCard({ category, cover }: PortfolioCardProps) {
  const slug = cover.metadata.galleryName;
  const { coupleNames } = parseGallerySlug(slug);
  const href = `/gallery/${categoryToSingular(category)}/${slug}`;

  const width = Number(cover.metadata.width) || 1200;
  const height = Number(cover.metadata.height) || 1500;

  return (
    <Link
      href={href}
      className="group relative mb-2 md:mb-3 overflow-hidden"
      aria-label={coupleNames || slug}
    >
      <Image
        src={cloudinary.getImageSrc(cover.fileName)}
        alt={cover.metadata.alt || coupleNames || "Covenant LX gallery cover"}
        width={width}
        height={height}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Lower-third caption — always visible, gradient for legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent flex items-end">
        <span className="relative inline-block mx-4 md:mx-5 mb-3 md:mb-4 font-display text-white text-lg md:text-xl lg:text-5xl tracking-wide leading-snug after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-gold after:transition-all after:duration-500 group-hover:after:w-full pb-2">
          {coupleNames || slug}
        </span>
      </div>
    </Link>
  );
}
