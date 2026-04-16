import cloudinary from "@/utils/cloudinary";
import { capitalize } from "@/utils/utility";
import Image from "next/image";
import Link from "next/link";

export default async function Portfolio({
  params
}: {
  params: Promise<{ portfolioType: string }>;
}) {
  const { portfolioType } = await params;

  const galleries = await cloudinary.getImageDataByTag(
    `${portfolioType}-portfolio`
  );

  if (!galleries) return <p>No galleries present</p>;

  return (
    <>
      <div className="cov-container-page">
        <h1 className="pageH1">Portfolio</h1>
        <div className="pGrid">
          {galleries.map(g => {
            return (
              <Link
                href={`/gallery/${portfolioType}/${g.metadata.galleryName}`}
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
                  {g.metadata.galleryName} {capitalize(portfolioType)}
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
