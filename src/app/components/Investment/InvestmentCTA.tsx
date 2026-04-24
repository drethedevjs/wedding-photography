import Link from "next/link";

/**
 * Closing CTA — deep charcoal background with a confident line and
 * a single primary button to /contact. Every prior section leads here.
 */
export default function InvestmentCTA() {
  return (
    <section className="bg-dark">
      <div className="container mx-auto px-6 md:px-10 py-24 md:py-32 lg:py-40 text-center">
        <div className="h-px w-14 bg-gold mx-auto mb-8 md:mb-10" />
        <h2 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight max-w-4xl mx-auto">
          Ready to build yours?{" "}
          <span className="block italic text-goldLight mt-2">
            Let&apos;s talk.
          </span>
        </h2>

        <div className="mt-12 md:mt-16">
          <Link
            href="/contact"
            className="inline-block bg-primary text-white uppercase tracking-[0.35em] text-xs sm:text-sm px-10 md:px-14 py-5 md:py-6 hover:bg-primaryDark transition-colors duration-300 ring-0 not-italic font-normal"
          >
            Start the Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
