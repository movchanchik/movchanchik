# Movchanchik – Personal Frontend Portfolio

This is Inna Movchan’s personal site: a responsive Next.js application that highlights experience, projects, and writing while experimenting with playful UI flourishes.

## Tech Stack
- Next.js 15 (App Router, TypeScript, Turbopack)
- React 19 with CSS Modules
- Vercel Analytics & Speed Insights

## Local Development

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:3000`.

| Script | Purpose |
| ------ | ------- |
| `npm run dev` | Start the development server with Turbopack |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run the Next.js lint configuration |

## Environment Variables

OAuth with LinkedIn powers the blog/updates integration. Define the following server-side variables (e.g. in `.env.local`):

| Variable | Required | Description |
| -------- | -------- | ----------- |
| `LINKEDIN_CLIENT_ID` | ✅ | OAuth 2.0 client ID from LinkedIn |
| `LINKEDIN_CLIENT_SECRET` | ✅ | OAuth 2.0 client secret from LinkedIn |
| `LINKEDIN_REDIRECT_URI` | Optional | Callback URL registered with LinkedIn; defaults to `https://<host>/api/linkedin/callback` |
| `LINKEDIN_OAUTH_SCOPES` | Optional | Space-separated scopes; defaults to `openid profile email w_member_social` |

The LinkedIn API routes store access tokens in an HTTP-only cookie named `linkedin_access_token`. No token is ever exposed to the browser console or query string.

## Project Structure

```
src/app
├── components     # Reusable UI (hero, navigation, footer, etc.)
├── blog           # Blog landing (under construction)
├── contact        # Contact details page
├── experience     # Experience timeline (under construction)
├── skills         # Skills overview (under construction)
└── convert        # Prototype utilities
```

Assets (images, resume PDF) live in `src/app/images` and `public/`.

## Accessibility & UX
- Semantic headings in the hero section to give screen readers a clear entry point.
- Mobile navigation exposes `aria` attributes, traps focus, and disables background scrolling while open.
- Decorative visuals (animated circles) are marked as `aria-hidden` and throttled for performance.

## Deployment

The project is optimised for Vercel, but any platform that supports Node.js 18+ will work:

```bash
npm run build
npm run start
```

Ensure the LinkedIn environment variables are configured in the hosting dashboard before deploying.

## Contributing

The repository is currently maintained by Inna, but issues and suggestions are welcome. Run `npm run lint` before opening a pull request to keep the codebase consistent.

