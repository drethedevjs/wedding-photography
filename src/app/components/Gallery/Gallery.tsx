"use server";

import cloudinary from "@/utils/cloudinary";
import {
  ENGAGEMENT_FEATURED_IMAGE,
  WEDDING_FEATURED_IMAGE
} from "@/utils/tags";
import { capitalize } from "@/utils/utility";
import Image from "next/image";
import { redirect } from "next/navigation";
import CovLXSlider from "../CovLXSlider/CovLXSlider";
import OtherGalleries from "../OtherGalleries/OtherGalleries";

export default async function GalleryComponent({
  galleryName,
  galleryType
}: {
  galleryName: string;
  galleryType: string;
}) {
  const galleryImageData = await cloudinary.getImageData(
    `covenantlx/${galleryType}/${galleryName}`
  )!;

  if (!galleryImageData || !galleryImageData.length) redirect("/portfolio");

  const featImageTag =
    galleryType === "wedding"
      ? WEDDING_FEATURED_IMAGE
      : ENGAGEMENT_FEATURED_IMAGE;

  const featImage = galleryImageData?.find(
    g => g.tags?.length && g.tags.includes(featImageTag)
  );

  return (
    <section>
      <div className="relative w-full overflow-hidden md:h-[800] h-[300]">
        <Image
          src={cloudinary.getImageSrc(featImage?.fileName!)}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt={featImage?.metadata.alt ?? ""}
          priority
          loading="eager"
        />
        <div className="absolute inset-10 flex items-center justify-center text-center">
          <h1 className="md:text-9xl text-4xl uppercase tracking-widest text-shadow-lg text-white rounded">
            {`${galleryName} ${capitalize(galleryType)}`}
          </h1>
        </div>
      </div>

      <CovLXSlider galleryImageData={galleryImageData!} />

      <OtherGalleries
        currentGalleryName={galleryName!}
        galleryType={galleryType}
      />
    </section>
  );
}
