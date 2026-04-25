import { AboutValuesProps } from "@/interface/AboutInterfaces";

/**
 * Three stacked values. Each one has a Playfair label and a DM Sans
 * description, separated by a thin gold divider — quiet, editorial rhythm.
 */
export default function AboutValues({ values }: AboutValuesProps) {
  return (
    <section className="bg-lightGray">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 py-20 md:py-28 lg:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <p className="font-display italic text-gold tracking-[0.3em] uppercase text-xs sm:text-sm mb-5">
              What I Believe
            </p>
            <div className="h-px w-12 bg-gold mx-auto" />
          </div>

          <ul className="flex flex-col">
            {values.map((value, index) => (
              <li
                key={value.label}
                className={
                  index === 0
                    ? "py-10 md:py-14"
                    : "py-10 md:py-14 border-t border-gold/40"
                }
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                  <div className="md:col-span-4">
                    <h3 className="font-display text-dark text-2xl md:text-3xl lg:text-4xl leading-tight">
                      {value.label}
                    </h3>
                  </div>
                  <div className="md:col-span-8">
                    <p className="font-body text-secondary text-base md:text-lg leading-[1.8]">
                      {value.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
