import cloudinary from "@/utils/cloudinary";
import Image from "next/image";
import Link from "next/link";

export default async function PopularGalleries() {
  const popularGalleries =
    await cloudinary.getImageDataByTag("popular-gallery");
  popularGalleries.map(
    p =>
      (p.metadata.directory = p.metadata.directory.replace(
        "covenantlx",
        "gallery"
      ))
  );

  if (!popularGalleries) return;

  return (
    <section className="container mx-auto lg:px-32 px-10 text-center">
      <h3 className="pop-gallery-header">Popular Galleries</h3>
      <small className="small">Click to view a gallery</small>
      <div className="galleries">
        {popularGalleries.map(g => {
          return (
            <Link href={`/${g.metadata.directory}`}>
              <Image
                src={cloudinary.getImageSrc(g.fileName!)}
                width={300}
                height={450}
                alt={g.metadata.alt}
                className="image"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
