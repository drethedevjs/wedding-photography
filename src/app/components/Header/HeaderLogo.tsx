"use client";
import imageHelper from "@/utils/ImageHelper";
import { _Object } from "@aws-sdk/client-s3";
import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo({
  logoImageData
}: {
  logoImageData: _Object[] | undefined;
}) {
  if (!logoImageData) return null;

  return (
    <div className="w-full">
      <Link href="/">
        <Image
          src={imageHelper.getImageSrc(logoImageData!, "mobile")}
          width={300}
          height={300}
          alt="Covenant LX Logo"
          className="mx-auto"
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </Link>
    </div>
  );
}
