import imageHelper from "@/utils/ImageHelper";
import Image from "next/image";

export default async function PopularGalleries() {
  const homeImageData = await imageHelper.getImageData("home");

  if (!homeImageData) return;

  return (
    <section className="container mx-auto lg:px-32 px-10 text-center">
      <h3 className="pop-gallery-header">Popular Galleries</h3>
      <small className="small">Click to view a gallery</small>
      <div className="galleries">
        <Image
          src={imageHelper.getImageSrc(homeImageData!, "muff")}
          width={300}
          height={450}
          alt="Two people looking at each other"
          className="image"
        />

        <Image
          src={imageHelper.getImageSrc(homeImageData!, "shaffer")}
          width={300}
          height={450}
          alt="Two people looking at each other"
          className="image"
        />

        <Image
          src={imageHelper.getImageSrc(homeImageData!, "anderson")}
          width={300}
          height={450}
          alt="Two people looking at each other"
          className="image"
        />
      </div>
    </section>
  );
}
