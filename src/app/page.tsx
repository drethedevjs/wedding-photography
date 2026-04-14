import homePageImages from "@/data/homePageImages";
import imageHelper from "@/utils/ImageHelper";
import Image from "next/image";
import Link from "next/link";
import PhotogSnippet from "./components/PhotogSnippet/PhotogSnippet";
import QuickLinks from "./components/Quick Links/QuickLinks";

export default async function Home() {
  const imageData = await imageHelper.getImageData("home");
  return (
    <>
      <div className="relative w-full h-96 lg:h-[calc(100dvh-122px)]">
        <Image
          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_DELIVERY_URL}/augusta-ga-wedding-photographer-cowles-271_ovxvsd.jpg`}
          alt="Popp'n bottles"
          fill
          priority
          className="object-cover w-full h-full"
        />
      </div>
      <div className="cov-container gap-5 grid grid-cols-1 text-center">
        <p>
          Your wedding day is one of the first pages of the most important story
          you'll ever live. I'm Andre, and at Covenant LX I create bright,
          vibrant, joyful images for couples in Augusta & the CSRA — photos that
          don't just show what happened, but how it felt.
        </p>
        <p className="lg:mb-20 mb-10">
          Couples who work with me say the same thing: they forgot I was even
          working. That's the goal. Real moments. Real emotion. Images you'll
          still love in 30 years. Let's talk about your day →
        </p>
      </div>

      <div className="container mx-auto text-center px-5">
        <div className="lg:mt-10 grid lg:grid-cols-3 gap-10 place-items-center">
          {homePageImages.map(image => {
            return (
              <div className={image.spaceContainerClasses} key={image.id}>
                <div className={image.imgDivClasses}>
                  <Link href={`gallery?id=${image.id}`}>
                    <Image
                      src={`https://cdn.covenantlx.com/${
                        imageData
                          ? imageData.find(data =>
                              data.Key?.includes(image.name)
                            )?.Key
                          : ""
                      }`}
                      width={image.width}
                      height={image.height}
                      alt={image.alt}
                      loading="lazy"
                      className="hover:rotate-1 rounded-lg transition-transform hover:scale-95 shadow-lg"
                    />
                  </Link>
                </div>
                <p className="sub-title">{image.subTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cov-container text-center">
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
    </>
  );
}
