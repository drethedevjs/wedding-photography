import Link from "next/link";

export default function QuickLinks() {
  return (
    <div className="grid md:grid-cols-3 md:gap-0 gap-8 my-16 text-gray-700">
      <Link href="/investment">
        <div className="block">
          <h3 className="quick-link-header">Information</h3>
          <p className="sub-title">investment & details</p>
        </div>
      </Link>

      <div className="block middle">
        <h3 className="quick-link-header">Portfolio</h3>
        <p className="sub-title">
          <Link
            href="/portfolio/wedding"
            className="hover:text-gold hover:font-semibold"
          >
            Weddings
          </Link>
          &nbsp;//&nbsp;
          <Link
            href="/portfolio/engagement"
            className="hover:text-gold hover:font-semibold"
          >
            Engagements
          </Link>
        </p>
      </div>

      <div className="block">
        <h3 className="quick-link-header">Stay in Touch</h3>
        <p className="sub-title">
          <Link
            href="https://facebook.com/covenantlx"
            target="_blank"
            className="hover:text-gold hover:font-semibold"
          >
            Facebook
          </Link>
          &nbsp;//&nbsp;
          <Link
            href="https://www.pinterest.com/covenantlx/"
            target="_blank"
            className="hover:text-gold hover:font-semibold"
          >
            Pinterest
          </Link>
        </p>
      </div>
    </div>
  );
}
