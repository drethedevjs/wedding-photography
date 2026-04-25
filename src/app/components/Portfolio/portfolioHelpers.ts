import { PortfolioCategory } from "@/interface/PortfolioInterfaces";

/**
 * Parse a Cloudinary gallery slug (e.g. "smith-jones-2024") into
 * a display-ready couple name and (optional) year.
 *  - "smith-jones-2024" -> { coupleNames: "Smith & Jones", date: "2024" }
 *  - "smith-jones"      -> { coupleNames: "Smith & Jones", date: undefined }
 */
export function parseGallerySlug(slug: string): {
  coupleNames: string;
  date?: string;
} {
  if (!slug) return { coupleNames: "" };

  const parts = slug.split("-").filter(Boolean);
  const last = parts[parts.length - 1];
  const yearMatch = last && /^\d{4}$/.test(last) ? last : undefined;
  const nameParts = yearMatch ? parts.slice(0, -1) : parts;

  const coupleNames = nameParts
    .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join(" & ");

  return { coupleNames, date: yearMatch };
}

/**
 * Map the plural category used as a Cloudinary tag to the
 * singular form used in URL paths (matches existing route structure).
 */
export function categoryToSingular(category: PortfolioCategory): string {
  return category === "weddings" ? "wedding" : "engagement";
}

/**
 * Capitalize the plural category for display headings.
 */
export function categoryHeading(category: PortfolioCategory): string {
  return category === "weddings" ? "Weddings" : "Engagements";
}
