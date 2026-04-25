import { ContactClosingProps } from "@/interface/ContactInterfaces";

/**
 * Single quiet line that lowers the barrier to reaching out — italic
 * DM Sans, centered, with generous breathing room on either side.
 */
export default function ContactClosing({
  message,
  links
}: ContactClosingProps) {
  return (
    <>
      <section className="bg-lightGray pb-16 sm:pb-20 lg:pb-24">
        <div className="container mx-auto px-6 md:px-10 max-w-3xl text-center">
          <p className="font-body italic text-dark/70 text-base sm:text-lg lg:text-xl leading-relaxed">
            {message}
          </p>
        </div>
      </section>

      <section className="bg-lightGray pb-24 sm:pb-32 lg:pb-40">
        <div className="container mx-auto px-6 md:px-10">
          <div className="mx-auto h-px w-24 sm:w-32 bg-gold/60 mb-10 sm:mb-12" />
          <div className="flex items-center justify-center gap-6 sm:gap-8">
            {links.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center size-12 rounded-full border border-gold/50 text-dark/70 transition-all duration-300 hover:text-gold hover:border-gold hover:-translate-y-0.5"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
