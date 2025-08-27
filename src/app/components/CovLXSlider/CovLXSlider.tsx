"use client";
import imageHelper from "@/utils/ImageHelper";
import { _Object } from "@aws-sdk/client-s3";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CovLXSlider.module.css";

export default function CovLXSlider({
  galleryImageData
}: {
  galleryImageData: _Object[];
}) {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true
      }}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="mt-10"
    >
      {galleryImageData.map((image, index) => {
        return (
          <SwiperSlide key={image.Key} className={styles.slide}>
            <div className={styles.slideWrapper}>
              <Image
                src={imageHelper.getImageSrc(galleryImageData, image.Key!)}
                alt={`Augusta, GA Wedding Photographer - ${index + 1}`}
                width={800}
                height={1200}
                priority={index === 0}
                className={styles.image}
                style={{ objectFit: "contain" }}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
