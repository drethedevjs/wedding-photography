import React from "react";

export default function TextTitleBlock({
  heading,
  children
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h3 className="text-3xl mb-4 tracking-widest uppercase text-gold">
        {heading}
      </h3>
      <p className="mb-10">{children}</p>
    </>
  );
}
