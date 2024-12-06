import React from 'react';
import styles from "./TextTitleBlockMulti.module.css";

export default function TextTitleBlockMulti({ heading, children } : { heading: string, children: React.ReactNode[] }) {
  return (
    <div className={styles.div}>
      <h3 className={styles.h3}>{ heading }</h3>
      <p className={styles.p}>{ children[0] }</p>
      <p className={styles.p}>{ children[1] }</p>
      <p className={styles.p}>{ children[2] }</p>
    </div>
  )
}
