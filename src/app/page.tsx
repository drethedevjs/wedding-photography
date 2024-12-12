import homePageImages from "@/data/homePageImages";
import Image from "next/image";
import Link from "next/link";
import styles from './Home.module.css';
import PhotogSnippet from "./components/PhotogSnippet/PhotogSnippet";
import QuickLinks from "./components/Quick Links/QuickLinks";

export default function Home() {
  return (
      <main>
        <div className={styles.slideShow}>
          <div className="flex flex-col xl:h-full">
            <div className="overflow-hidden flex items-center">
              <Image
                src="/images/Hero/Cowles-Hero-CSRA-Augusta-GA-Wedding-Photographer.jpg"
                layout="responsive"   // Ensures the image takes up the full width/height of the container
                height={1080}
                width={1920}
                alt="Popp'n bottles"
              />
            </div>
          </div>
        </div>
        <div className="cov-container gap-5 grid grid-cols-1 text-center">
          <p>
            I am here to provide couples in Augusta, GA with wedding photography that is bright, fun, 
            and vibrant. Past brides love not only my work but they thoroughly enjoyed spending time with 
            me as their wedding photographer. They choose me because we take moments that are meaningful and 
            make them memorable.
          </p>
          <p className="mb-20">
            I am glad you stopped by and please have a look around. Before you go, stop by the contact page and send me a message!
          </p>

          <div className="mt-10 grid lg:grid-cols-3 gap-10 place-items-center"> 
            { homePageImages.map(image => {
              return (
                <div className={image.spaceContainerClasses} key={image.id}>
                  <div className={image.imgDivClasses}>
                    <Link href={image.galleryLink}>
                      <Image
                        src={`/images/home/${image.name}`}
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                        loading="lazy"
                        className="hover:rotate-1 rounded-lg transition-transform"
                      />
                    </Link>
                  </div>
                  <p className={`${styles.subTitle}`}>{image.subTitle}</p>
                </div>
                )
              })
            }
          </div>
          <QuickLinks />
        </div>
        {/* <section className="relative w-screen h-screen overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/abDGu9RPAlM?autoplay=1&mute=1&loop=1&playlist=abDGu9RPAlM"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              width: "100vw",
              height: "100vh",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1.3)",
              objectFit: "cover",
            }}
          ></iframe>
        </section> */}
        <PhotogSnippet />
      </main>
  );
}
