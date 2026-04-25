import ContactClosing from "@/app/components/Contact/ContactClosing";
import ContactHeadline from "@/app/components/Contact/ContactHeadline";
import ContactSplit from "@/app/components/Contact/ContactSplit";
import { ContactSocialLink } from "@/interface/ContactInterfaces";
import cloudinary from "@/utils/cloudinary";
import { HERO_SLIDER } from "@/utils/tags";

// TODO(dre): swap these two constants once you give me the real values.
// Phone displayed on the page + used for the tel: link (digits only).
const PHONE_DISPLAY = "706-426-3022";
const PHONE_DIGITS = "7064263022";
// Cloudinary public_id for the tall editorial image. If left null we'll
// fall back to a frame from the HERO_SLIDER tag so the page never renders
// without imagery.
const CONTACT_IMAGE_FILENAME: string =
  "https://res.cloudinary.com/ctvphotovideo/image/upload/augusta-ga-wedding-photographer-muff-10_pcwf5j.jpg";

const SUBHEADING =
  "Your wedding day deserves more than an inbox form. Reach out directly — I respond to every message personally.";

const CLOSING =
  "Not sure what to say? Just tell me your date and where you're getting married. That's enough to get started.";

const SOCIAL_LINKS: ContactSocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/covenantlx",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
      </svg>
    )
  },
  {
    label: "Facebook",
    href: "https://facebook.com/covenantlx",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.6c0-.9.3-1.5 1.6-1.5H17V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10.5H8v3h2.6V21h2.9z" />
      </svg>
    )
  }
];

export const metadata = {
  title: "Contact | Covenant LX Wedding Photography",
  description:
    "Reach out directly to Dre at Covenant LX — Augusta, GA wedding photographer. Text, call, or email; every message is answered personally."
};

export default async function Contact() {
  // Pull a hero frame as a sensible fallback so the page is never empty
  // while the hardcoded filename above is still being chosen.
  const heroData = await cloudinary.getImageData(null, HERO_SLIDER);
  const safeHero =
    Array.isArray(heroData) && heroData.length > 0 ? heroData : [];
  // Reach for a frame the About page doesn't already use as its hero.
  const fallback = safeHero[1] || safeHero[0];

  const imageFileName = CONTACT_IMAGE_FILENAME ?? fallback?.fileName;
  const alt =
    fallback?.metadata?.alt || "A Covenant LX couple on their wedding day";

  return (
    <>
      <ContactHeadline headline="Let's start something beautiful." />

      <ContactSplit
        imageFileName={imageFileName}
        alt={alt}
        subheading={SUBHEADING}
        phoneDisplay={PHONE_DISPLAY}
        phoneHref={`tel:${PHONE_DIGITS}`}
        emailDisplay="andre@covenantlx.com"
        emailHref="mailto:andre@covenantlx.com?subject=I'm%20getting%20married%20%7C%20Covenant%20LX"
      />

      <ContactClosing message={CLOSING} links={SOCIAL_LINKS} />
    </>
  );
}
