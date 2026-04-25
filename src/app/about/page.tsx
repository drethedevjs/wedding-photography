import AboutClosingCTA from "@/app/components/About/AboutClosingCTA";
import AboutDirectMessage from "@/app/components/About/AboutDirectMessage";
import AboutIntro from "@/app/components/About/AboutIntro";
import AboutValues from "@/app/components/About/AboutValues";
import { AboutValue } from "@/interface/AboutInterfaces";
import cloudinary from "@/utils/cloudinary";
import { HERO_SLIDER, HOME_PAGE_GRID } from "@/utils/tags";
import PageHero from "../components/PageHero";
import ParallaxBanner from "../components/ParallaxBanner/ParallaxBanner";

const values: AboutValue[] = [
  {
    label: "Marriages are worth fighting for.",
    description:
      "That's not just a sentiment — it's why I photograph weddings. I want to give you images that remind you, on the hard days, why you chose each other."
  },
  {
    label: "Your day should feel like yours.",
    description:
      "No rushed timelines, no cookie-cutter shots. We move at your pace and capture what actually matters to you."
  },
  {
    label: "You deserve to feel at ease.",
    description:
      "The best photos happen when you forget the camera is there. My job is to make that happen."
  }
];

const directMessage =
  "If you're reading this, you're probably in the middle of one of the most exciting and overwhelming seasons of your life. I want you to know — you don't have to have it all figured out. Just reach out. Let's talk about your day, and I'll take it from there.";

export default async function About() {
  // Pull from HERO_SLIDER first for a cinematic opener; fall back to the
  // home-page grid pool so the page never renders without imagery.
  const heroData = await cloudinary.getImageData(null, HERO_SLIDER);
  const gridData = await cloudinary.getImageData(null, HOME_PAGE_GRID);

  const safeHero = heroData && heroData.length > 0 ? heroData : [];
  const safeGrid = gridData && gridData.length > 0 ? gridData : [];

  // Use a different frame for the editorial break so the two full-bleed
  // images never collide visually.
  const editorial =
    safeGrid[2] || safeGrid[1] || safeHero[1] || safeHero[0] || safeGrid[0];

  return (
    <>
      <PageHero
        imageFileName="augusta-ga-wedding-photographer-andre-1_redvxe"
        alt="Andre in a tuxedo"
        eyebrow="About"
        headline="More than a photographer. A witness to your beginning."
      />

      <AboutIntro />

      <AboutValues values={values} />

      <ParallaxBanner
        imageFileName={editorial?.fileName}
        alt={editorial?.metadata?.alt || "Andre photographing a wedding moment"}
        heightClass="h-[55vh] md:h-[70vh]"
        overlayOpacityClass="bg-dark/35"
      />

      <AboutDirectMessage message={directMessage} />

      <AboutClosingCTA />
    </>
  );
}
