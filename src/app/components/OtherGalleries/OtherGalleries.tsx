import cloudinary from "@/utils/cloudinary";
import {
  ENGAGEMENT_FEATURED_IMAGE,
  WEDDING_FEATURED_IMAGE
} from "@/utils/tags";
import Image from "next/image";
import Link from "next/link";
import otherGalleryHelper from "./OtherGalleryHelper";

export default async function OtherGalleries({
  currentGalleryName,
  galleryType
}: {
  currentGalleryName: string;
  galleryType: string;
}) {
  const featImageTag =
    galleryType === "wedding"
      ? WEDDING_FEATURED_IMAGE
      : ENGAGEMENT_FEATURED_IMAGE;

  const portfolioImages = await cloudinary.getImageData(null, featImageTag);
  if (!portfolioImages || portfolioImages.length < 2) return;

  const { left, right } = otherGalleryHelper.getLeftAndRightGallery(
    portfolioImages,
    currentGalleryName
  );

  return (
    <div className="ogGallery">
      <h2 className="more-galleries-header">More Galleries to View</h2>
      <div className="flex md:flex-row md:gap-5 flex-col gap-5">
        <div className="w-full md:place-items-center">
          <Image
            src={cloudinary.getClientImageSrc(left?.fileName!)}
            height={500}
            width={500}
            alt=""
            className="rounded-lg"
          />
          <h3 className="gallery-name">{left?.metadata.galleryName} Wedding</h3>
          <Link href={`/gallery/${galleryType}/${left?.metadata.galleryName}`}>
            <button>View Gallery</button>
          </Link>
        </div>

        <div className="w-full md:place-items-center">
          <Image
            src={cloudinary.getClientImageSrc(right?.fileName!)}
            height={500}
            width={500}
            alt=""
            className="rounded-lg"
          />
          <h3 className="gallery-name">
            {right?.metadata.galleryName} Wedding
          </h3>
          <Link href={`/gallery/${galleryType}/${right?.metadata.galleryName}`}>
            <button>View Gallery</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
