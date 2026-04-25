"use client";
import cloudinary from "@/utils/cloudinary";
import useDarkMode from "@/utils/useDarkMode";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MobileHeader from "./MobileHeader";

const portfolioLinks = [
  { label: "Weddings", href: "/portfolio/wedding" },
  { label: "Engagements", href: "/portfolio/engagement" }
];

export default function Header() {
  const [portfolioOpen, setPortfolioOpen] = useState<boolean>(false);
  const { isDarkMode } = useDarkMode();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setPortfolioOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav>
      {/* Desktop */}
      <div className="header-container">
        <div className="header-group">
          <Link href="/about">About</Link>
          <Link href="/investment">Investment</Link>
        </div>
        <div className="logo">
          <Link href="/">
            {isDarkMode ? (
              <Image
                src={cloudinary.getClientImageSrc(
                  `logo-white-MAIN-augusta-wedding-photographer_aghooy.png`
                )}
                alt="Covenant LX main logo"
                width={386}
                height={196}
                priority
                className="w-60 h-auto"
              />
            ) : (
              <Image
                src={cloudinary.getClientImageSrc(
                  `logo-blk-MAIN-augusta-wedding-photographer_gmfegu.png`
                )}
                alt="Covenant LX main logo"
                width={386}
                height={196}
                priority
                className="w-60 h-auto"
              />
            )}
          </Link>
        </div>
        <div className="header-ul-rev header-group">
          {/* Portfolio dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="header-link not-italic! font-normal! ring-0! p-0! uppercase"
              onClick={() => setPortfolioOpen(!portfolioOpen)}
            >
              Portfolio
            </button>
            {portfolioOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 rounded shadow-lg bg-white dark:bg-dark border border-gray-100 dark:border-gray-700 z-50">
                {portfolioLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setPortfolioOpen(false)}
                    className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 text-center"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile */}
      <MobileHeader />
    </nav>
  );
}
