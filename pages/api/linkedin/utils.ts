import type { NextApiRequest } from "next";

export const STATE_COOKIE = "linkedin_oauth_state";
export const VERIFIER_COOKIE = "linkedin_code_verifier";
export const ACCESS_TOKEN_COOKIE = "linkedin_access_token";

const COOKIE_ATTRIBUTES = ["Path=/", "HttpOnly", "SameSite=Lax"];

if (process.env.NODE_ENV === "production") {
  COOKIE_ATTRIBUTES.push("Secure");
}

export const buildCookieHeader = (
  name: string,
  value: string,
  maxAgeSeconds: number
) =>
  `${name}=${encodeURIComponent(
    value
  )}; Max-Age=${maxAgeSeconds}; ${COOKIE_ATTRIBUTES.join("; ")}`;

export const deleteCookieHeader = (name: string) =>
  `${name}=; Max-Age=0; ${COOKIE_ATTRIBUTES.join("; ")}`;

export const resolveRedirectUri = (req: NextApiRequest) => {
  if (process.env.LINKEDIN_REDIRECT_URI) {
    return process.env.LINKEDIN_REDIRECT_URI;
  }

  const protocol =
    (req.headers["x-forwarded-proto"] as string | undefined) ?? "http";
  const host = req.headers.host ?? "localhost:3000";
  return `${protocol}://${host}/api/linkedin/callback`;
};

export const readCookie = (req: NextApiRequest, key: string) => {
  if (req.cookies?.[key]) {
    return req.cookies[key];
  }

  const cookieHeader = req.headers.cookie;

  if (!cookieHeader) {
    return undefined;
  }

  for (const part of cookieHeader.split(";")) {
    const [name, ...rest] = part.trim().split("=");
    if (name === key) {
      const raw = rest.join("=");
      try {
        return decodeURIComponent(raw);
      } catch {
        return raw;
      }
    }
  }

  return undefined;
};
