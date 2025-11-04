import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Convert | Movchanchik",
  description:
    "Experimental utilities and converters crafted by Inna Movchan. New tools arrive as prototypes are validated.",
};

function Convert() {
  return (
    <section>
      <h1>Conversion Tools</h1>
      <p>Prototype utilities will appear here as they are production-ready.</p>
    </section>
  );
}

export default Convert;
