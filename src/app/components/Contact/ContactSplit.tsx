import { ContactSplitProps } from "@/interface/ContactInterfaces";
import cloudinary from "@/utils/cloudinary";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

/**
 * Editorial layout: a full-bleed image runs the full window width, and
 * a content card overlaps its right portion — bottom-right on desktop,
 * stacked-and-lifted on mobile. The negative margin at the top also
 * pulls the image up under the giant headline so the editorial bleed
 * continues from the section above.
 *
 * The card's left border picks up the gold accent so it still feels
 * stitched to the image edge the way the column layout did.
 */
export default function ContactSplit({
  imageFileName,
  alt = "A Covenant LX couple on their wedding day",
  subheading,
  phoneDisplay,
  phoneHref,
  emailDisplay,
  emailHref
}: ContactSplitProps) {
  // Accept either a Cloudinary public_id (legacy pattern used elsewhere
  // in the site) or a fully-qualified https:// URL.
  const imageSrc = imageFileName
    ? imageFileName.startsWith("http")
      ? imageFileName
      : cloudinary.getClientImageSrc(imageFileName)
    : null;

  return (
    <section className="relative -mt-6 sm:-mt-10 lg:-mt-16 pb-20 sm:pb-28 lg:pb-36">
      {/* Full-bleed tall image — spans the full window width */}
      <div className="relative w-full h-[55vh] sm:h-[70vh] lg:h-[780px] min-h-[420px]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-dark/10" />
        )}
        {/* Subtle warm wash so the card edge reads cleanly against any frame */}
        <div className="absolute inset-0 bg-dark/10 mix-blend-multiply" />
      </div>

      {/* Content card — pulled up to overlap the image. On desktop it
          anchors to the right with a deep negative margin so it sits over
          the right portion of the image, vertically centered-ish. On
          mobile it stacks below and lifts up just enough to overlap the
          image's lower edge. */}
      <div className="container mx-auto px-6 md:px-20 lg:px-14">
        <div className="relative z-10 -mt-24 sm:-mt-32 lg:-mt-[460px] ml-auto w-full max-w-xl lg:max-w-3xl bg-lightGray border-t-2 lg:border-t-0 lg:border-l-2 border-gold/60 px-6 sm:px-10 lg:px-14 xl:px-20 py-10 sm:py-14 lg:py-20 shadow-[0_-20px_60px_-20px_rgba(26,26,26,0.25)] lg:shadow-[-30px_30px_60px_-25px_rgba(26,26,26,0.25)]">
          {/* Subheading */}
          <p className="font-body text-dark/75 text-base sm:text-lg leading-relaxed max-w-xl">
            {subheading}
          </p>

          {/* Divider */}
          <div className="h-px w-16 sm:w-20 bg-gold/70 my-10 sm:my-12" />

          {/* Phone */}
          <a
            href={phoneHref}
            className="group block mb-10 sm:mb-12"
            aria-label={`Text or call ${phoneDisplay}`}
          >
            <span className="flex items-center gap-3 mb-3 text-gold">
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              <span className="font-body uppercase tracking-[0.3em] text-[11px] sm:text-xs">
                Text or call
              </span>
            </span>
            <span className="font-display italic text-dark font-light leading-none text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight transition-colors duration-300 group-hover:text-gold">
              {phoneDisplay}
            </span>
            <span className="block mt-3 h-px w-0 bg-gold transition-all duration-500 group-hover:w-24" />
          </a>

          {/* Email */}
          <a
            href={emailHref}
            className="group block"
            aria-label={`Email ${emailDisplay}`}
          >
            <span className="flex items-center gap-3 mb-3 text-gold">
              <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
              <span className="font-body uppercase tracking-[0.3em] text-[11px] sm:text-xs">
                Email
              </span>
            </span>
            <span className="font-display italic text-dark font-light leading-[1.05] tracking-tight transition-colors duration-300 group-hover:text-gold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl break-words">
              {emailDisplay}
            </span>
            <span className="block mt-3 h-px w-0 bg-gold transition-all duration-500 group-hover:w-24" />
          </a>
        </div>
      </div>
    </section>
  );
}
