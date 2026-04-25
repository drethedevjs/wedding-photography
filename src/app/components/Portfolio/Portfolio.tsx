import { PortfolioProps } from "@/interface/PortfolioInterfaces";
import cloudinary from "@/utils/cloudinary";
import ContactCTA from "../CTA/ContactCTA";
import PortfolioGrid from "./PortfolioGrid";
import PortfolioHero from "./PortfolioHero";

/**
 * Shared portfolio index — used by both /portfolio/wedding and
 * /portfolio/engagement. Category drives the Cloudinary tag
 * lookup, the headline copy, and the per-card gallery URLs.
 *
 * Cloudinary tagging convention:
 *   - Portfolio cover images → tagged `weddings` or `engagements`
 *   - Individual gallery images → tagged with the couple's unique slug
 */
export default async function Portfolio({ category, tag }: PortfolioProps) {
  const covers = (await cloudinary.getImageData(null, tag)) ?? [];

  // Cover images come from a couple's gallery folder. Pick the first
  // image of each gallery as the hero behind the masonry grid.
  const heroImage = covers[0];

  return (
    <>
      <PortfolioHero
        category={category}
        imageFileName={heroImage?.fileName}
        alt={heroImage?.metadata?.alt}
      />

      <PortfolioGrid category={category} covers={covers} />

      <ContactCTA
        btnText="Start the Conversation"
        text="Ready to have your own gallery?"
      />
    </>
  );
}
