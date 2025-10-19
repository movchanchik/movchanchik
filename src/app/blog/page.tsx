"use client";
import React from "react";
import UnderConstruction from "../components/underConstruction/UnderConstruction";

function Blog() {
  const response = await fetch("https://api.linkedin.com/v2/me", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  const profile = await response.json();
  console.log(profile);

  return <UnderConstruction pageTitle="Blog" />;
}

export default Blog;
