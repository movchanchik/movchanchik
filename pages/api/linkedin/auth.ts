import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import {
  STATE_COOKIE,
  VERIFIER_COOKIE,
  buildCookieHeader,
  resolveRedirectUri,
} from "./utils";

const LINKEDIN_AUTH_URL =
  "https://www.linkedin.com/oauth/v2/authorization";

const toBase64Url = (input: Buffer) =>
  input
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const clientId = process.env.LINKEDIN_CLIENT_ID;

  if (!clientId) {
    return res.status(500).json({ error: "Missing LinkedIn client ID" });
  }

  const redirectUri = resolveRedirectUri(req);
  const scope =
    process.env.LINKEDIN_OAUTH_SCOPES ??
    "openid profile email w_member_social";

  const state = crypto.randomUUID();
  const codeVerifier = toBase64Url(crypto.randomBytes(32));
  const codeChallenge = toBase64Url(
    crypto.createHash("sha256").update(codeVerifier).digest()
  );

  res.setHeader("Set-Cookie", [
    buildCookieHeader(STATE_COOKIE, state, 600),
    buildCookieHeader(VERIFIER_COOKIE, codeVerifier, 600),
  ]);

  const authParams = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    redirect_uri: redirectUri,
    state,
    scope,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
  });

  res
    .status(307)
    .setHeader("Location", `${LINKEDIN_AUTH_URL}?${authParams.toString()}`)
    .end();
}
