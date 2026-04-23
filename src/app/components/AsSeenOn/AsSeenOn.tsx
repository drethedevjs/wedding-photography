export default function AsSeenOn() {
  // Placeholder publications — swap with real logos/badges when available.
  const publications = [
    "The Knot",
    "WeddingWire",
    "Southern Weddings",
    "Junebug",
    "Martha Stewart"
  ];

  return (
    <section className="w-full bg-white border-y border-lightGray">
      <div className="container mx-auto px-6 md:px-10 py-12 lg:py-16">
        <p className="text-center font-display italic text-gold tracking-[0.3em] uppercase text-xs mb-8">
          As Seen On
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-16 gap-y-6">
          {publications.map(pub => (
            <span
              key={pub}
              className="font-display text-secondary text-lg md:text-xl tracking-widest uppercase opacity-60"
            >
              {pub}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
