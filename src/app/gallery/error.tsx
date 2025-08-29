"use client";

import { useEffect } from "react";
import PopularGalleriesClient from "../components/PopularGalleriesClient/PopularGalleriesClient";

export default function Error({
  error
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="container mx-auto text-center my-10">
      <p className="p">
        Sorry! I'm having trouble loading this gallery's images.{" "}
        <a
          className="text-gold hover:text-primary transition-colors"
          href="mailto:andre@covenantlx.com?subject=Images%20Not%20Loading"
        >
          Contact the photographer
        </a>{" "}
        to let him know.
      </p>

      <p className="mt-10 text-2xl text-center">
        In the meantime, please look at some of the other galleries below.
      </p>
      <PopularGalleriesClient />
    </section>
  );
}
