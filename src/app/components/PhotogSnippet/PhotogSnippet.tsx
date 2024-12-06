import Image from "next/image";
import Link from "next/link";
import styles from "./PhotogSnippet.module.css";

export default function PhotogSnippet() {
  return (
    <div className={styles.main}>
      <div className="h-full flex flex-col">
        <div className="relative w-full h-full">
          <Image
            src="/images/andre/Andre-Headshot-b&w.jpg"
            width={2000}
            height={2000}
            style={{objectFit: "cover"}}
            alt="A close up of Andre's smiling face."
          />
        </div>
      </div>
      <div>
        <h2 className={styles.h2}>Wedding Photographer</h2>
        <p className={styles.p}>
          As a photographer, it is important to click the shutter button 
          but it is just as important to click with the people. Weddings 
          are elegant in many respects but they shouldn’t be stuffy.
        </p>
        <p className={styles.p}>
          When I come to do my job, I like to have fun. No, I’m not a party 
          animal but I enjoy laughing and getting to know people. The secret 
          ingredient amazing pictures is to enjoyed connecting with one another.
        </p>
        <p className={styles.p}>
          Feel free to reach out. I'm hoping we can connect so I can document 
          your day!
        </p>
        <Link href="/about">
          <button className={styles.btn}>More About Me</button>
        </Link>
      </div>
    </div>
  )
}
