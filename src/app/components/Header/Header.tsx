"use client";
import imageHelper from "@/utils/ImageHelper";
import { _Object } from "@aws-sdk/client-s3";
import { Bars2Icon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [logoImageData, setLogoImageData] = useState<_Object[]>();
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
      <div className={styles["header-container"]}>
        <div className={`${styles["header-ul"]} ${styles["header-group"]}`}>
          <Link href="/about">About</Link>
          <Link href="/investment">Investment</Link>
        </div>
        <div className={styles.logo}>
          <Link href="/">
            {logoImageData && (
              <Image
                src={imageHelper.getImageSrc(logoImageData, "main")}
                alt="Covenant LX main logo"
                width={386}
                height={196}
                priority
              />
            )}
          </Link>
        </div>
        <div className={`${styles["header-ul-rev"]} ${styles["header-group"]}`}>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile */}
      <div className={`${styles["mobile-header-container"]}`}>
        <div
          className={`p-5 flex flex-row mb-10 ${
            mobileMenuOpen ? "hidden" : "flex"
          }`}
        >
          <div className="place-content-center text-gray-700 ml-4">
            <Bars2Icon className="size-10" onClick={toggleMenu} />
          </div>
          <HeaderLogo logoImageData={logoImageData} />
        </div>
        <div
          className={`${styles["mobile-links"]} ${
            mobileMenuOpen ? "flex flex-col" : "hidden"
          }`}
        >
          <div className="p-5 flex flex-row mb-10 bg-white">
            <div className="place-content-center text-gray-700 ml-4">
              <XMarkIcon className="size-10" onClick={toggleMenu} />
            </div>
            <HeaderLogo logoImageData={logoImageData} />
          </div>
          <ul className="py-10 text-3xl">
            <li onClick={() => navigate("/")} className={styles.li}>
              Home
            </li>
            <li onClick={() => navigate("/about")} className={styles.li}>
              About
            </li>
            <li onClick={() => navigate("/portfolio")} className={styles.li}>
              Portfolio
            </li>
            {/* <li onClick={() => navigate("/blog")} className={styles.li}>Blog</li> */}
            <li onClick={() => navigate("/contact")} className={styles.li}>
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
