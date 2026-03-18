import Link from "next/link";
import HeroInsetText from "../components/HeroInsetText/HeroInsetText";
import TextTitleBlock from "../components/TextTitleBlock/TextTitleBlock";
import TextTitleBlockMulti from "../components/TextTitleBlockMulti/TextTitleBlockMulti";

export default function About() {
  return (
    <>
      <HeroInsetText />
      <div className="container mx-auto lg:px-32 md:px-20 px-10 mt-10">
        <p className="text-center text-base mb-5">
          I started Covenant LX because I believe weddings aren't just events —
          they're the beginning of a family. That belief drives everything about
          how I work: unhurried, personal, and fully present on your day.
        </p>
        <p className="text-center text-base mb-10">
          I'm Andre Thomas — husband, dad of three, and a photographer who
          genuinely loves this work. I'd love to get to know you and hear what
          you're dreaming your wedding day looks like.
        </p>
        <hr className="border-t-4 border-gold mb-5" />
        <h2 className="text-center uppercase text-3xl tracking tracking-widest text-gold">
          Augusta Wedding Photographer
        </h2>
        <hr className="border-t-2 border-b border-gold mt-5" />

        <div className="mt-10">
          <TextTitleBlock heading="Why Weddings Matter to Me">
            I believe a wedding is more than a celebration — it's a commitment.
            Two people choosing each other and building something that outlasts
            the day itself. That's not a small thing. That's everything. It's
            why I don't treat your wedding like a job. I treat it like it
            matters — because it does.
          </TextTitleBlock>
          <TextTitleBlockMulti heading="How I work">
            <>
              My own family is my anchor — my wife and three kids remind me
              daily what it looks like to choose love over and over again. That
              perspective comes with me to every wedding. I'm relaxed, I'm
              present, and I genuinely care about the people in front of my
              lens.
            </>
            <></>
          </TextTitleBlockMulti>
        </div>

        <Link href="/contact">
          <button>Let's Connect</button>
        </Link>
      </div>
    </>
  );
}
