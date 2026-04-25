import cloudinary from "@/utils/cloudinary";
import Image from "next/image";
import Link from "next/link";

export default async function PopularGalleries() {
  const popularGalleries = await cloudinary.getImageData(
    null,
    "popular-gallery"
  );

  popularGalleries!.map(
    p =>
      (p.metadata.directory = p.metadata.directory.replace(
        "covenantlx",
        "gallery"
      ))
  );

  if (!popularGalleries?.length) return;

  return (
    <section className="container mx-auto lg:px-32 px-10 text-center">
      <h3 className="pop-gallery-header">Popular Galleries</h3>
      <small className="small">Click to view a gallery</small>
      <div className="galleries">
        {popularGalleries.map(g => {
          return (
            <Link
              key={g.metadata.galleryName}
              href={`/${g.metadata.directory}`}
            >
              <Image
                alt={g.metadata.alt}
                src={cloudinary.getImageSrc(g.fileName!)}
                width={300}
                height={450}
                className="image"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
