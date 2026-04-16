"use client";
import cloudinary from "@/utils/cloudinary";
import useDarkMode from "@/utils/useDarkMode";
import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo() {
  const { isDarkMode } = useDarkMode();

  const logoFileName = isDarkMode
    ? `logo-white-SUBMARK1-augusta-wedding-photographer_ooclgu`
    : `logo-blk-SUBMARK1-augusta-wedding-photographer_qclxvy`;

  return (
    <div className="w-full">
      <Link href="/">
        <Image
          src={cloudinary.getClientImageSrc(logoFileName)}
          width={300}
          height={300}
          alt="Covenant LX Logo"
          className="mx-auto w-52 h-auto"
          priority
        />
      </Link>
    </div>
  );
}
