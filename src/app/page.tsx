import homePageImages from "@/data/homePageImages";
import Image from "next/image";
import styles from './Home.module.css';

export default function Home() {
  return (
      <main>
        <div className={styles.slideShow}></div>
        <div className="cov-container gap-5 grid grid-cols-1 text-2xl text-center">
          <p>
            I am here to provide couples in Augusta, GA with wedding photography that is bright, fun, 
            and vibrant. Past brides love not only my work but they thoroughly enjoyed spending time with 
            me as their wedding photographer. They choose me because we take moments that are meaningful and 
            make them memorable.
          </p>
          <p className="mb-20">
            I am glad you stopped by and please have a look around. Before you go, stop by the contact page and send me a message!
          </p>

          <div className="mt-10 grid grid-cols-3 gap-10 place-items-center"> 
            { homePageImages.map(image => {
              return (
                <div className={image.spaceContainerClasses} key={image.id}>
                  <div className={image.imgDivClasses}>
                    <Image
                    src={`/images/home/${image.name}`}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                    loading="lazy"
                    />
                  </div>
                  <p className={`${styles.subTitle}`}>{image.subTitle}</p>
                </div>
                )
              })
            }
          </div>
        </div>
      </main>
  );
}
