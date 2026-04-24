import { InvestmentPricingProps } from "@/interface/InvestmentPricingProps";

/**
 * Pricing statement — a confident declaration, not a price tag.
 * Generous whitespace, gold accent rule, centered Playfair Display.
 */
export default function InvestmentPricing({
  headline,
  eyebrow = "By Invitation"
}: InvestmentPricingProps) {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 md:px-10 py-20 md:py-20 text-center">
        {/* Gold accent line */}
        <div className="h-px w-16 sm:w-20 bg-gold mx-auto mb-8 md:mb-10" />

        {eyebrow && (
          <p className="font-display italic text-gold tracking-[0.35em] uppercase text-[11px] sm:text-lg mb-6 md:mb-8">
            {eyebrow}
          </p>
        )}

        <p className="font-display text-dark text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight max-w-5xl mx-auto">
          {headline}
        </p>
      </div>
    </section>
  );
}
