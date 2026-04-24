/**
 * Body copy block for the Investments page.
 * Centered, DM Sans, max-width container with comfortable line height.
 * Copy is intentionally hard-coded here — page owns what it says.
 */
export default function InvestmentBody() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 md:px-10 pb-20 md:pb-20 max-w-3xl">
        <div className="space-y-8 md:space-y-10 text-center">
          <p className="font-body text-secondary text-lg md:text-xl leading-relaxed md:leading-[1.9] tracking-wide">
            Packages are like buying a suit off the rack — they kind of fit, but
            not really. At Covenant LX, I build a custom collection around what
            you actually need, nothing more and nothing less.
          </p>
          <p className="font-body text-secondary text-lg md:text-xl leading-relaxed md:leading-[1.9] tracking-wide">
            Investments start at $2,999, with most couples investing around
            $3,800 on average.
          </p>
          <p className="font-body text-secondary text-lg md:text-xl leading-relaxed md:leading-[1.9] tracking-wide">
            No confusing pricing sheets. No paying for things you don&apos;t
            need just to unlock more hours. Just a real conversation about your
            day, your priorities, and what makes sense for you.
          </p>
        </div>
      </div>
    </section>
  );
}
