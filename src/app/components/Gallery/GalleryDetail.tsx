import { GalleryDetailProps } from "@/interface/PortfolioInterfaces";
import cloudinary from "@/utils/cloudinary";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  categoryHeading,
  categoryToSingular,
  parseGallerySlug
} from "../Portfolio/portfolioHelpers";
import GalleryDetailGrid from "./GalleryDetailGrid";
import GalleryDetailHero from "./GalleryDetailHero";

/**
 * Shared individual gallery page. Both /gallery/wedding/[name] and
 * /gallery/engagement/[name] render this with the matching category.
 *
 * Images are fetched from Cloudinary by the couple's unique tag
 * (e.g. `smith-jones-2024`).
 */
export default async function GalleryDetail({
  category,
  galleryName
}: GalleryDetailProps) {
  // covenantlx/wedding
  const images =
    (await cloudinary.getImageData(
      `covenantlx/${categoryToSingular(category)}/${galleryName}`,
      null
    )) ?? [];

  if (!images.length) {
    redirect(`/portfolio/${categoryToSingular(category)}`);
  }

  // First image is the hero unless one is explicitly tagged as cover.
  const hero =
    images.find(i =>
      i.tags?.includes(`${categoryToSingular(category)}-portfolio`)
    ) ?? images[0];

  const { coupleNames, date } = parseGallerySlug(galleryName);

  const backHref = `/portfolio/${categoryToSingular(category)}`;
  const backLabel = `Back to ${categoryHeading(category)}`;

  return (
    <section className="relative">
      {/* Back link — fixed top-left over the hero */}
      <Link
        href={backHref}
        className="absolute top-6 left-6 md:top-8 md:left-10 z-20 font-body text-white/90 hover:text-white text-sm md:text-base tracking-wide transition-colors duration-300"
      >
        <span aria-hidden="true">← </span>
        {backLabel}
      </Link>

      <GalleryDetailHero
        imageFileName={hero?.fileName}
        alt={hero?.metadata?.alt}
        coupleNames={coupleNames || galleryName}
        date={date}
      />

      <GalleryDetailGrid
        images={images}
        coupleNames={coupleNames || galleryName}
      />
    </section>
  );
}
