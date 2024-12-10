import Image from 'next/image'
import styles from './PopularGalleries.module.css'

export default function PopularGalleries() {
  return (
    <>
      <h3 className={`${styles.h3}`}>Popular Galleries</h3>
      <small className={`${styles.small}`}>Click to view a gallery</small>
      <div className={`${styles.galleries}`}>
        <Image
          src="/images/home/augusta-ga-wedding-photographer-1.jpg"
          width={300}
          height={450}
          alt="Two people looking at each other"
          className={`${styles.image}`}
        />

        <Image
          src="/images/home/augusta-ga-wedding-photographer-4.jpg"
          width={300}
          height={450}
          alt="Two people looking at each other"
          className={`${styles.image}`}
        />

        <Image
          src="/images/home/augusta-ga-wedding-photographer-3.jpg"
          width={300}
          height={450}
          alt="Two people looking at each other"
          className={`${styles.image}`}
        />
      </div>
    </>
  )
}
