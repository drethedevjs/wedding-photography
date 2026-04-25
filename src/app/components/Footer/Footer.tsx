import cloudinary from "@/utils/cloudinary";
import Image from "next/image";
import Link from "next/link";

const SOCIALS = [
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
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/covenantlx/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.3-5.4s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.5-1 3.8-.3 1.1.6 2 1.6 2 2 0 3.5-2.1 3.5-5.1 0-2.7-1.9-4.5-4.7-4.5A4.9 4.9 0 0 0 7.4 11a4.4 4.4 0 0 0 1 2.9c.2.2.2.3.1.5l-.3 1.1c0 .2-.2.2-.4.1-1.4-.6-2.3-2.7-2.3-4.3 0-3.5 2.5-6.7 7.3-6.7 3.8 0 6.8 2.7 6.8 6.4 0 3.8-2.4 6.9-5.8 6.9-1.1 0-2.2-.6-2.6-1.3l-.7 2.7c-.3 1-1 2.2-1.4 3A10 10 0 1 0 12 2z" />
      </svg>
    )
  }
];

export default async function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-dark text-white">
      <div className="container mx-auto px-6 md:px-10 py-16 lg:py-20">
        {/* Top — centered sub-mark + tagline */}
        <div className="flex flex-col items-center text-center">
          <Link href="/" aria-label="Covenant LX — Home">
            <Image
              src={cloudinary.getClientImageSrc(
                "logo-white-SUBMARK1-augusta-wedding-photographer_ooclgu"
              )}
              width={200}
              height={200}
              alt="Covenant LX sub-mark"
              className="w-28 h-auto opacity-90"
            />
          </Link>
          <p className="font-display italic text-goldLight tracking-[0.3em] uppercase text-xs mt-6">
            Where joy meets forever
          </p>
        </div>

        {/* Middle — nav + socials */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-center">
          {/* Nav */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 text-sm uppercase tracking-[0.25em]">
            <Link href="/about" className="hover:text-gold transition-colors">
              About
            </Link>
            <Link
              href="/portfolio/wedding"
              className="hover:text-gold transition-colors"
            >
              Weddings
            </Link>
            <Link
              href="/portfolio/engagement"
              className="hover:text-gold transition-colors"
            >
              Engagements
            </Link>
          </nav>

          {/* Service area — center */}
          <p className="text-center text-xs uppercase tracking-[0.25em] text-white/70">
            Based in Augusta, GA · Serving the CSRA &amp; beyond
          </p>

          {/* Second nav + socials — right */}
          <div className="flex flex-col items-center md:items-end gap-5">
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3 text-sm uppercase tracking-[0.25em]">
              <Link
                href="/investment"
                className="hover:text-gold transition-colors"
              >
                Investment
              </Link>
              <Link
                href="/contact"
                className="hover:text-gold transition-colors"
              >
                Contact
              </Link>
            </nav>
            <div className="flex gap-5">
              {SOCIALS.map(s => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom — divider + copyright */}
        <div className="mt-14 pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60 tracking-wider">
          <p>© Covenant LX Wedding Photography · 2016 – {currentYear}</p>
          <p className="uppercase tracking-[0.25em]">
            Augusta, GA · CSRA Wedding Photographer
          </p>
        </div>
      </div>
    </footer>
  );
}
