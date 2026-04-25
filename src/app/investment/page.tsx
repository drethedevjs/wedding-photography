import InvestmentBody from "@/app/components/Investment/InvestmentBody";
import InvestmentCTA from "@/app/components/Investment/InvestmentCTA";
import InvestmentFAQ from "@/app/components/Investment/InvestmentFAQ";
import InvestmentIncludes from "@/app/components/Investment/InvestmentIncludes";
import InvestmentPricing from "@/app/components/Investment/InvestmentPricing";
import InvestmentProcess from "@/app/components/Investment/InvestmentProcess";
import {
  investmentFAQItems,
  investmentIncludes,
  investmentProcessSteps
} from "@/data/investment";
import cloudinary from "@/utils/cloudinary";
import { INVESTMENT } from "@/utils/tags";
import PageHero from "../components/PageHero";
import ParallaxBanner from "../components/ParallaxBanner/ParallaxBanner";

/**
 * Fetch image pool used by the Investments page.
 * Preference order: "investment" folder → hero tag → home-page-grid tag.
 * Every call uses `next: { revalidate: 3600 }` via the shared cloudinary util.
 */
async function getImagePool() {
  const investmentFolder = await cloudinary.getImageData(null, INVESTMENT);
  if (investmentFolder && investmentFolder.length > 0) {
    return investmentFolder;
  }
}

export default async function Investment() {
  const investmentImages = await cloudinary.getImageData(null, INVESTMENT);

  const hero = investmentImages![1];
  const editorial = investmentImages![0] || investmentImages![1];

  return (
    <>
      <PageHero
        imageFileName={hero?.fileName}
        alt={hero?.metadata?.alt || "Covenant LX wedding photography"}
        eyebrow="The Investment"
        headline="Your wedding is one-of-a-kind. Your photography investment should be too."
      />

      <InvestmentPricing
        eyebrow="By Invitation"
        headline="Investments start at $2,999 — most couples invest around $3,800."
      />

      <InvestmentBody />

      <InvestmentIncludes items={investmentIncludes} />

      <ParallaxBanner
        imageFileName={editorial?.fileName}
        alt={editorial?.metadata?.alt || "Covenant LX editorial wedding moment"}
        heightClass="h-[55vh] md:h-[70vh]"
        overlayOpacityClass="bg-dark/35"
      />

      <InvestmentProcess steps={investmentProcessSteps} />

      <InvestmentFAQ items={investmentFAQItems} />

      <InvestmentCTA />
    </>
  );
}
