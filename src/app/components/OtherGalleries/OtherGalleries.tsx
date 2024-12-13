import galleries from '@/data/galleries';
import Image from 'next/image';
import Link from 'next/link';
import styles from './OtherGalleries.module.css';

export default function OtherGalleries() {
  const getRandomNumber = () => Math.floor(Math.random() * (7 - 1) + 1); // generate random number between 1 and 6
  const leftRandom = getRandomNumber();
  const leftGallery = galleries.find(g => g.id == leftRandom);

  let rightRandom = 0;
  do { rightRandom = getRandomNumber()}
  while (rightRandom === leftRandom);

  const rightGallery = galleries.find(g => g.id == rightRandom);

  return (
    <div className={styles.ogGallery}>
      <h2 className={styles.h2}>Other Galleries</h2>
      <div className="flex md:flex-row md:gap-5 flex-col gap-5">
        <div className='w-full md:place-items-center'>
          <Image
            src={leftGallery!.heroImageUrl}
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
            src={rightGallery!.heroImageUrl}
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