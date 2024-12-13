import galleries from "@/data/galleries";
import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css";

export default function Portfolio() {
  return (
    <main>
      <div className="container mx-auto px-10">
        <h1 className="pageH1">Portfolio</h1>
        <div className={styles.pGrid}>
          { galleries.map(g => {
            return (
              <Link href={`gallery?id=${g.id}`} key={g.id}>
                <Image
                  src={g.heroImageUrl}
                  height={800}
                  width={800}
                  alt={g.heroImageAlt}
                  className="rounded-xl"
                  />
                <h2 className={styles.h2}>{g.name}</h2>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
