import CovLXImageData from "@/interface/ImageData";
import cloudinary from "@/utils/cloudinary";
import Image from "next/image";

interface HomeHeroGridProps {
  images: CovLXImageData[];
}

/**
 * Editorial hero grid (Katie Jewell style).
 * Desktop: asymmetric 4-column grid, extends past the fold so the
 * viewer has to scroll to see the last tile.
 * Mobile: 2-column stack.
 */
export default function HomeHeroGrid({ images }: HomeHeroGridProps) {
  const tileClasses = [
    "col-span-1 row-span-2 aspect-[3/4] md:aspect-auto md:h-full",
    "col-span-1 row-span-1 aspect-[4/3] md:aspect-auto md:h-full",
    "col-span-1 row-span-1 aspect-[4/3] md:aspect-auto md:h-full",
    "col-span-2 row-span-1 aspect-[16/9] md:aspect-auto md:h-full",
    "col-span-1 row-span-2 aspect-[3/4] md:aspect-auto md:h-full"
  ];

  // Fill exactly one tile per tileClass — cycle through available images so
  // short sets never produce blank tiles, and long sets are truncated.
  const source = images && images.length > 0 ? images : [];
  const safe: CovLXImageData[] = [];
  if (source.length > 0) {
    for (let i = 0; i < tileClasses.length; i++) {
      safe.push(source[i % source.length]);
    }
  }

  if (safe.length === 0) {
    return <section className="w-full h-[60vh] bg-lightGray" />;
  }

  return (
    <section className="relative w-full bg-lightGray">
      <div className="grid grid-cols-2 gap-2 px-4 md:px-6 md:grid-cols-4 md:grid-rows-2 md:gap-3 md:h-[115vh] md:min-h-[820px] pt-4 md:pt-6 pb-4 md:pb-6">
        {safe.map((image, idx) => (
          <div
            key={`${image.fileName}-${idx}`}
            className={`relative overflow-hidden ${tileClasses[idx]}`}
          >
            <Image
              src={cloudinary.getClientImageSrc(image.fileName)}
              alt={image.metadata?.alt || `Covenant LX hero image ${idx + 1}`}
              fill
              priority={idx < 2}
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
