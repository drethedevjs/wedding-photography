import React from 'react';
import styles from "./TextTitleBlock.module.css";

export default function TextTitleBlock({ heading, children } : { heading: string, children: React.ReactNode }) {
  return (
    <div className={styles.div}>
      <h3 className={styles.h3}>{ heading }</h3>
      <p className={styles.p}>{ children }</p>
    </div>
  )
}
