import type { Metadata } from "next";
import React from "react";
import UnderConstruction from "../components/underConstruction/UnderConstruction";

export const metadata: Metadata = {
  title: "Blog | Movchanchik",
  description:
    "Insights, notes, and frontend learnings from Inna Movchan. Fresh posts are on the way.",
};

function Blog() {
  return <UnderConstruction pageTitle="Blog" />;
}

export default Blog;
