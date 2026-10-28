# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Viliha Web Services corporate website: Next.js 15, React 19, TypeScript, Tailwind CSS 4, pnpm.

Production URL: https://viliha.com (GitHub Pages, static export)

## Commands

```bash
pnpm install                      # Install dependencies
pnpm dev                          # Development: http://localhost:3000
pnpm build                        # Production build
pnpm start                        # Start production server
pnpm lint                         # Run ESLint
```

## Deployment

`.github/workflows/nextjs.yml` deploys on every push to `main`. It builds a static export (`output: "export"`, injected by `actions/configure-pages`) and publishes `out/` to GitHub Pages.

GitHub Pages is static-only, so the workflow deletes `src/app/api` before building. The contact form's API routes do not run on Pages.
Any route must be statically renderable: dynamic routes need `generateStaticParams`, and metadata routes need `export const dynamic = "force-static"`.

## SEO / AEO

Follows `seo_and_aeo_engineering_standard.md` (v2.1). Rules that bite:
- Every page builds metadata and JSON-LD from one `seo` object: `pageMetadata(seo)` and `<JsonLd {...seo} crumbs={...} />` (`src/lib/seo.ts`). That gives exactly one `@graph` per page.
- Title ≤ 60 chars ending `| Viliha`; description 140–160 chars; both unique.
- Schema and `public/llms.txt` may only state facts visible on the site: no invented `sameAs`, addresses, phone numbers, ratings, or FAQ entries.
- Tab and accordion content must stay in the HTML (hide it, don't unmount it).
- `scripts/seo_check.py` runs the gates against `out/` in CI and fails the deploy.

## Architecture

**Pages** (`src/app/`):
| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about-us` | About page |
| `/contact` | Contact form with reCAPTCHA v3 |
| `/services` | Services listing |
| `/services/[slug]` | Dynamic service pages |
| `/software-development/[slug]` | Location landing pages (SEO) |
| `/privacy-policy` | Privacy policy |
| `/terms-conditions` | Terms & conditions |
| `/api/verify-recaptcha` | Server-side reCAPTCHA verification |
| `/api/send-email` | Contact form email via Resend |

`src/lib/seo.ts` - `pageMetadata()` and `pageGraph()` (single JSON-LD graph)

**Components** (`src/components/`):
- `Header.tsx` - Navigation with mega menu dropdown
- `Footer.tsx` - Multi-column footer
- `Breadcrumb.tsx` - Breadcrumbs (desktop + mobile)
- `ContactForm.tsx` - Form with client + server reCAPTCHA v3 validation
- `CookieConsent.tsx` - Cookie consent banner
- `JsonLd.tsx` - Structured data
- `TechStackTabs.tsx` - Technology stack tabs on homepage
- `FaqAccordion.tsx` - FAQ accordion component
- `ServiceTabs.tsx` - Tabbed content for service pages

**Content** (`src/content/`):
- `home.ts` - Homepage content (hero, services, tech stack, case studies)
- `services.ts` - Service pages data with `getServiceBySlug()` helper
- `locations.ts` - Location landing pages data

**Lib** (`src/lib/`):
- `config.ts` - Site metadata, navigation menus, email config
- `email-templates.ts` - Customer and internal notification emails
- `rate-limit.ts` - Rate limiting for API routes

## Environment Variables

`.env.local` (never commit values):
```
RECAPTCHA_SECRET_KEY=
RESEND_API_KEY=
```

## Adding New Service Pages

Edit `src/content/services.ts` and add to the `services` array:
```typescript
{
  slug: "new-service",
  title: "New Service",
  metaTitle: "New Service | Viliha",
  description: "Description for SEO",
  intro: { pageTitle, mainTitle, paragraph, buttonText, buttonUrl, image, imageAlt },
  sections: [] // Optional tabbed content
}
```

## External Services

| Service | Purpose |
|---------|---------|
| ImageKit CDN | Image hosting: `https://ik.imagekit.io/viliha/images/` |
| Google reCAPTCHA v3 | Form protection (site key `6Lfp93QrAAAAAKKxShtL7B4EJjaU16e_uN7DB-lj`) |
| Resend | Contact form email delivery |
| GitHub Pages | Hosting |
