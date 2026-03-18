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
              Your wedding is one-of-a-kind. Your photography investment should
              be too.
            </p>
            <p className="mb-5">
              Packages are like buying a suit off the rack — they kind of fit,
              but not really. At Covenant LX, I build a custom collection around
              what you actually need, nothing more and nothing less.
            </p>
            <p className="mb-5">
              Investment starts at $1,599, with most couples investing between
              $2,200-$2,300.
            </p>
            <p className="mb-5">
              No confusing pricing sheets. No paying for things you don't need
              just to unlock more hours. Just a real conversation about your
              day, your priorities, and what makes sense for you.
            </p>
            <p className="mb-5">
              Ready to build yours?{" "}
              <Link
                href="/contact"
                className="italic text-secondary hover:text-primary transition-colors underline"
              >
                Let's talk. →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
