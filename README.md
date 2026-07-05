# KWC Logistics Inc. Website

Professional marketing website for KWC Logistics Inc., a family-run Canadian logistics company based in Kitchener, Ontario with 30 years of logistics experience.

Built with:

- Next.js App Router
- TypeScript
- Tailwind CSS
- SEO metadata, sitemap, and robots routes
- Responsive pages ready for Cloudflare Workers
- OpenNext for Cloudflare

## Pages

- Home
- Services
- Service Areas
- About
- Request a Quote
- Contact

## Local Development

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
pnpm run build
```

Start the production server locally:

```bash
pnpm run start
```

## Cloudflare Workers Build

This project is configured for Cloudflare Workers using OpenNext for Cloudflare.

Build the Worker output locally:

```bash
pnpm run build:cloudflare
```

Preview the Worker locally with Wrangler:

```bash
pnpm run preview:cloudflare
```

Deploy with Wrangler:

```bash
pnpm run deploy:cloudflare
```

Cloudflare dashboard settings:

- Framework preset: `None`
- Build command: `pnpm run build:cloudflare`
- Output directory: `.open-next/assets`
- Worker entrypoint: `.open-next/worker.js` from `wrangler.jsonc`

Required Cloudflare config files:

- `open-next.config.ts`
- `wrangler.jsonc`

## Deploy to Cloudflare

1. Push this repository to GitHub.
2. In Cloudflare, create a new Workers project from the repository.
3. Use the build settings listed above.
4. Deploy.
5. Add `kwclogistics.ca` as a custom domain or route for the Worker.
6. Update DNS records at the domain registrar to point to Cloudflare.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the default framework setting as **Next.js**.
5. Deploy.
6. Add `kwclogistics.ca` in Vercel project domains.
7. Update DNS records at the domain registrar to point to Vercel.

## Content Notes

- Phone is currently set to `416-300-8473`.
- Email is set to `dispatch@kwclogistics.ca`.
- The site intentionally does not publish a full street address yet and says `Based in Kitchener, Ontario`.
- The quote form submits through `/api/quote`, which forwards submissions to Web3Forms from the server. Add `WEB3FORMS_ACCESS_KEY` in Cloudflare with the Web3Forms key connected to `kwclogisticsinc@gmail.com`.
