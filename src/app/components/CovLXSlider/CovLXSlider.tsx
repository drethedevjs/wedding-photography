"use client";
import imageHelper from "@/utils/ImageHelper";
import { _Object } from "@aws-sdk/client-s3";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CovLXSlider.module.css";

export default function CovLXSlider({
  galleryImageData
}: {
  galleryImageData: _Object[];
}) {
  return (
    <>
      {/* Desktop slider */}
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        loop={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mt-10 md:flex hidden"
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

      {/* Mobile Slider */}
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className={`mt-10 flex md:hidden ${styles.mobileSwiper}`}
      >
        {galleryImageData.map((image, index) => {
          return (
            <SwiperSlide key={image.Key} className={styles.mobileSlide}>
              <div className={styles.mobileImageWrapper}>
                <Image
                  src={imageHelper.getImageSrc(galleryImageData, image.Key!)}
                  alt={`Augusta, GA Wedding Photographer - ${index + 1}`}
                  width={400}
                  height={600}
                  priority={index === 0}
                  className={styles.mobileImage}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
