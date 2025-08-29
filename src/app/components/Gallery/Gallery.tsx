"use server";

import galleries from "@/data/galleries";
import imageHelper from "@/utils/ImageHelper";
import Image from "next/image";
import CovLXSlider from "../CovLXSlider/CovLXSlider";
import OtherGalleries from "../OtherGalleries/OtherGalleries";

export default async function GalleryComponent({
  galleryId
}: {
  galleryId: number;
}) {
  const gallery = galleries[galleryId - 1];
  const galleryImageData = await imageHelper.getImageData(
    `gallery:${gallery.heroImageTag}`
  )!;
  const featImageData = await imageHelper.getImageData("feat");

  return (
    <section>
      <div className="relative w-full overflow-hidden md:h-[800] h-[300]">
        <Image
          src={imageHelper.getImageSrc(featImageData!, gallery.heroImageTag)}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt={gallery.heroImageAlt}
          priority
        />
        <div className="absolute inset-10 flex items-center justify-center text-center">
          <h1 className="md:text-9xl text-4xl uppercase tracking-widest text-shadow-lg text-white rounded">
            {gallery.name}
          </h1>
        </div>
      </div>

      <CovLXSlider galleryImageData={galleryImageData!} />

      <OtherGalleries currentGalleryId={gallery.id} />
    </section>
  );
}
