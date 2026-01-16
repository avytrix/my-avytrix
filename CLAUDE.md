# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Viliha Web Services corporate website with two separate codebases:
- **`hugo/`** - Original Hugo static site generator version
- **`nextjs/`** - Next.js 15 version with React 19, TypeScript, Tailwind CSS 4

Production URL: https://www.viliha.com

## Project Structure

```
hugo-viliha/
├── hugo/                   # Hugo static site
│   ├── content/            # Markdown content pages
│   ├── themes/viliha-theme/
│   ├── static/             # Static assets
│   ├── archetypes/
│   ├── hugo.toml           # Site config
│   └── vercel.json         # Vercel deployment config
├── nextjs/                 # Next.js application
│   ├── src/app/            # App Router pages & API routes
│   ├── src/components/     # React components
│   ├── src/content/        # Content data (TypeScript)
│   ├── src/lib/            # Utilities & config
│   └── .env.local          # Environment variables
└── CLAUDE.md
```

---

## Hugo (hugo/)

### Commands

```bash
cd hugo

# Development
hugo server --config hugo.toml    # http://localhost:1313

# Production build
hugo --config hugo.toml           # Output: public/
```

Hugo version: 0.152.2

### Architecture

**Config:** Split between `hugo.toml` (site-level) and `themes/viliha-theme/hugo.toml` (menus, mega menu, reCAPTCHA keys)

**Layouts** (`themes/viliha-theme/layouts/`):
- `index.html` - Homepage
- `_default/layout-service-detail.html` - Service pages
- `_default/layout-contact.html` - Contact page with form
- `_default/legal-page.html` - Privacy policy, terms

**Partials:** `header.html` (mega menu), `footer.html`, `cookie-consent.html`, `translator.html`

**Content** (`content/`):
- `services/` - 11 service pages
- `technologies/` - Tech stack pages
- Root: `about-us.md`, `contact.md`, `privacy-policy.md`, `terms-conditions.md`

---

## Next.js (nextjs/)

### Commands

```bash
cd nextjs

pnpm install                      # Install dependencies
pnpm dev                          # Development: http://localhost:3000
pnpm build                        # Production build
pnpm start                        # Start production server
pnpm lint                         # Run ESLint
```

### Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- pnpm

### Architecture

**Pages** (`src/app/`):
| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about-us` | About page |
| `/contact` | Contact form with reCAPTCHA v3 |
| `/services` | Services listing |
| `/services/[slug]` | Dynamic service pages (11 total) |
| `/privacy-policy` | Privacy policy |
| `/terms-conditions` | Terms & conditions |
| `/api/verify-recaptcha` | Server-side reCAPTCHA verification |

**Components** (`src/components/`):
- `Header.tsx` - Navigation with mega menu dropdown
- `Footer.tsx` - Multi-column footer
- `ContactForm.tsx` - Form with client + server reCAPTCHA v3 validation
- `CookieConsent.tsx` - Cookie consent banner
- `TechStackTabs.tsx` - Technology stack tabs on homepage
- `FaqAccordion.tsx` - FAQ accordion component
- `ServiceTabs.tsx` - Tabbed content for service pages

**Content** (`src/content/`):
- `home.ts` - Homepage content (hero, services, tech stack, case studies)
- `services.ts` - All 11 service pages data with `getServiceBySlug()` helper

**Config** (`src/lib/config.ts`):
- Site metadata, navigation menus, API keys, EmailJS config

### Environment Variables

`.env.local`:
```
RECAPTCHA_SECRET_KEY=6Lfp93QrAAAAANc1UFOxBOv-IBIb0anR-lAXgKOI
ABSTRACT_API_KEY=6db0b5c93c2444a38435337db3622efa
```

### Adding New Service Pages

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

---

## External Services

| Service | Purpose |
|---------|---------|
| ImageKit CDN | Image hosting: `https://ik.imagekit.io/viliha/images/` |
| Google reCAPTCHA v3 | Form protection (server-side in Next.js) |
| Abstract API | Email reputation/spam checking |
| EmailJS | Contact form email delivery |
| Vercel | Deployment platform |

## reCAPTCHA v3 Keys

- **Site Key:** `6Lfp93QrAAAAAKKxShtL7B4EJjaU16e_uN7DB-lj`
- **Secret Key:** In `.env.local` (server-side only)
