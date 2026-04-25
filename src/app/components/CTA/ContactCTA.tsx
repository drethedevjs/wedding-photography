import Link from "next/link";

export default function ContactCTA({
  text,
  shortPhrase,
  btnText,
  linkTo
}: {
  text: string;
  shortPhrase: string;
  btnText: string;
  linkTo: string;
}) {
  return (
    <section className="bg-dark">
      <div className="container mx-auto px-6 md:px-10 py-24 md:py-32 lg:py-40 text-center">
        <div className="h-px w-14 bg-gold mx-auto mb-8 md:mb-10" />
        <h2 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight max-w-4xl mx-auto">
          {text}{" "}
          <span className="block italic text-goldLight mt-2">
            {shortPhrase}
          </span>
        </h2>

        <div className="mt-12 md:mt-16">
          <Link
            href={linkTo}
            className="inline-block bg-primary text-white uppercase tracking-[0.35em] text-xs sm:text-sm px-10 md:px-14 py-5 md:py-6 hover:bg-primaryDark transition-colors duration-300 ring-0 not-italic font-normal"
          >
            {btnText}
          </Link>
        </div>
      </div>
    </section>
  );
}
