import InvestmentBody from "@/app/components/Investment/InvestmentBody";
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
import ContactCTA from "../components/CTA/ContactCTA";
import PageHero from "../components/PageHero";
import ParallaxBanner from "../components/ParallaxBanner/ParallaxBanner";

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

      <ContactCTA
        text="Read to Build Yours?"
        shortPhrase="Let's Talk"
        btnText="Start the Conversation"
      />
    </>
  );
}
