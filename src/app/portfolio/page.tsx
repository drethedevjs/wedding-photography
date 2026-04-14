import cloudinary from "@/utils/cloudinary";
import Image from "next/image";
import Link from "next/link";

export default async function Portfolio() {
  const galleries = await cloudinary.getImageDataByTag("wedding-portfolio");

  if (!galleries) return <p>No galleries present</p>;

  return (
    <>
      <div className="cov-container-page">
        <h1 className="pageH1">Portfolio</h1>
        <div className="pGrid">
          {galleries.map(g => {
            if (g.metadata.isActive) {
              return (
                <Link
                  href={`gallery/wedding/${g.metadata.galleryName}`}
                  key={g.metadata.galleryName}
                >
                  <Image
                    src={cloudinary.getImageSrc(g.fileName)}
                    height={800}
                    width={800}
                    alt=""
                    className="rounded-xl"
                  />
                  <h2 className="gallery-name">
                    {g.metadata.galleryName} Wedding
                  </h2>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
