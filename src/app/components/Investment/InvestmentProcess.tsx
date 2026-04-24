import { InvestmentProcessProps } from "@/interface/InvestmentInterfaces";

/**
 * Three-step process: Inquiry → Consultation → Your Proposal.
 * Bold numbered label in gold, step title in Playfair Display,
 * description in DM Sans. Light gray background.
 */
export default function InvestmentProcess({ steps }: InvestmentProcessProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="bg-lightGray">
      <div className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="text-center mb-14 md:mb-20">
          <p className="font-display italic text-gold tracking-[0.35em] uppercase text-[11px] sm:text-lg mb-5">
            The Process
          </p>
          <h2 className="font-display text-dark text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            How we get to yours
          </h2>
          <div className="h-px w-16 bg-gold mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={`${step.number}-${idx}`}
              className="text-center md:text-left flex flex-col items-center md:items-start"
            >
              <p className="font-display text-gold text-4xl md:text-5xl lg:text-6xl leading-none tracking-tight mb-5">
                {step.number}
              </p>
              <div className="h-px w-10 bg-gold mb-6" />
              <h3 className="font-display text-dark text-2xl md:text-3xl leading-tight tracking-tight mb-4">
                {step.title}
              </h3>
              <p className="font-body text-secondary text-base md:text-lg leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
