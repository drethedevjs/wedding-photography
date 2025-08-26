import imageHelper from "@/utils/ImageHelper";
import { _Object } from "@aws-sdk/client-s3";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./PopularGalleries.module.css";

export default function PopularGalleries() {
  const [homeImageData, setHomeImageData] = useState<_Object[]>();

  useEffect(() => {
    async function fetchLogoData() {
      const res = await fetch("/api/images?prefix=home");
      const data = await res.json();
      console.log("data", data);
      setHomeImageData(data);
    }

    fetchLogoData();
  }, []);

  if (!homeImageData) return;

  return (
    <>
      <h3 className={`${styles.h3}`}>Popular Galleries</h3>
      <small className={`${styles.small}`}>Click to view a gallery</small>
      <div className={`${styles.galleries}`}>
        <Image
          src={imageHelper.getImageSrc(homeImageData!, "muff")}
          width={300}
          height={450}
          alt="Two people looking at each other"
          className={`${styles.image}`}
        />

        <Image
          src={imageHelper.getImageSrc(homeImageData!, "shaffer")}
          width={300}
          height={450}
          alt="Two people looking at each other"
          className={`${styles.image}`}
        />

        <Image
          src={imageHelper.getImageSrc(homeImageData!, "anderson")}
          width={300}
          height={450}
          alt="Two people looking at each other"
          className={`${styles.image}`}
        />
      </div>
    </>
  );
}
