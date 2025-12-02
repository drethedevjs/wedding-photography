"use client";
import imageHelper from "@/utils/ImageHelper";
import useDarkMode from "@/utils/useDarkMode";
import { _Object } from "@aws-sdk/client-s3";
import { Bars2Icon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [logoImageData, setLogoImageData] = useState<_Object[]>();
  const { isDarkMode } = useDarkMode();
  const router = useRouter();

  const navigate = (path: string) => {
    toggleMenu();
    router.push(path);
  };

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    async function fetchLogoData() {
      const res = await fetch("/api/images?prefix=logo", {
        cache: "force-cache"
      });
      const data = await res.json();
      setLogoImageData(data);
    }

    fetchLogoData();
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
            {logoImageData &&
              (isDarkMode ? (
                <Image
                  src={imageHelper.getImageSrc(logoImageData, "dark-main")}
                  alt="Covenant LX main logo"
                  width={386}
                  height={196}
                  priority
                />
              ) : (
                <Image
                  src={imageHelper.getImageSrc(logoImageData, "light-main")}
                  alt="Covenant LX main logo"
                  width={386}
                  height={196}
                  priority
                />
              ))}
          </Link>
        </div>
        <div className="header-ul-rev header-group">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="mobile-header-container">
        <div
          className={`p-5 flex flex-row mb-10 ${
            mobileMenuOpen ? "hidden" : "flex"
          }`}
        >
          <div className="place-content-center text-secondary ml-4">
            <Bars2Icon className="size-10" onClick={toggleMenu} />
          </div>
          <HeaderLogo logoImageData={logoImageData} />
        </div>
        <div
          className={`mobile-links ${
            mobileMenuOpen ? "flex flex-col" : "hidden"
          }`}
        >
          <div className="p-5 flex flex-row mb-10 bg-white dark:bg-slate-700">
            <div className="place-content-center text-secondary ml-4">
              <XMarkIcon
                className="size-10 dark:text-white"
                onClick={toggleMenu}
              />
            </div>
            <HeaderLogo logoImageData={logoImageData} />
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
            <li onClick={() => navigate("/portfolio")} className="header-link">
              Portfolio
            </li>
            {/* <li onClick={() => navigate("/blog")} className="header-link">Blog</li> */}
            <li onClick={() => navigate("/contact")} className="header-link">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
