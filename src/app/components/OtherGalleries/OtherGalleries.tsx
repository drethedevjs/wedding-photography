import imageHelper from '@/utils/ImageHelper';
import Image from 'next/image';
import Link from 'next/link';
import styles from './OtherGalleries.module.css';
import otherGalleryHelper from './OtherGalleryHelper';

export default async function OtherGalleries({ currentGalleryId } : { currentGalleryId: Number }) {
  const { leftGallery, rightGallery } = otherGalleryHelper.getLeftAndRightGallery(currentGalleryId);
  const featImageData = await imageHelper.getImageData("feat");
  return (
    <div className={styles.ogGallery}>
      <h2 className={styles.h2}>Other Galleries</h2>
      <div className="flex md:flex-row md:gap-5 flex-col gap-5">
        <div className='w-full md:place-items-center'>
          <Image
            src={imageHelper.getImageSrc(featImageData!, leftGallery!.heroImageTag)}
            height={500}
            width={500}
            alt={leftGallery!.heroImageAlt}
            className='rounded-lg'
            />
          <h3 className={styles.h3}>
            {leftGallery?.name}
          </h3>
            <Link href={`/gallery?id=${leftGallery!.id}`}>
              <button>
                  View Gallery
              </button>
            </Link>
        </div>

        <div className='w-full md:place-items-center'>
          <Image
            src={imageHelper.getImageSrc(featImageData!, rightGallery!.heroImageTag)}
            height={500}
            width={500}
            alt={rightGallery!.heroImageAlt}
            className='rounded-lg'
            />
          <h3 className={styles.h3}>
            {rightGallery?.name}
          </h3>
          <Link href={`/gallery?id=${rightGallery!.id}`}>
            <button>View Gallery</button>
          </Link>
        </div>
      </div>
    </div>
  )
}