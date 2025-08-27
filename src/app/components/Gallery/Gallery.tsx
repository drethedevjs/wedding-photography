"use server";

import galleries from "@/data/galleries";
import imageHelper from "@/utils/ImageHelper";
import { _Object } from "@aws-sdk/client-s3";
import Image from "next/image";
import OtherGalleries from "../OtherGalleries/OtherGalleries";
import styles from "./Gallery.module.css";

export default async function GalleryComponent({
  galleryId
}: {
  galleryId: number;
}) {
  const gallery = galleries[galleryId - 1];
  const columns: _Object[][] = [];
  const galleryImageData = await imageHelper.getImageData(
    `gallery:${gallery.heroImageTag}`
  );
  const featImageData = await imageHelper.getImageData("feat");

  if (
    !galleryImageData ||
    !featImageData ||
    !galleryImageData.length ||
    !featImageData.length
  ) {
    return (
      <section>
        <div className="mx-auto px-44">
          <p className={styles["p"]}>
            Sorry! I'm having trouble loading this gallery's images.{" "}
            <a
              className={styles["a"]}
              href="mailto:andre@covenantlx.com?subject=Images%20Not%20Loading"
            >
              Contact the photographer
            </a>{" "}
            to let him know.
          </p>

          <p className={styles["p"]}>
            In the meantime, please look at some of the other galleries below.
          </p>
        </div>
        <OtherGalleries currentGalleryId={gallery.id} />
      </section>
    );
  }

  const numOfRows = Math.ceil(galleryImageData.length / 3);
  let startingIdx = 0;
  for (let i = 0; i < numOfRows; i++) {
    columns[i] = galleryImageData.slice(startingIdx, startingIdx + numOfRows);
    startingIdx += numOfRows;
  }

  return (
    <>
      <div className="relative w-full overflow-hidden" style={{ height: 800 }}>
        <Image
          src={imageHelper.getImageSrc(featImageData, gallery.heroImageTag)}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt={gallery.heroImageAlt}
          priority
        />
        <div className="absolute inset-10 flex items-center justify-center text-center">
          <div className="lg:w-2/5 w-6/7">
            <h1 className="text-3xl uppercase tracking-widest bg-black bg-opacity-20 text-white rounded">
              {gallery.name}
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 mx-auto px-20">
        {columns.map((column, idx) => {
          return (
            <div key={idx} className="grid gap-4">
              {column.map((c, i) => {
                return (
                  <div key={i}>
                    <Image
                      className="h-auto max-w-full rounded-lg"
                      src={imageHelper.getImageSrc(galleryImageData, c.Key!)}
                      alt=""
                      width={300}
                      height={300}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <OtherGalleries currentGalleryId={gallery.id} />
    </>
  );
}
