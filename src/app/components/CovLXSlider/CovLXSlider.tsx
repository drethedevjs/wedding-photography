"use client";
import imageHelper from "@/utils/ImageHelper";
import { _Object } from "@aws-sdk/client-s3";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
        className="mt-10 hidden md:flex"
      >
        {galleryImageData.map((image, index) => {
          return (
            <SwiperSlide
              key={image.Key}
              className="!w-auto !h-full flex items-center justify-center"
            >
              <div className="h-[600px] relative mx-auto flex items-center justify-center">
                <Image
                  src={imageHelper.getImageSrc(galleryImageData, image.Key!)}
                  alt={`Augusta, GA Wedding Photographer - ${index + 1}`}
                  width={800}
                  height={1200}
                  priority={index === 0}
                  className="h-full w-auto max-w-none object-contain"
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
        className="mt-10 flex h-screen w-full md:hidden"
      >
        {galleryImageData.map((image, index) => {
          return (
            <SwiperSlide
              key={image.Key}
              className="!h-auto !w-full flex items-center justify-center"
            >
              <div className="w-full px-4 py-2.5 flex items-center justify-center">
                <Image
                  src={imageHelper.getImageSrc(galleryImageData, image.Key!)}
                  alt={`Augusta, GA Wedding Photographer - ${index + 1}`}
                  width={400}
                  height={600}
                  priority={index === 0}
                  className="!w-full !h-auto max-w-full rounded-lg"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
