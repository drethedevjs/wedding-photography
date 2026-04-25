import CovLXImageData from "@/interface/ImageData";
import cloudinary from "@/utils/cloudinary";
import Image from "next/image";
import Link from "next/link";

interface InstagramGridProps {
  images: CovLXImageData[];
  instagramUrl?: string;
  handle?: string;
}

export default function InstagramGrid({
  images,
  instagramUrl = "https://www.instagram.com/covenant_lx",
  handle = "@covenant_lx"
}: InstagramGridProps) {
  if (!images || images.length === 0) return null;

  const gridImages = images.slice(0, 6);

  return (
    <section className="w-full bg-white">
      <div className="text-center px-6 pt-20 pb-10 lg:pt-24 lg:pb-12">
        <p className="font-display italic text-gold tracking-[0.3em] uppercase text-sm mb-4">
          IV. Follow Along
        </p>
        <h2 className="font-display text-dark text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
          {handle}
        </h2>
        <Link
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-secondary uppercase tracking-[0.3em] text-xs hover:text-gold transition-colors duration-300"
        >
          Follow on Instagram →
        </Link>
      </div>

      {/* Full-bleed grid — no container, no gaps */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full">
        {gridImages.map((image, index) => (
          <Link
            key={`ig-${image.fileName}-${index}`}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open Instagram post ${index + 1}`}
            className="group relative aspect-square overflow-hidden block"
          >
            <Image
              src={cloudinary.getClientImageSrc(image.fileName)}
              alt={
                image.metadata?.alt || `Covenant LX Instagram post ${index + 1}`
              }
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
            />
            {/* Per-tile overlay — only this tile dims on hover */}
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/35 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white uppercase tracking-[0.3em] text-xs">
                View on IG
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
