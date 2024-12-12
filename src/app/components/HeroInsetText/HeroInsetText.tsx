import Image from "next/image"

export default function HeroInsetText() {
  return (
    <div className="container mx-auto md:px-0 px-5">
        <div className="relative w-full h-96 overflow-hidden rounded">
          <Image 
            src="/images/andre/andre-headshot-tux-bow-tie.jpg" 
            fill={true}
            style={{objectFit: "cover", objectPosition: "center"}}
            alt="A head-shot of the photographer smiling looking down and to the left."
          />
          <div className="absolute inset-10 flex items-center justify-center text-center text-white">
            <div className="lg:w-2/5 w-6/7">
              <h1 className="mb-5 italic tracking-wide">About</h1>
              <h2 className="text-2xl uppercase tracking-widest">
                Making Weddings A Day to Remember
              </h2>
            </div>
          </div>
        </div>
    </div>
  )
}
