import imageHelper from "@/utils/ImageHelper";
import Image from "next/image";
import Link from "next/link";

export default async function Investment() {
  const imageData = await imageHelper.getImageData("investment");
  if (!imageData) return;

  return (
    <section>
      <div className="cov-container-page text-center">
        <h1 className="pageH1">Investment</h1>
        <div className="flex xl:flex-row flex-col">
          <div className="hidden xl:flex">
            <Image
              src={imageHelper.getImageSrc(imageData!, "coco")}
              width={1080}
              height={1920}
              alt="A bride standing on the beach facing the ocean and looking back at the camera."
              priority
              className="object-cover"
            />
          </div>
          <div className="xl:px-16 place-content-center w-full">
            <p className="mb-5">
              Thank you for considering us for your wedding photography and/or
              videography needs. We're looking forward to the opportunity to
              work with you two.
            </p>
            <p className="mb-5">
              My pricing starts out at $1599 but most of my couples spend in the
              ballpark of $2200-2300. I don't want to waste your time with
              pricing sheets and collections. I used to do that but I have found
              that couples can get stuck paying for products and services that
              they don't need in order to get extra time or an extra
              photographer. How about this: Let's sit down and chat about what
              your needs and values are and I can build a collection
              specifically for you?
            </p>
            <p>
              I'm looking forward to you becoming a part of our gallery of
              brides.
            </p>

            <Link href="/contact">
              <button className="mt-5">Let's Start</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
