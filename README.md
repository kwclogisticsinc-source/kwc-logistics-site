# KWC Logistics Inc. Website

Professional marketing website for KWC Logistics Inc., a family-run logistics company based in Kitchener, Ontario.

Built with:

- Next.js App Router
- TypeScript
- Tailwind CSS
- SEO metadata, sitemap, and robots routes
- Responsive pages ready for Vercel

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
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the default framework setting as **Next.js**.
5. Deploy.
6. Add `kwclogistics.ca` in Vercel project domains.
7. Update DNS records at the domain registrar to point to Vercel.

## Content Notes

- Phone is currently set to `519-XXX-XXXX`.
- Email is set to `dispatch@kwclogistics.ca`.
- The site intentionally does not publish a full street address yet and says `Based in Kitchener, Ontario`.
- The quote form is static and ready to connect to a form handler, CRM, or email service before launch.
