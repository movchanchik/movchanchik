import type { NextApiRequest, NextApiResponse } from "next";
import {
  ACCESS_TOKEN_COOKIE,
  STATE_COOKIE,
  VERIFIER_COOKIE,
  buildCookieHeader,
  deleteCookieHeader,
  readCookie,
  resolveRedirectUri,
} from "./utils";

const LINKEDIN_TOKEN_URL = "https://www.linkedin.com/oauth/v2/accessToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const code = req.query.code as string | undefined;
  const returnedState = req.query.state as string | undefined;

  if (!code) {
    return res.status(400).json({
      error: "Missing authorization code from LinkedIn",
    });
  }

  const storedState = readCookie(req, STATE_COOKIE);
  const codeVerifier = readCookie(req, VERIFIER_COOKIE);

  if (!storedState || !codeVerifier) {
    return res.status(400).json({
      error: "OAuth verification data missing or expired. Please restart the sign-in flow.",
    });
  }

  if (!returnedState || returnedState !== storedState) {
    return res.status(400).json({
      error: "State mismatch. Authorization attempt rejected.",
    });
  }

  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(500).json({
      error: "LinkedIn client credentials are not configured on the server",
    });
  }

  try {
    const redirectUri = resolveRedirectUri(req);
    const tokenResponse = await fetch(LINKEDIN_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
        code_verifier: codeVerifier,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      return res.status(tokenResponse.status).json({
        error: "Failed to exchange authorization code for access token",
        details: tokenData,
      });
    }

    const expiresInSeconds = Number(tokenData.expires_in) || 3600;

    res.setHeader("Set-Cookie", [
      deleteCookieHeader(STATE_COOKIE),
      deleteCookieHeader(VERIFIER_COOKIE),
      buildCookieHeader(
        ACCESS_TOKEN_COOKIE,
        tokenData.access_token,
        Math.min(expiresInSeconds, 60 * 60 * 24)
      ),
    ]);

    return res.status(200).json({
      message: "LinkedIn authorization completed successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Exception occurred during token exchange",
      details: error instanceof Error ? error.message : error,
    });
  }
}
