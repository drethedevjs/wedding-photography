"use client";
import CovLXImageData from "@/interface/ImageData";
import cloudinary from "@/utils/cloudinary";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PopularGalleriesClient() {
  const [popularGalleries, setPopularImageData] = useState<CovLXImageData[]>();

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("/api/cloudinary?tag=popular-gallery");
      const data: CovLXImageData[] = await res.json();
      console.log("data", data);
      setPopularImageData(data);
    };
    fetchImages();
  }, []);

  if (!popularGalleries?.length) return;

  return (
    <section className="container mx-auto lg:px-32 px-10 text-center">
      <h3 className="h3">Popular Galleries</h3>
      <small>Click to view a gallery</small>
      <div className="galleries">
        {popularGalleries.map(g => {
          return (
            <Link
              key={g.metadata.galleryName}
              href={`/${g.metadata.directory}`}
            >
              <Image
                alt={g.metadata.alt}
                src={cloudinary.getClientImageSrc(g.fileName!)}
                width={300}
                height={450}
                className="image"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
