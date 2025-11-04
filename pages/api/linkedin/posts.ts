import type { NextApiRequest, NextApiResponse } from "next";
import { ACCESS_TOKEN_COOKIE, readCookie } from "./utils";

const LINKEDIN_API_BASE = "https://api.linkedin.com/v2";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const accessToken =
    readCookie(req, ACCESS_TOKEN_COOKIE) ?? process.env.LINKEDIN_ACCESS_TOKEN;

  if (!accessToken) {
    return res.status(401).json({ error: "LinkedIn access token not found" });
  }

  try {
    const profileRes = await fetch(`${LINKEDIN_API_BASE}/userinfo`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!profileRes.ok) {
      const details = await profileRes.json().catch(() => ({}));
      return res.status(profileRes.status).json({
        error: "Failed to load LinkedIn profile",
        details,
      });
    }

    const profile: { sub?: string } = await profileRes.json();

    if (!profile.sub) {
      return res.status(500).json({
        error: "Could not retrieve LinkedIn profile ID",
        profile,
      });
    }

    const authorUrn = `urn:li:person:${profile.sub}`;
    const postsRes = await fetch(
      `${LINKEDIN_API_BASE}/ugcPosts?q=authors&authors=List(${authorUrn})&sortBy=LAST_MODIFIED`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "X-Restli-Protocol-Version": "2.0.0",
        },
      }
    );

    const posts = await postsRes.json();

    if (!postsRes.ok) {
      return res.status(postsRes.status).json({
        error: "LinkedIn API error",
        details: posts,
      });
    }

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: "Unhandled error", details: error });
  }
}
