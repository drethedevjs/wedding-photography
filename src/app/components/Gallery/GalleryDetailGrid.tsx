import CovLXImageData from "@/interface/ImageData";
import cloudinary from "@/utils/cloudinary";
import Image from "next/image";

/**
 * Full masonry grid of every image in a couple's gallery.
 * 1 col mobile / 2 col tablet / 3 col desktop, varying heights
 * via CSS columns.
 */
export default function GalleryDetailGrid({
  images,
  coupleNames
}: {
  images: CovLXImageData[];
  coupleNames: string;
}) {
  if (!images?.length) {
    return (
      <div className="container mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
        <p className="font-body italic text-secondary text-lg">
          This gallery is being prepared. Please check back soon.
        </p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-20">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
        {images.map(img => {
          const w = Number(img.metadata.width) || 1200;
          const h = Number(img.metadata.height) || 1500;
          return (
            <div
              key={img.fileName}
              className="mb-4 md:mb-6 break-inside-avoid overflow-hidden"
            >
              <Image
                src={cloudinary.getImageSrc(img.fileName)}
                alt={img.metadata.alt || coupleNames}
                width={w}
                height={h}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-auto object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
