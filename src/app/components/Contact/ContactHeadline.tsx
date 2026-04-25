import { ContactHeadlineProps } from "@/interface/ContactInterfaces";

/**
 * Editorial Contact opener. The headline scales fluidly with the viewport
 * and runs almost edge-to-edge so it's the first thing — and only thing —
 * the eye reads. The italic emphasis word picks up the brand gold.
 *
 * The section keeps `pb-0` and the next section pulls itself up with a
 * negative margin so the lower edge of the headline overlaps the image,
 * giving the editorial bleed the brief asks for.
 */
export default function ContactHeadline({ headline }: ContactHeadlineProps) {
  // Split off the final word so we can italicize + gold-tint it without
  // hard-coding markup at the call site.
  const trimmed = headline.trim();
  const lastSpace = trimmed.lastIndexOf(" ");
  const lead = lastSpace > -1 ? trimmed.slice(0, lastSpace) : trimmed;
  const accent = lastSpace > -1 ? trimmed.slice(lastSpace + 1) : "";

  return (
    <section className="relative bg-lightGray pt-20 sm:pt-28 lg:pt-36 pb-0 z-20">
      <div className="px-6 sm:px-10 lg:px-14">
        <h1 className="font-display italic text-gold tracking-[0.35em] uppercase text-[11px] sm:text-sm mb-5 sm:mb-7">
          Contact
        </h1>
        <div className="h-px w-12 sm:w-16 bg-gold mb-8 sm:mb-12" />

        <p className="font-display text-dark font-light leading-[0.9] tracking-tight text-[16vw] sm:text-[14vw] lg:text-[13vw] xl:text-[190px]">
          {lead}
          {accent && (
            <>
              {" "}
              <span className="italic text-gold">{accent}</span>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
