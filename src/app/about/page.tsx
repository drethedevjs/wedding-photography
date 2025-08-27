import Link from "next/link";
import HeroInsetText from "../components/HeroInsetText/HeroInsetText";
import TextTitleBlock from "../components/TextTitleBlock/TextTitleBlock";
import TextTitleBlockMulti from "../components/TextTitleBlockMulti/TextTitleBlockMulti";

export default function About() {
  return (
    <>
      <HeroInsetText />
      <div className="container mx-auto lg:px-32 md:px-20 px-10 mt-10">
        <p className="text-center mb-10">
          Covenant LX exists to serve engaged couples in the CSRA by providing
          them with bright and colorful lifestyle portraits. I'm Andre Thomas
          and I am thrilled that I get to connect with couples and to capture an
          array of portraits that will allow them to relive a very special day.
          It is nice to meet you. I look forward to connecting with you to
          discuss your wedding day, to get to know you, and to share with you
          all that Covenant LX has to offer.
        </p>
        <hr className="border-t-4 border-gold mb-5" />
        <h2 className="text-center uppercase text-3xl tracking tracking-widest text-gold">
          Augusta Wedding Photographer
        </h2>
        <hr className="border-t-2 border-b border-gold mt-5" />

        <div className="mt-10">
          <TextTitleBlock heading="Faith">
            If there's anything about me that I want to shine through the most,
            it's that I am a man of faith (Christian). I am thankful that the
            Lord graciously choose to reveal Himself to me and saved me during
            my college years. This fact defines me and everything that I do.
          </TextTitleBlock>
        </div>
        <TextTitleBlockMulti heading="Family">
          <>
            Another thing that I want people to know about me is that I love my
            family: my amazing wife and my three wonderful kids. When I die, I
            want it said of me that, “if there was one thing that Andre was good
            at was being a great husband and a loving father.”
          </>
          <>
            It's a beautiful thing when a man commit himself to the woman he
            loves. Not to romanticize the union-because marriage is hard-but the
            best things in life aren't easy.
          </>
          <>
            Weddings are the establishment of families and families are the
            cornerstone of our society. This is why weddings are meaningful to
            me.
          </>
        </TextTitleBlockMulti>

        <Link href="/contact">
          <button>Let's Connect</button>
        </Link>
      </div>
    </>
  );
}
