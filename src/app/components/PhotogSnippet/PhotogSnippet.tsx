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
          The secret to great wedding photos? Actually enjoying each other.
        </p>
        <p className="mb-5">
          Any photographer can press a shutter button. What I care just as much
          about is clicking with the people in front of my lens.
        </p>
        <p className="mb-5">
          Weddings are beautiful, meaningful occasions — but they don't have to
          be stiff. I show up ready to laugh, get to know you, and make the
          whole experience feel easy.
        </p>
        <p className="mb-5">
          The best images come out of real moments, and real moments happen when
          everyone's having a good time. If that sounds like your kind of day,
          I'd love to hear from you.
        </p>
        <Link href="/about">
          <button>More About Me</button>
        </Link>
      </div>
    </div>
  );
}
