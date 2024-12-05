import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles["header-container"]}>
      <div className={`${styles["header-ul"]} ${styles["header-group"]}`}>
        <div>Blog</div>
        <div>About</div>
      </div>
      <div className={styles.logo}>
      <Image
        src="/images/logo/covlx-logo-charcoal-main.jpg" 
        alt="Covenant LX main logo."
        width={386}
        height={600}
        priority
      />
      </div>
      <div className={`${styles["header-ul-rev"]} ${styles["header-group"]}`}>
        <div>Portfolio</div>
        <div>Contact</div>
      </div>
    </div>
  )
}
