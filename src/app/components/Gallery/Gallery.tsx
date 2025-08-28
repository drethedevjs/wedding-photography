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
      <div className="relative w-full overflow-hidden" style={{ height: 800 }}>
        <Image
          src={imageHelper.getImageSrc(featImageData!, gallery.heroImageTag)}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt={gallery.heroImageAlt}
          priority
        />
        <div className="absolute inset-10 flex items-center justify-center text-center">
          <div className="lg:w-2/5 w-6/7">
            <h1 className="text-3xl uppercase tracking-widest bg-black bg-opacity-20 text-white rounded">
              {gallery.name}
            </h1>
          </div>
        </div>
      </div>

      <CovLXSlider galleryImageData={galleryImageData!} />

      <OtherGalleries currentGalleryId={gallery.id} />
    </section>
  );
}
