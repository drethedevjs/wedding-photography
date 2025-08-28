import Link from "next/link";
import styles from "./QuickLinks.module.css";

export default function QuickLinks() {
  return (
    <div className="grid md:grid-cols-3 md:gap-0 gap-8 my-16 text-gray-700">
      <Link href="/investment">
        <div className={styles.block}>
          <h3 className={styles.h3}>Information</h3>
          <p className={styles.p}>investment & details</p>
        </div>
      </Link>
      <Link href="/portfolio">
        <div className={`${styles.block} ${styles.middle}`}>
          <h3 className={styles.h3}>Portfolio</h3>
          <p className={styles.p}>see my work!</p>
        </div>
      </Link>
      <div className={styles.block}>
        <h3 className={`${styles.h3}`}>Stay in Touch</h3>
        <p className={styles.p}>
          <Link
            href="https://facebook.com/covenantlx"
            target="_blank"
            className="hover:text-gold hover:font-semibold"
          >
            Facebook
          </Link>
          &nbsp;//&nbsp;
          <Link
            href="https://www.pinterest.com/covenantlx/"
            target="_blank"
            className="hover:text-gold hover:font-semibold"
          >
            Pinterest
          </Link>
        </p>
      </div>
    </div>
  );
}
