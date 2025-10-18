import Link from "next/link";

export default function BridalShow() {
  return (
    <section className="cov-container">
      <h1 className="pageH1">Bridal Show Aftermath</h1>
      <div className="grid gap-3">
        <Link href="/bridal-show/build">
          <button className="cov-btn">Build</button>
        </Link>
        <Link href="/bridal-show/send">
          <button className="cov-btn">Send</button>
        </Link>
      </div>
    </section>
  );
}
