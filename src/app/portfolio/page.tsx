import galleries from "@/data/galleries";
import imageHelper from "@/utils/ImageHelper";
import Image from "next/image";
import Link from "next/link";

export default async function Portfolio() {
  const imageData = await imageHelper.getImageData("feat");

  if (!imageData) return <p>Nothing</p>;

  return (
    <>
      <div className="container mx-auto px-10">
        <h1 className="pageH1">Portfolio</h1>
        <div className="pGrid">
          {galleries.map(g => {
            if (g.isActive) {
              return (
                <Link href={`gallery?id=${g.id}`} key={g.id}>
                  <Image
                    src={imageHelper.getImageSrc(imageData!, g.heroImageTag)}
                    height={800}
                    width={800}
                    alt={g.heroImageAlt}
                    className="rounded-xl"
                  />
                  <h2 className="gallery-name">{g.name}</h2>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
