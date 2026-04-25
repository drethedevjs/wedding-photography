import { AboutIntroProps } from "@/interface/AboutInterfaces";
import Image from "next/image";

/**
 * Two-column intro — portrait on the left, warm body copy on the right.
 * Mobile-first: stacks with portrait on top, copy below. Generous padding
 * on all sides so the section breathes like an editorial spread.
 */
export default function AboutIntro({
  portraitFileName = "andre/augusta-ga-wedding-photographer-andre-2.jpg",
  portraitAlt = "Andre Thomas, Covenant LX wedding photographer"
}: AboutIntroProps) {
  const portraitSrc = `${process.env.NEXT_PUBLIC_CDN_PREFIX}/${portraitFileName}`;

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 py-20 md:py-28 lg:py-36">
        <div className="grid grid-cols-12 gap-10 md:gap-14 lg:gap-20 items-center">
          {/* Portrait */}
          <div className="col-span-12 lg:col-span-5 order-1">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden">
              <Image
                src={portraitSrc}
                alt={portraitAlt}
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Body copy */}
          <div className="col-span-12 lg:col-span-7 order-2 lg:pl-6 xl:pl-10">
            <p className="font-display italic text-gold tracking-[0.3em] uppercase text-xs sm:text-sm mb-5">
              Hi, I&apos;m Dre
            </p>
            <div className="h-px w-12 bg-gold mb-8 md:mb-10" />

            <div className="space-y-6 text-secondary text-lg md:text-xl leading-[1.8] font-body">
              <p>
                I believe in marriages — not just weddings. Anyone can show up
                with a camera. I show up because I genuinely want to see you
                make it. The first dance, yes. But also the anniversary photos
                five years from now. The baby announcements. The milestones
                that prove the day meant something.
              </p>
              <p className="font-display italic text-dark text-2xl md:text-3xl leading-snug">
                That&apos;s why I do this.
              </p>
              <p>
                I&apos;m Dre, and at Covenant LX I bring more than a lens to
                your wedding day. I bring calm. When the timeline slips, when
                the flowers aren&apos;t quite right, when nerves are running
                high — I&apos;ve been there, and I know how to hold the moment
                steady so you don&apos;t have to.
              </p>
              <p>
                My faith and my family are the foundation of everything I do.
                I understand what it means to commit to someone for life, and
                I take it seriously that you&apos;ve invited me into one of
                the most sacred days of yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
