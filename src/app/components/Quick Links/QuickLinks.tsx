import styles from './QuickLinks.module.css'
export default function QuickLinks() {
  return (
    <div className="grid md:grid-cols-3 md:gap-0 gap-8 my-16 text-covGray">
      <div className={styles.block}>
        <h3 className={styles.h3}>Information</h3>
        <p className={styles.p}>Investment & Details</p>
      </div>
      <div className={`${styles.block} ${styles.middle}`}>
        <h3 className={styles.h3}>Portfolio</h3>
        <p className={styles.p}>see my work!</p>
      </div>
      <div className={styles.block}>
        <h3 className={styles.h3}>Stay in Touch</h3>
        <p className={styles.p}>FB and Pin</p>
      </div>
    </div>
  )
}
