import { AboutDirectMessageProps } from "@/interface/AboutInterfaces";

/**
 * Intimate direct message to the couple. Deep charcoal background,
 * italic Playfair Display — meant to feel like a quiet word, not a pitch.
 */
export default function AboutDirectMessage({
  message
}: AboutDirectMessageProps) {
  return (
    <section className="bg-dark">
      <div className="container mx-auto px-6 md:px-10 py-24 md:py-32 lg:py-40 text-center">
        <p className="font-display italic text-goldLight tracking-[0.35em] uppercase text-[11px] sm:text-sm mb-6 sm:mb-8">
          A note to you
        </p>
        <div className="h-px w-12 sm:w-16 bg-gold mx-auto mb-10 md:mb-14" />

        <blockquote className="max-w-3xl mx-auto">
          <p className="font-display italic text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.35] tracking-tight">
            &ldquo;{message}&rdquo;
          </p>
        </blockquote>

        <p className="mt-10 md:mt-14 font-display italic text-goldLight text-xl md:text-2xl">
          — Andre
        </p>
      </div>
    </section>
  );
}
