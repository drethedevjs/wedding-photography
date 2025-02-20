"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "./Investment.module.css";

export default function Investment() {
  return (
    <>
      <div className="container mx-auto lg:px-32 px-10 text-center">
        <h1 className="pageH1">Investment</h1>
        <div className="flex xl:flex-row flex-col">
          <div className="hidden xl:flex">
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN_PREFIX}/investment/augusta-ga-wedding-photographer-coco.jpg`}
              width={1080}
              height={1920}
              alt="A bride standing on the beach facing the ocean and looking back at the camera."
            />
          </div>
          <div className="xl:px-16 px-10 place-content-center w-full">
            <p className={`${styles.p} mb-5`}>
              Thank you for considering us for your wedding photography and/or videography needs. We're 
              looking forward to the opportunity to work with you two.
            </p>
            <p className={`${styles.p} mb-5`}>
              My pricing starts out at $1599 but most of my couples spend in the ballpark of $2200-2300. 
              I don't want to waste your time with pricing sheets and collections. I used to do that but 
              I have found that couples can get stuck paying for products and services that they don't 
              need in order to get extra time or an extra photographer. How about this: Let's sit down and 
              chat about what your needs and values are and I can build a collection specifically for you?
            </p>
            <p className={`${styles.p}`}>
              I'm looking forward to you becoming a part of our gallery of brides.
            </p>

            <Link href="/contact">
              <button className="mt-5">Let's Start</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
