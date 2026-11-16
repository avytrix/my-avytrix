# avytrix.dev

The website of [Avytrix Technologies](https://avytrix.dev), a software development company. It covers our services, region pages for web development, the products we build ([Our Work](https://avytrix.dev/our-work)), the docs of our open-source projects ([Open Source](https://avytrix.dev/opensource)) and a contact form.

Built with Next.js 16, React 19, TypeScript and Tailwind CSS 4. It is exported as static files and hosted on GitHub Pages.

## Run it locally

You need Node.js 24 and pnpm 10.

```bash
pnpm install
cp .env.example .env.local   # then fill in the values
pnpm dev                     # http://localhost:3000
```

The build stops if a required variable in `.env.local` is missing. Nothing environment-specific is written into the code: the brand name, site URL, emails, image CDN and keys all come from these variables.

## Commands

| Command | What it does |
| ------- | ------------ |
| `pnpm dev` | Development server |
| `pnpm build` | Production build (`NEXT_OUTPUT=export` gives the static site in `out/`) |
| `pnpm lint` | ESLint |
| `pnpm type-check` | TypeScript check |
| `python3 scripts/seo_check.py` | SEO checks against `out/`, the same ones CI runs |

## Project layout

```
src/app/         pages and routes (home, services, web-development regions, our-work, opensource, contact, legal)
src/components/  header, footer, contact form, structured data and other UI
src/content/     page content: services, regions, projects, open source
src/lib/         site config, SEO helpers, contact form rules, email templates
worker/          Cloudflare Worker that receives the contact form
scripts/         SEO check, trailing-slash redirects, Worker deploy, email template upload
```

## Open source

[avytrix.dev/opensource](https://avytrix.dev/opensource) lists our MIT-licensed projects. Their docs are served from this site:

| Project | Docs | Code |
| ------- | ---- | ---- |
| Nestjs Drizzle (`@avytrix/nestjs-drizzle-crud` on npm), CRUD for NestJS and Drizzle ORM | [avytrix.dev/opensource/nestjs-drizzle-crud](https://avytrix.dev/opensource/nestjs-drizzle-crud) | [avytrix/nestjs-drizzle-crud](https://github.com/avytrix/nestjs-drizzle-crud) |
| vela, folder and file permissions for self-hosted GitLab CE | [avytrix.dev/opensource/gitlab-vela](https://avytrix.dev/opensource/gitlab-vela) | [avytrix/vela](https://github.com/avytrix/vela) |

The docs live in their own repositories. The `Build site` CI job checks out each repo's `main`, builds its docs under `/opensource/<slug>`, runs that repo's own SEO gate and copies the result into `out/opensource/<slug>/` (this site's SEO gate and redirect script skip those folders). CI runs daily at 03:00 UTC, so docs merged there go live within a day. To publish sooner, run Actions, then CI, then Run workflow on `main`, or send a `docs-updated` [repository_dispatch](https://docs.github.com/en/rest/repos/repos#create-a-repository-dispatch-event). To build other refs, pass the `crud_docs_ref` and `vela_docs_ref` inputs of a manual run, or set the `CRUD_DOCS_REF` and `VELA_DOCS_REF` repository variables (they also apply to pull requests and the daily run).

## How it is deployed

Work goes from a feature branch into `develop` (squash merge), then from `develop` into `main` (merge commit). Both branches are protected, and only admins can merge into `main`.

Every pull request runs lint, type check and a full build, docs included. Every push to `main`, and the daily run, builds the static site, runs the SEO checks and publishes it to GitHub Pages.

Site settings such as the phone numbers and emails are repository variables (Settings, then Secrets and variables, then Actions, Variables tab). They are read at build time, so after changing one, redeploy with Actions, then CI, then Run workflow on `main`.

GitHub Pages only serves files, so the contact form posts to a Cloudflare Worker in `worker/`. It checks reCAPTCHA, limits requests per visitor and sends the emails through Resend. Deploy it with `scripts/deploy-contact-worker.sh`, which reads its secrets from `.env.local`.

## Services it uses

| Service | For |
| ------- | --- |
| GitHub Pages | Hosting |
| ImageKit | Images |
| Cloudflare Workers | Contact form backend |
| Google reCAPTCHA v3 | Spam protection on the form |
| Resend | Contact form emails |
| Upstash Redis | Rate limits on the form |

## Contributing

The rules for changing the code, including the SEO standard every page follows, are in [CLAUDE.md](./CLAUDE.md). For a project of your own, [get in touch](https://avytrix.dev/contact).
