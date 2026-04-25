import cloudinary from "@/utils/cloudinary";
import Image from "next/image";
import Link from "next/link";

interface ExperienceItem {
  label: string;
  subLabel: string;
  href: string;
  imageFileName: string;
  alt: string;
  blurb?: string;
}

interface ExperienceShowcaseProps {
  items: ExperienceItem[];
}

/**
 * Editorial experience showcase.
 * Each item renders as a full-bleed row with alternating image/text sides,
 * an oversized italic display heading, a roman numeral accent, and a
 * thin gold rule. Designed to feel grand — not a tidy grid of squares.
 */
export default function ExperienceShowcase({ items }: ExperienceShowcaseProps) {
  if (!items || items.length === 0) return null;

  const numerals = ["I.", "II.", "III.", "IV.", "V."];

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="text-center px-6 pt-20 lg:pt-28 pb-4">
        <p className="font-display italic text-gold tracking-[0.3em] uppercase text-sm mb-4">
          II. Experience
        </p>
        <h2 className="font-display text-dark text-4xl sm:text-5xl lg:text-6xl leading-tight">
          What we capture
        </h2>
      </div>

      <div className="divide-y divide-lightGray">
        {items.map((item, idx) => {
          const imageOnRight = idx % 2 === 0; // 0: right, 1: left, ...
          return (
            <div
              key={`${item.label}-${idx}`}
              className="relative py-16 md:py-24 lg:py-32"
            >
              {/* Decorative oversized numeral — sits off-axis, very low opacity */}
              <span
                aria-hidden
                className={`pointer-events-none absolute font-display italic text-gold/15 select-none leading-none text-[28vw] md:text-[18vw] lg:text-[14rem] ${
                  imageOnRight
                    ? "left-0 md:left-4 lg:left-8 top-6"
                    : "right-0 md:right-4 lg:right-8 top-6"
                }`}
              >
                {numerals[idx] || `${idx + 1}.`}
              </span>

              <div className="container mx-auto px-6 md:px-10 relative">
                <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
                  {/* Image */}
                  <div
                    className={`col-span-12 md:col-span-7 ${
                      imageOnRight ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <Link
                      href={item.href}
                      className="group block relative overflow-hidden aspect-[4/5] md:aspect-[4/5] lg:aspect-[5/6] w-full"
                    >
                      <Image
                        src={cloudinary.getClientImageSrc(item.imageFileName)}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-500" />
                      {/* Hover hint */}
                      <span className="absolute bottom-6 right-6 text-white uppercase tracking-[0.3em] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View →
                      </span>
                    </Link>
                  </div>

                  {/* Text */}
                  <div
                    className={`col-span-12 md:col-span-5 relative z-10 ${
                      imageOnRight ? "md:order-1" : "md:order-2"
                    } ${
                      imageOnRight
                        ? "md:pr-0 lg:-mr-10 xl:-mr-16"
                        : "md:pl-0 lg:-ml-10 xl:-ml-16"
                    }`}
                  >
                    <div
                      className={`bg-white md:py-10 md:px-8 lg:p-12 ${
                        imageOnRight ? "md:text-right" : "md:text-left"
                      } text-center md:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.25)]`}
                    >
                      <p className="font-display italic text-gold tracking-[0.3em] uppercase text-xs mb-3">
                        {numerals[idx] || `${idx + 1}.`} {item.subLabel}
                      </p>
                      <h3 className="font-display italic text-dark text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6">
                        {item.label}
                      </h3>
                      <div
                        className={`h-px w-16 bg-gold mb-6 mx-auto ${
                          imageOnRight ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
                        }`}
                      />
                      {item.blurb && (
                        <p className="text-secondary text-lg md:text-xl italic leading-relaxed mb-8 max-w-md md:max-w-none mx-auto">
                          {item.blurb}
                        </p>
                      )}
                      <Link
                        href={item.href}
                        className="inline-block border border-dark text-dark uppercase tracking-[0.3em] text-xs px-8 py-4 hover:bg-dark hover:text-white transition-colors duration-300"
                      >
                        Explore the gallery
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
