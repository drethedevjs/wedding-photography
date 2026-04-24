import cloudinary from "@/utils/cloudinary";
import { InvestmentEditorialImageProps } from "@/interface/InvestmentEditorialImageProps";
import Image from "next/image";

/**
 * Full-bleed editorial image break.
 * No caption, no overlay — let the image breathe.
 */
export default function InvestmentEditorialImage({
  imageFileName,
  alt = "Covenant LX editorial moment"
}: InvestmentEditorialImageProps) {
  if (!imageFileName) return null;

  return (
    <section
      aria-label={alt}
      className="relative w-full h-[60vh] md:h-[80vh] lg:h-[95vh] overflow-hidden"
    >
      <Image
        src={cloudinary.getClientImageSrc(imageFileName)}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}
