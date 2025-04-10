"use client";
import React, { useEffect } from "react";
import UnderConstruction from "../components/underConstruction/UnderConstruction";

function Blog() {
  useEffect(() => {
    fetch("https://api.linkedin.com/v2/ugcPosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer AQWsFqi-0jgbypv2zRlaDDldUkj0y_Gkclnhdms6SrUx-I-q1pysTOxCB7befhV_6DBiz-1Fx91cOr0UhdPmLADqaDnpcHR8K-wQs4McGtFYmdHtcZjs__td0V3xWrqdbNmxb2JHutVBKAwfuR60CSQnL55GqF4ZS0yFtmmH2rIPMHsTpszXCsuwn2Qv2YHSUVMu37ofAV4yCXrnM_4xSacgSTZ6pc35vGjowPIO4qC4qMp9uB3vzG4wQwkbdNmc8WRjnUyRwQj9kbV2KK8mCOb9WuruWILT7qVjdmKIp8eRAvb06gE7IKkCPzb_Fk3BVDzq7mPSyK-aG6Pc1coii3EPLQ8uZw",
        "X-Restli-Protocol-Version": "2.0.0",
      },
      body: JSON.stringify({
        author: "urn:li:person:movchanchik",
        commentary: "Your post content here",
        visibility: "PUBLIC",
        // Additional fields as needed
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  return <UnderConstruction pageTitle="Blog" />;
}

export default Blog;
