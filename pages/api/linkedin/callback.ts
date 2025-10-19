// pages/api/linkedin/callback.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = req.query.code as string;

  if (!code) {
    return res.status(400).json({
      error: "Missing code from LinkedIn",
    });
  }

  try {
    const response = await fetch(
      "https://www.linkedin.com/oauth/v2/accessToken",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: "http://localhost:3000/api/linkedin/callback",
          client_id: process.env.LINKEDIN_CLIENT_ID!,
          client_secret: process.env.LINKEDIN_CLIENT_SECRET!,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({
        error: "Failed to get access token",
        details: data,
      });
    }

    return res.status(200).json({
      message: "Success! You got the access token 🎉",
      access_token: data.access_token,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Exception occurred during token exchange",
      details: error,
    });
  }
}
