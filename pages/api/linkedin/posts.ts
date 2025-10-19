import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN!;

  if (!accessToken) {
    return res.status(401).json({ error: "Access token not found" });
  }

  try {
    // Step 1: Get user info
    const profileRes = await fetch("https://api.linkedin.com/v2/userinfo", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const profile = await profileRes.json();

    if (!profile.sub) {
      return res.status(500).json({
        error: "Could not retrieve LinkedIn profile ID",
        profile,
      });
    }

    // ✅ Use correct person URN based on sub

    // Step 2: Get user's UGC posts
    const postsRes = await fetch(
      `https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(urn:li:organization:${profile.sub})&sortBy=LAST_MODIFIED`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "X-Restli-Protocol-Version": "2.0.0",
        },
      }
    );

    const posts = await postsRes.json();

    if (!postsRes.ok) {
      return res.status(500).json({
        error: "LinkedIn API error",
        details: posts,
      });
    }

    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json({ error: "Unhandled error", details: err });
  }
}
