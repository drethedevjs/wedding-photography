"use client";

import { TestimonialCarouselProps } from "@/interface/Testimonials";
import cloudinary from "@/utils/cloudinary";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";

export default function TestimonialCarousel({
  testimonials
}: TestimonialCarouselProps) {
  const swiperRef = useRef<SwiperClass | null>(null);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="w-full bg-primaryTint">
      <div className="container mx-auto px-6 md:px-10 py-20 lg:py-28">
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-display italic text-gold tracking-[0.3em] uppercase text-sm mb-4">
            III. Kind Words
          </p>
          <h2 className="font-display text-dark text-3xl md:text-4xl lg:text-5xl">
            From the couples
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Prev/Next arrows (desktop) */}
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 items-center justify-center w-12 h-12 rounded-full bg-white/80 hover:bg-white text-dark hover:text-gold transition-colors shadow-md ring-0 p-0 not-italic font-normal"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 items-center justify-center w-12 h-12 rounded-full bg-white/80 hover:bg-white text-dark hover:text-gold transition-colors shadow-md ring-0 p-0 not-italic font-normal"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            speed={800}
            onSwiper={swiper => (swiperRef.current = swiper)}
            className="w-full pb-14"
          >
            {testimonials.map((t, index) => {
              const hasImage = Boolean(t.imageFileName);
              return (
                <SwiperSlide key={`testimonial-${index}`}>
                  <div
                    className={`grid gap-10 md:gap-14 items-center ${
                      hasImage ? "grid-cols-1 md:grid-cols-12" : "grid-cols-1"
                    }`}
                  >
                    {hasImage && (
                      <div className="md:col-span-5 order-1">
                        <div className="relative w-full aspect-[4/5] max-w-sm mx-auto overflow-hidden">
                          <Image
                            src={cloudinary.getClientImageSrc(t.imageFileName!)}
                            alt={t.imageAlt || `${t.name} — ${t.location}`}
                            fill
                            sizes="(max-width: 768px) 80vw, 35vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}
                    <figure
                      className={`order-2 text-center ${
                        hasImage
                          ? "md:col-span-7 md:text-left"
                          : "max-w-3xl mx-auto"
                      }`}
                    >
                      <span
                        aria-hidden
                        className="block font-display text-gold text-6xl md:text-7xl leading-none mb-4"
                      >
                        &ldquo;
                      </span>
                      <blockquote className="font-display text-dark text-2xl md:text-3xl lg:text-[2.1rem] italic leading-[1.35] mb-8">
                        {t.quote}
                      </blockquote>
                      <figcaption>
                        <p className="text-dark uppercase tracking-[0.3em] text-sm font-medium">
                          {t.name}
                        </p>
                        <p className="text-secondary text-sm mt-2 italic">
                          {t.location}
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Mobile arrows under the slide */}
          <div className="flex md:hidden items-center justify-center gap-6 mt-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-dark shadow ring-0 p-0 not-italic font-normal"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => swiperRef.current?.slideNext()}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-dark shadow ring-0 p-0 not-italic font-normal"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
