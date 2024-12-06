import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles["header-container"]}>
      <div className={`${styles["header-ul"]} ${styles["header-group"]}`}>
        <div>Blog</div>
        <Link href="/about">About</Link>
      </div>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/images/logo/covlx-logo-charcoal-main.jpg" 
            alt="Covenant LX main logo."
            width={386}
            height={196}
            priority
          />
        </Link>
      </div>
      <div className={`${styles["header-ul-rev"]} ${styles["header-group"]}`}>
        <div>Portfolio</div>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  )
}
