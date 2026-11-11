import { siteConfig } from "@/lib/config";

// Products we build and run, shown on /our-work. Every fact here must be
// checkable on the product's own site, its public GitHub repository or npm (standard section 0).

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  logo: { src: string; width: number; height: number };
  problem: string;
  built: string[];
  facts: { label: string; value: string }[];
  links: ProjectLink[];
  expertise: ProjectLink[];
  // schema.org type for the JSON-LD list
  schemaType: "SoftwareApplication" | "SoftwareSourceCode";
  // programmingLanguage for SoftwareSourceCode
  language?: string;
  url: string;
}

const service = (slug: string, label: string): ProjectLink => ({ label, href: `/services/${slug}` });

export const projects: Project[] = [
  {
    slug: "pulse",
    name: "Pulse",
    tagline: "Decision data for commerce and AI shopping agents",
    logo: { src: `${siteConfig.cdnUrl}/case-studies/pulse-logo.webp`, width: 600, height: 200 },
    problem:
      "Shoppers leave when a catalogue cannot tell two products apart. Pulse measures whether a store's product data can answer the questions shoppers actually ask, and ranks the attributes worth fixing.",
    built: [
      "Open Pulse, the open-source part: a browser SDK and an MCP server that let AI agents ask what evidence a buying decision needs.",
      "A marketing site in English and Vietnamese, built with Next.js as a static export, with semantic search that runs in the browser.",
      "A developer handbook and runnable examples, so other teams can build on the SDK and the MCP server.",
    ],
    facts: [
      { label: "Open source", value: "@thepulseapi/sdk and @thepulseapi/mcp on npm" },
      { label: "License", value: "MIT" },
      { label: "Stack", value: "TypeScript, Next.js, MCP" },
      { label: "Languages", value: "English and Vietnamese" },
    ],
    links: [
      { label: "thepulseapi.com", href: "https://thepulseapi.com/en" },
      { label: "Open Pulse on GitHub", href: "https://github.com/mypulseapi/open-pulse" },
      { label: "MCP server on npm", href: "https://www.npmjs.com/package/@thepulseapi/mcp" },
    ],
    expertise: [
      service("ai-development", "AI Development"),
      service("mcp-server-development", "MCP Server Development"),
      service("web-development", "Web Development"),
    ],
    schemaType: "SoftwareApplication",
    url: "https://thepulseapi.com/en",
  },
  {
    slug: "viliha",
    name: "Viliha",
    tagline: "An admin theme you describe in your own words",
    logo: { src: `${siteConfig.cdnUrl}/case-studies/viliha-logo.svg`, width: 168, height: 32 },
    problem:
      "Teams lose weeks building admin screens before they can work on their actual product. With Viliha you describe the admin you need and download editable frontend source that you connect to your own backend.",
    built: [
      "One design system with shared tokens for color, type and radius that renders the same components in six framework editions.",
      "Voilet, the assistant that turns a plain request into a theme, screens and a configuration you can preview before you download.",
      "Ready screens and components: an editable data table with CSV, JSON, Excel and PDF import and export, themed charts, a command palette and dark mode.",
      "The storefront, the operator back office and two NestJS APIs behind it, all in one tested monorepo.",
    ],
    facts: [
      { label: "Editions", value: "React, Next.js, Vue, Angular, HTML and Laravel" },
      { label: "Styling", value: "Tailwind CSS with design tokens" },
      { label: "Delivery", value: "Frontend source in a zip you own" },
      { label: "Backend", value: "NestJS APIs for the store and back office" },
    ],
    links: [
      { label: "viliha.com", href: "https://viliha.com" },
      { label: "Free components on GitHub", href: "https://github.com/myviliha/internal" },
    ],
    expertise: [
      service("ux-ui-design", "UX/UI Design"),
      service("web-development", "Web Development"),
      service("ai-development", "AI Development"),
      service("custom-software-development", "Custom Software"),
    ],
    schemaType: "SoftwareApplication",
    url: "https://viliha.com",
  },
  {
    slug: "nestjs-drizzle",
    name: "Nestjs Drizzle",
    tagline: "Open-source CRUD for NestJS and Drizzle ORM",
    logo: { src: siteConfig.logoUrl, width: 160, height: 64 },
    problem:
      "Every NestJS API repeats the same create, read, update and delete code for each table. Nestjs Drizzle gives every entity filtering, pagination, soft delete, bulk writes and relations from one configuration.",
    built: [
      "A typed service and controller factory for PostgreSQL, MySQL and SQLite, with tenant scoping, optimistic locking and OpenAPI docs.",
      "An MCP server shipped inside the package, so AI coding agents can read the docs while they write code.",
      "More than 300 automated tests, a MySQL test lane in CI, and npm releases signed with provenance.",
    ],
    facts: [
      { label: "Package", value: "@avytrix/nestjs-drizzle-crud on npm" },
      { label: "License", value: "MIT" },
      { label: "Databases", value: "PostgreSQL, MySQL and SQLite" },
      { label: "Stack", value: "TypeScript, NestJS, Drizzle ORM" },
    ],
    links: [
      { label: "Documentation", href: "https://crud.avytrix.dev" },
      { label: "GitHub repository", href: "https://github.com/avytrix/nestjs-drizzle-crud" },
      { label: "npm package", href: "https://www.npmjs.com/package/@avytrix/nestjs-drizzle-crud" },
    ],
    expertise: [
      service("api-development", "API Development"),
      service("custom-software-development", "Custom Software"),
      service("mcp-server-development", "MCP Server Development"),
      service("qa-and-testing", "QA and Testing"),
    ],
    schemaType: "SoftwareSourceCode",
    language: "TypeScript",
    url: "https://crud.avytrix.dev",
  },
  {
    slug: "vela",
    name: "vela",
    tagline: "Folder and file permissions for self-hosted GitLab CE",
    logo: { src: siteConfig.logoUrl, width: 160, height: 64 },
    problem:
      "GitLab Free cannot say that only the frontend team may change the frontend folder. vela adds view, read and write rules for each file and folder, per user or group, without a higher GitLab tier.",
    built: [
      "A server hook that rejects any push, web edit, API commit or merge touching a path the person may not change, using only GitLab's documented hooks.",
      "An overlay that hides paths in file lists, search, diffs, the API and GraphQL, with a settings page under Project Settings. A git clone still gets every file, and the docs say so.",
      "A rules engine in plain Ruby with no runtime dependencies that fails closed, with end-to-end tests on real GitLab CE releases.",
    ],
    facts: [
      { label: "License", value: "MIT" },
      { label: "Tested on", value: "GitLab CE 15.11 to 19.5" },
      { label: "Levels", value: "View, read and write per file or folder" },
      { label: "Stack", value: "Ruby, no runtime dependencies" },
    ],
    links: [{ label: "GitHub repository", href: "https://github.com/avytrix/vela" }],
    expertise: [
      service("custom-software-development", "Custom Software"),
      service("cloud-solutions", "Cloud Solutions"),
      service("qa-and-testing", "QA and Testing"),
    ],
    schemaType: "SoftwareSourceCode",
    language: "Ruby",
    url: "https://github.com/avytrix/vela",
  },
];

// How we build, drawn from the projects above
export const practices = [
  {
    title: "Tested before it ships",
    content: "Automated test suites run on every change, from unit tests to end-to-end checks against real databases.",
  },
  {
    title: "Built for AI agents",
    content: "Pulse and Nestjs Drizzle ship MCP servers, so AI assistants can work with them directly.",
  },
  {
    title: "Accessible and findable",
    content: "Accessibility and SEO checks run in CI, so a page that breaks them never reaches production.",
  },
  {
    title: "Secure supply chain",
    content: "Pinned dependencies, signed npm releases and protected release branches keep what we ship traceable.",
  },
];
