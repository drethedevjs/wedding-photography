import cloudinary from "@/utils/cloudinary";

interface ParallaxBannerProps {
  imageFileName: string;
  alt?: string;
  heightClass?: string;
  overlay?: React.ReactNode;
  overlayOpacityClass?: string;
}

/**
 * Full-bleed parallax image banner using CSS bg-fixed.
 * Falls back to a normal background on touch devices (no jitter).
 */
export default function ParallaxBanner({
  imageFileName,
  alt,
  heightClass = "h-[60vh] md:h-[75vh]",
  overlay,
  overlayOpacityClass = "bg-dark/40"
}: ParallaxBannerProps) {
  const url = cloudinary.getClientImageSrc(imageFileName);

  return (
    <section
      aria-label={alt || "Parallax image"}
      className={`relative w-full ${heightClass} bg-center bg-cover bg-no-repeat md:bg-fixed`}
      style={{ backgroundImage: `url('${url}')` }}
    >
      <div className={`absolute inset-0 ${overlayOpacityClass}`} />
      {overlay && (
        <div className="relative z-10 h-full w-full flex items-center justify-center px-6">
          {overlay}
        </div>
      )}
    </section>
  );
}
