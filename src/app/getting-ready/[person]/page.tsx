import { notFound } from "next/navigation";

export default async function Bride({
  params
}: {
  params: Promise<{ person: "bride" | "groom" }>;
}) {
  const { person } = await params;

  if (person !== "bride" && person !== "groom") {
    notFound();
  }

  const capitalizedPerson = person.charAt(0).toUpperCase() + person.slice(1);

  return (
    <section>
      <div className="cov-container-page text-center">
        <h1 className="pageH1">{capitalizedPerson}</h1>
        <p>
          To capture the perfect moments on your wedding day, please have the
          following items ready for photographing. Having these items prepared
          in advance will ensure a smooth and efficient day when I arrive. This
          way, we can maximize our time together and focus on creating beautiful
          memories without any last-minute rush.
        </p>
        {person === "bride" ? (
          <ul className="text-3xl space-y-3 mt-5">
            <li>Wedding dress</li>
            <li>Shoes and accessories</li>
            <li>Jewelry and veil/headpiece</li>
            <li>Bouquet</li>
            <li>Any heirloom items or sentimental pieces</li>
            <li>Wedding/Engagement ring</li>
          </ul>
        ) : (
          <ul className="text-3xl space-y-3 mt-5">
            <li>Wedding suit or tuxedo</li>
            <li>Shoes and accessories</li>
            <li>Tie or bow tie</li>
            <li>Boutonniere</li>
            <li>Any heirloom items or sentimental pieces</li>
            <li>Wedding ring</li>
          </ul>
        )}
      </div>
    </section>
  );
}
