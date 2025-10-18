import Image from "next/image";
import Link from "next/link";

export default function PhotogSnippet() {
  return (
    <div className="photog-snip-container">
      <div className="h-full flex flex-col">
        <div className="relative w-full h-full">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_PREFIX}/andre/augusta-ga-wedding-photographer-andre-2.jpg`}
            width={2000}
            height={2000}
            style={{ objectFit: "cover" }}
            alt="A close up of Andre's smiling face."
            className="rounded-lg"
          />
        </div>
      </div>
      <div>
        <h2 className="snippet-header">Wedding Photographer</h2>
        <p className="mb-5">
          As a photographer, it is important to click the shutter button but it
          is just as important to click with the people. Weddings are elegant in
          many respects but they shouldn't be stuffy.
        </p>
        <p className="mb-5">
          When I come to do my job, I like to have fun. No, I'm not a party
          animal but I enjoy laughing and getting to know people. The secret
          ingredient amazing pictures is to enjoyed connecting with one another.
        </p>
        <p className="mb-5">
          Feel free to reach out. I'm hoping we can connect so I can document
          your day!
        </p>
        <Link href="/about">
          <button className="cov-btn">More About Me</button>
        </Link>
      </div>
    </div>
  );
}
