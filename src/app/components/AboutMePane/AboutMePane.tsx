import cloudinary from "@/utils/cloudinary";
import Image from "next/image";
import Link from "next/link";

export default function AboutMePane() {
  return (
    <section className="relative w-full bg-lightGray overflow-hidden">
      {/* Oversized decorative Roman numeral watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-4 top-6 md:top-10 font-display text-[22vw] md:text-[14vw] leading-none text-dark/[0.04] select-none"
      >
        Hello.
      </span>

      <div className="container mx-auto px-6 md:px-10 lg:px-20 py-24 lg:py-32 relative">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          {/* Image collage — left on desktop, top on mobile */}
          <div className="col-span-12 lg:col-span-6 relative order-1">
            <div className="relative w-full">
              {/* Primary image */}
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto overflow-hidden">
                <Image
                  src={cloudinary.getImageSrc(
                    "augusta-ga-wedding-photographer-andre-2_y2uers"
                  )}
                  alt="Andre, Covenant LX wedding photographer"
                  fill
                  sizes="(max-width: 1024px) 80vw, 35vw"
                  className="object-cover"
                />
              </div>
              {/* Secondary offset image */}
              <div className="hidden md:block absolute -bottom-10 -left-6 lg:-left-14 w-44 lg:w-56 aspect-[3/4] shadow-xl rotate-[-4deg] overflow-hidden ring-8 ring-lightGray">
                <Image
                  src={cloudinary.getImageSrc(
                    "augusta-ga-wedding-photographer-andre-1_redvxe"
                  )}
                  alt="Andre dressed in a tuxedo."
                  fill
                  sizes="(max-width: 1024px) 40vw, 15vw"
                  className="object-cover"
                />
              </div>
              {/* Thin gold accent line */}
              <div className="hidden lg:block absolute -right-8 top-1/2 w-20 h-px bg-gold" />
            </div>
          </div>

          {/* Copy — right on desktop, bottom on mobile */}
          <div className="col-span-12 lg:col-span-6 order-2 lg:pl-6 xl:pl-12">
            <p className="font-display italic text-gold tracking-[0.3em] uppercase text-sm mb-4">
              I. About
            </p>
            <h2 className="font-display text-dark leading-[0.95] mb-10">
              <span className="block text-5xl sm:text-6xl lg:text-7xl">
                I&apos;m
              </span>
              <span className="block text-6xl sm:text-7xl lg:text-8xl italic text-gold -mt-1">
                Andre.
              </span>
            </h2>
            <div className="space-y-6 text-secondary text-lg md:text-xl leading-relaxed">
              <p>
                Your wedding day is one of the first pages of the most important
                story you&apos;ll ever live. I&apos;m Andre, and at Covenant LX
                I create bright, vibrant, joyful images for couples in Augusta
                &amp; the CSRA — photos that don&apos;t just show what happened,
                but how it felt.
              </p>
              <p>
                Couples who work with me say the same thing: they forgot I was
                even working. That&apos;s the goal. Real moments. Real emotion.
                Images you&apos;ll still love in 30 years. Let&apos;s talk about
                your day →
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link
                href="/about"
                className="inline-block border border-dark text-dark uppercase tracking-[0.3em] text-xs px-8 py-4 hover:bg-dark hover:text-white transition-colors duration-300"
              >
                More About Me
              </Link>
              <span className="font-display italic text-2xl md:text-3xl text-dark">
                — Andre
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
