"use client"
import { Bars2Icon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState<boolean>(false);
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }
  return (
    <nav>
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
      <div className={`${styles["mobile-header-container"]}`}>
        <div className='p-5 flex flex-row mb-10'>
          <div className='place-content-center text-covGray ml-4'>
            <Bars2Icon className='size-10' onClick={toggleMenu} />
          </div>
          <Link href="/">
            <Image
              src="/images/logo/augusta-ga-wedding-photographer-logo-submrk.png"
              width={300}
              height={200}
              alt='Covenant LX Logo'
              />
          </Link>
        </div>
        <div className={`${styles["mobile-links"]} ${mobileMenuOpen ? 'flex' : 'hidden'}`}>
          <ul className='py-10 text-3xl'>
            <Link href="/blog"><li className={styles.li}>Blog</li></Link>
            <Link href="/about"><li className={styles.li}>About</li></Link>
            <Link href="/portfolio"><li className={styles.li}>Portfolio</li></Link>
            <Link href="/contact"><li className={styles.li}>Contact</li></Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}
