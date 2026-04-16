"use client";
import cloudinary from "@/utils/cloudinary";
import useDarkMode from "@/utils/useDarkMode";
import { Bars2Icon, ChevronDownIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import HeaderLogo from "./HeaderLogo";

const portfolioLinks = [
  { label: "Weddings", href: "/portfolio/wedding" },
  { label: "Engagements", href: "/portfolio/engagement" }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [portfolioOpen, setPortfolioOpen] = useState<boolean>(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] =
    useState<boolean>(false);
  const { isDarkMode } = useDarkMode();
  const router = useRouter();
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

  const navigate = (path: string) => {
    setMobileMenuOpen(false);
    setMobilePortfolioOpen(false);
    router.push(path);
  };

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
              className="header-link not-italic! font-normal! ring-0! p-0!"
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
      <div className="mobile-header-container">
        <div
          className={`p-5 flex flex-row dark:bg-dark ${mobileMenuOpen ? "hidden" : "flex"}`}
        >
          <div className="place-content-center text-secondary ml-4">
            <Bars2Icon className="size-10" onClick={toggleMenu} />
          </div>
          <HeaderLogo />
        </div>
        <div
          className={`mobile-links ${mobileMenuOpen ? "flex flex-col" : "hidden"}`}
        >
          <div className="p-5 flex flex-row mb-10 bg-white dark:bg-dark">
            <div className="place-content-center text-secondary ml-4">
              <XMarkIcon
                className="size-10 dark:text-white"
                onClick={toggleMenu}
              />
            </div>
            <HeaderLogo />
          </div>
          <ul className="py-10 text-3xl">
            <li onClick={() => navigate("/")} className="header-link">
              Home
            </li>
            <li onClick={() => navigate("/about")} className="header-link">
              About
            </li>
            <li onClick={() => navigate("/investment")} className="header-link">
              Investment
            </li>

            {/* Portfolio accordion */}
            <li className="header-link">
              <button
                onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                className="header-link not-italic! font-normal! ring-0! p-0! flex"
              >
                Portfolio
                <ChevronDownIcon
                  className={`size-6 transition-transform duration-200 ${mobilePortfolioOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobilePortfolioOpen && (
                <ul className="mt-3 ml-4 flex flex-col gap-3 text-2xl">
                  {portfolioLinks.map(({ label, href }) => (
                    <li
                      key={href}
                      onClick={() => navigate(href)}
                      className="opacity-70 hover:opacity-100"
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li onClick={() => navigate("/contact")} className="header-link">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
