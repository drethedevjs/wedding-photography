"use client"
import galleries from '@/data/galleries';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import "react-alice-carousel/lib/alice-carousel.css";

const OtherGalleries = dynamic(() => import('../components/OtherGalleries/OtherGalleries'), { ssr: false })
const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false })

export default function Gallery() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4, itemsFit: "fill"},
  };

  const searchParams = useSearchParams()
  const galleryId = Number(searchParams.get("id"));
  const gallery = galleries[galleryId - 1];
  const images = gallery.imageUrls.map((url, i) => <img src={url} key={i} role="presentation" /> );

  return (
    <>
      <div className="relative w-full overflow-hidden" style={{height:800}}>
        <Image 
          src={gallery.heroImageUrl} 
          fill={true}
          style={{objectFit: "cover", objectPosition: "center"}}
          alt={gallery.heroImageAlt}
        />
        <div className="absolute inset-10 flex items-center justify-center text-center">
          <div className="lg:w-2/5 w-6/7">
            <h1 className="text-3xl uppercase tracking-widest bg-black bg-opacity-20 text-white rounded">
              {gallery.name}
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <AliceCarousel 
          mouseTracking
          items={images} 
          responsive={responsive}
          infinite={true}
        />
      </div>
      <OtherGalleries />
    </>
  )
}
