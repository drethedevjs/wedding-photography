"use client";
import cloudinary from "@/utils/cloudinary";
import useDarkMode from "@/utils/useDarkMode";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Investment", href: "/investment" }
];

const portfolioLinks = [
  { label: "Weddings", href: "/portfolio/wedding" },
  { label: "Engagements", href: "/portfolio/engagement" }
];

const socialLinks = [
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

export default function MobileHeader() {
  const [open, setOpen] = useState<boolean>(false);
  const [portfolioOpen, setPortfolioOpen] = useState<boolean>(false);
  const { isDarkMode } = useDarkMode();
  const router = useRouter();
  const pathname = usePathname();

  // Lock body scroll while panel is open
  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Reset accordion when panel closes
  useEffect(() => {
    if (!open) setPortfolioOpen(false);
  }, [open]);

  const close = () => setOpen(false);

  const navigate = (href: string) => {
    close();
    router.push(href);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const portfolioActive = portfolioLinks.some(l => isActive(l.href));

  const submarkLogo = isDarkMode
    ? "logo-white-MAIN-augusta-wedding-photographer_aghooy"
    : "logo-blk-MAIN-augusta-wedding-photographer_gmfegu";

  return (
    <div className="mobile-header-container">
      {/* Top bar — matches site header background (transparent in light, dark in dark mode) */}
      <div className="relative z-40 flex items-center justify-between px-5 pt-2 dark:bg-dark">
        <div className="flex-1">
          <Link href="/" aria-label="Covenant LX home">
            <Image
              src={cloudinary.getClientImageSrc(submarkLogo)}
              alt="Covenant LX"
              width={300}
              height={300}
              className="h-20 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Animated hamburger / X */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu-panel"
          onClick={() => setOpen(v => !v)}
          className="relative h-10 w-10 flex items-center justify-center text-dark dark:text-white focus:outline-none"
        >
          <span
            className={`absolute h-[2px] w-7 bg-current transition-all duration-300 ease-out ${
              open ? "rotate-45 translate-y-0" : "-translate-y-[7px]"
            }`}
          />
          <span
            className={`absolute h-[2px] w-7 bg-current transition-opacity duration-200 ease-out ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[2px] w-7 bg-current transition-all duration-300 ease-out ${
              open ? "-rotate-45 translate-y-0" : "translate-y-[7px]"
            }`}
          />
        </button>
      </div>

      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={close}
        className={`fixed inset-0 z-30 bg-dark/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-in panel — inherits header background */}
      <aside
        id="mobile-menu-panel"
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-40 h-screen w-[85vw] max-w-sm bg-lightGray dark:bg-dark shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Logo mark */}
        <div className="pt-16 pb-10 flex items-center justify-center">
          <Link href="/" onClick={close} aria-label="Covenant LX home">
            <Image
              src={cloudinary.getClientImageSrc(submarkLogo)}
              alt="Covenant LX"
              width={300}
              height={300}
              className="h-16 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-8">
          <ul className="flex flex-col items-center gap-8 text-center">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <button
                  type="button"
                  onClick={() => navigate(href)}
                  className={`font-display text-3xl tracking-wide text-dark dark:text-white pb-1 transition-colors duration-200 ${
                    isActive(href)
                      ? "border-b border-gold"
                      : "border-b border-transparent hover:border-gold/60"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}

            {/* Portfolio accordion */}
            <li className="w-full flex flex-col items-center">
              <button
                type="button"
                onClick={() => setPortfolioOpen(v => !v)}
                aria-expanded={portfolioOpen}
                className={`font-display text-3xl tracking-wide text-dark dark:text-white pb-1 inline-flex items-center gap-2 transition-colors duration-200 ${
                  portfolioActive
                    ? "border-b border-gold"
                    : "border-b border-transparent hover:border-gold/60"
                }`}
              >
                Portfolio
                <ChevronDownIcon
                  className={`h-6 w-6 transition-transform duration-300 ${
                    portfolioOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid w-full transition-all duration-300 ease-out ${
                  portfolioOpen
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <ul className="overflow-hidden flex flex-col items-center gap-4 font-body">
                  {portfolioLinks.map(({ label, href }) => (
                    <li key={href}>
                      <button
                        type="button"
                        onClick={() => navigate(href)}
                        className={`text-lg tracking-[0.2em] uppercase text-secondary dark:text-lightGray pb-1 transition-colors duration-200 ${
                          isActive(href)
                            ? "border-b border-gold text-dark dark:text-white"
                            : "border-b border-transparent hover:text-dark dark:hover:text-white"
                        }`}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className={`font-display text-3xl tracking-wide text-dark dark:text-white pb-1 transition-colors duration-200 ${
                  isActive("/contact")
                    ? "border-b border-gold"
                    : "border-b border-transparent hover:border-gold/60"
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* CTA + Socials */}
        <div className="px-8 pb-10 pt-8">
          <Link
            href="/contact"
            onClick={close}
            className="block w-full text-center bg-primary text-white uppercase tracking-[0.35em] text-xs sm:text-sm py-5 hover:bg-primaryDark transition-colors duration-300"
          >
            Start Your Story
          </Link>

          <div className="mt-8 pt-6 border-t border-gold/40 flex items-center justify-center gap-8 text-dark dark:text-white">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
