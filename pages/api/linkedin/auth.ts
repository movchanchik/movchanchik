// pages/api/linkedin/auth.ts
import type { NextApiRequest, NextApiResponse } from "next";

const client_id = process.env.LINKEDIN_CLIENT_ID;
const redirect_uri = "http://localhost:3000/api/linkedin/callback";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!client_id) {
    return res.status(500).json({ error: "Missing LinkedIn client ID" });
  }
  console.log("🔁 API route /api/linkedin/auth triggered");
  const authURL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${client_id}&redirect_uri=${encodeURIComponent(
    redirect_uri
  )}&state=movchanchik&&scope=openid%20profile%20email%20w_member_social`;

  res.redirect(authURL);
}
