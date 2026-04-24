import { InvestmentIncludesProps } from "@/interface/InvestmentIncludesProps";

/**
 * "What's included" — every collection.
 * Two-column grid on md+, stacked on mobile. Gold dash accent
 * above each label keeps the editorial rhythm of the page.
 */
export default function InvestmentIncludes({ items }: InvestmentIncludesProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="bg-white border-t border-lightGray">
      <div className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="text-center mb-14 md:mb-20">
          <p className="font-display italic text-gold tracking-[0.35em] uppercase text-[11px] sm:text-lg mb-5">
            What&apos;s Included
          </p>
          <h2 className="font-display text-dark text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            Every collection, carefully considered
          </h2>
          <div className="h-px w-16 bg-gold mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 md:gap-y-16 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="flex flex-col items-start text-left"
            >
              {/* Gold dash accent */}
              <span aria-hidden className="h-px w-8 bg-gold mb-5" />
              <h3 className="font-display text-dark text-2xl md:text-3xl leading-tight tracking-tight mb-3">
                {item.label}
              </h3>
              <p className="font-body text-secondary text-base md:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
