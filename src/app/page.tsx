import cloudinary from "@/utils/cloudinary";
import {
  HERO_SLIDER,
  HOME_PAGE_GRID,
  INSTAGRAM_FEED
} from "@/utils/tags";
import Link from "next/link";
import { Suspense } from "react";
import AboutMePane from "./components/AboutMePane/AboutMePane";
import ExperienceShowcase from "./components/ExperienceShowcase/ExperienceShowcase";
import HomeHeroGrid from "./components/HomeHeroGrid/HomeHeroGrid";
import InstagramGrid from "./components/InstagramGrid/InstagramGrid";
import ParallaxBanner from "./components/ParallaxBanner/ParallaxBanner";
import TestimonialCarousel, {
  Testimonial
} from "./components/TestimonialCarousel/TestimonialCarousel";

const baseTestimonials: Omit<Testimonial, "imageFileName" | "imageAlt">[] = [
  {
    quote:
      "Andre felt like a friend from the first meeting. Our photos capture exactly how joyful the day felt — every time we look at them we're back in that moment.",
    name: "Sarah & Michael",
    location: "The Bell Tower · Augusta, GA"
  },
  {
    quote:
      "We forgot he was even working. That's the highest compliment. The images are stunning and completely honest — no stiff poses, just us.",
    name: "Emily & James",
    location: "Magnolia Plantation · Aiken, SC"
  },
  {
    quote:
      "Choosing Covenant LX was the easiest decision we made. Andre made the whole day feel effortless and the photos are beyond what we imagined.",
    name: "Hannah & David",
    location: "Riverside Estate · Evans, GA"
  }
];

export default async function Home() {
  const heroData = await cloudinary.getImageData(null, HERO_SLIDER);
  const gridData = await cloudinary.getImageData(null, HOME_PAGE_GRID);
  const igData = await cloudinary.getImageData(null, INSTAGRAM_FEED);

  const heroImages =
    heroData && heroData.length > 0
      ? heroData.slice(0, 5)
      : (gridData || []).slice(0, 5);

  const instagramImages =
    igData && igData.length > 0
      ? igData.slice(0, 6)
      : (gridData || []).slice(0, 6);

  const safeGrid = gridData || [];

  // Experience — Engagements first (left), Weddings second (right)
  const experience = [
    {
      label: "Engagements",
      subLabel: "The Beginning",
      href: "/portfolio/engagement",
      imageFileName: safeGrid[1]?.fileName || safeGrid[0]?.fileName || "",
      alt:
        safeGrid[1]?.metadata?.alt ||
        "Covenant LX engagement photography sample",
      blurb:
        "The first chapter — sunlit, unhurried, and entirely yours."
    },
    {
      label: "Weddings",
      subLabel: "The Main Event",
      href: "/portfolio/wedding",
      imageFileName: safeGrid[0]?.fileName || "",
      alt:
        safeGrid[0]?.metadata?.alt || "Covenant LX wedding photography sample",
      blurb:
        "Real moments, real emotion — images you'll still love in thirty years."
    }
  ].filter(s => s.imageFileName);

  // Attach optional images to testimonials — carousel degrades gracefully
  const testimonialImagePool = safeGrid.slice(2, 8);
  const testimonials: Testimonial[] = baseTestimonials.map((t, i) => ({
    ...t,
    imageFileName: testimonialImagePool[i]?.fileName,
    imageAlt:
      testimonialImagePool[i]?.metadata?.alt ||
      `Photo from ${t.name}'s session`
  }));

  const parallaxOne = safeGrid[2]?.fileName || safeGrid[0]?.fileName || "";
  const parallaxTwo =
    safeGrid[safeGrid.length - 1]?.fileName ||
    safeGrid[3]?.fileName ||
    parallaxOne;

  // Grand tagline + CTA overlay for Parallax #2
  const heroInvite = (
    <div className="text-center max-w-5xl">
      <div className="h-px w-14 bg-gold mx-auto mb-8 md:mb-10" />
      <h2 className="font-display italic text-white leading-[0.95] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
        <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          where joy
        </span>
        <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] text-goldLight -mt-2 md:-mt-4">
          meets forever.
        </span>
      </h2>
      <div className="h-px w-14 bg-gold mx-auto mt-8 md:mt-10 mb-8 md:mb-10" />
      <Link
        href="/contact"
        className="inline-block border-2 border-white text-white uppercase tracking-[0.4em] text-xs md:text-sm px-10 md:px-14 py-4 md:py-5 hover:bg-white hover:text-dark transition-colors duration-300 ring-0 not-italic font-normal"
      >
        Inquire
      </Link>
    </div>
  );

  return (
    <>
      <HomeHeroGrid images={heroImages || []} />

      <AboutMePane />

      {/* Parallax break #1 */}
      {parallaxOne && (
        <ParallaxBanner
          imageFileName={parallaxOne}
          alt="Covenant LX editorial moment"
          heightClass="h-[55vh] md:h-[70vh]"
          overlayOpacityClass="bg-dark/35"
        />
      )}

      {/* Experience — grand full-bleed showcase, overlapping parallax above */}
      {experience.length > 0 && (
        <div className="relative z-10 -mt-24 md:-mt-40 lg:-mt-52">
          <div className="bg-white">
            <ExperienceShowcase items={experience} />
          </div>
        </div>
      )}

      {/* Suspense boundary required because Swiper's Autoplay reads the
          current time during render — Next 16 cacheComponents needs a
          boundary above any client component doing dynamic-time work. */}
      <Suspense fallback={null}>
        <TestimonialCarousel testimonials={testimonials} />
      </Suspense>

      {/* Parallax break #2 — carries the tagline + Inquire CTA */}
      {parallaxTwo && (
        <ParallaxBanner
          imageFileName={parallaxTwo}
          alt="Where joy meets forever"
          heightClass="h-[80vh] md:h-[95vh]"
          overlayOpacityClass="bg-dark/55"
          overlay={heroInvite}
        />
      )}

      {/* IG grid — full-bleed */}
      <div className="bg-white">
        <InstagramGrid images={instagramImages || []} />
      </div>
    </>
  );
}
