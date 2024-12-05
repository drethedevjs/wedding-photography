import Image from "next/image";
import styles from "./PhotogSnippet.module.css";

export default function PhotogSnippet() {
  return (
    <div className="grid grid-cols-2 px-32 py-20 gap-32">
      <div className="border-2 h-96 flex flex-col">
        <div className="relative w-full h-full">
          <Image 
            src="/images/andre/Andre-Headshot-b&w.jpg"
            layout="fill"   // Ensures the image takes up the full width/height of the container
            objectFit="cover"  // Image will fill the container and crop if needed
            objectPosition="center"  // Centers the image inside the container
            alt="A close up of Andre's smiling face."
          />
        </div>
      </div>
      <div>
        <h2 className={styles.h2}>Wedding Photographer</h2>
        <p className={styles.p}>
          As a photographer, it is important to click the shutter button but it is just as important to click with the people. Weddings are elegant in many respects but they shouldn’t be stuffy.
        </p>
        <p className={styles.p}>
          When I come to do my job, I like to have fun. No, I’m not a party animal but I enjoy laughing and getting to know people. The secret ingredient amazing pictures is to enjoyed connecting with one another.
        </p>
        <p className={styles.p}>
          Feel free to reach out. I'm hoping we can connect so I can document your day!
        </p>
        <button className={styles.btn}>More About Me</button>
      </div>
    </div>
  )
}
