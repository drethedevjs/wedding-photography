"use server";

import cloudinary from "@/utils/cloudinary";
import { FEATURED_IMAGE } from "@/utils/tags";
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

  const featImage = galleryImageData?.find(
    g => g.tags?.length && g.tags.includes(FEATURED_IMAGE)
  );
  return (
    <section>
      <div className="relative w-full overflow-hidden md:h-[800] h-[300]">
        <Image
          src={cloudinary.getImageSrc(featImage?.fileName!)}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt=""
          priority
          loading="eager"
        />
        <div className="absolute inset-10 flex items-center justify-center text-center">
          <h1 className="md:text-9xl text-4xl uppercase tracking-widest text-shadow-lg text-white rounded">
            {`${galleryName} Engagement`}
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
