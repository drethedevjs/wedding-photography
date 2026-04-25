import Link from "next/link";

/**
 * Closing CTA — warm, light background. Playfair headline, single primary
 * button to /contact. This is the handshake at the end of the page.
 */
export default function AboutClosingCTA() {
  return (
    <section className="bg-lightGray">
      <div className="container mx-auto px-6 md:px-10 py-24 md:py-32 lg:py-40 text-center">
        <div className="h-px w-14 bg-gold mx-auto mb-8 md:mb-10" />
        <h2 className="font-display text-dark text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight max-w-4xl mx-auto">
          Ready to meet your photographer?
          <span className="block italic text-gold mt-3 md:mt-4">
            Let&apos;s connect.
          </span>
        </h2>

        <div className="mt-12 md:mt-16">
          <Link
            href="/contact"
            className="inline-block bg-primary text-white uppercase tracking-[0.35em] text-xs sm:text-sm px-10 md:px-14 py-5 md:py-6 hover:bg-transparent hover:text-primaryDark hover:outline-primaryDark hover:outline-1 transition-colors duration-300 ring-0 not-italic font-normal"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </section>
  );
}
