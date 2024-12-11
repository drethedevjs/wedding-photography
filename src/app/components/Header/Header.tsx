"use client"
import { Bars2Icon } from '@heroicons/react/16/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState<boolean>(false);
  const router = useRouter();
  
  const navigate = (path: string) => {
    toggleMenu();
    router.push(path);
  }

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
        <div className={`p-5 flex flex-row mb-10 ${mobileMenuOpen ? 'hidden' : 'flex'}`}>
          <div className='place-content-center text-covGray ml-4'>
            <Bars2Icon className='size-10' onClick={toggleMenu} />
          </div>
          <div className='w-full place-items-center'>
            <Image
              src="/images/logo/augusta-ga-wedding-photographer-logo-submrk.png"
              width={300}
              height={200}
              alt='Covenant LX Logo'
            />
          </div>
        </div>
        <div className={`${styles["mobile-links"]} ${mobileMenuOpen ? 'flex flex-col' : 'hidden'}`}>
          <div className='p-5 flex flex-row mb-10 bg-white'>
            <div className='place-content-center text-covGray ml-4'>
              <XMarkIcon className='size-10' onClick={toggleMenu} />
            </div>
            <div className='w-full place-items-center'>
              <Image
                src="/images/logo/augusta-ga-wedding-photographer-logo-submrk.png"
                width={300}
                height={200}
                alt='Covenant LX Logo'
              />
            </div>
          </div>
          <ul className='py-10 text-3xl'>
            <li onClick={() => navigate("/")} className={styles.li}>Home</li>
            <li onClick={() => navigate("/about")} className={styles.li}>About</li>
            <li onClick={() => navigate("/portfolio")} className={styles.li}>Portfolio</li>
            <li onClick={() => navigate("/blog")} className={styles.li}>Blog</li>
            <li onClick={() => navigate("/contact")} className={styles.li}>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
