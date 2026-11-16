import { siteConfig } from "@/lib/config";

// Copy for /opensource. The projects themselves (facts, links) come from projects.ts.
export const openSourceContent = {
  hero: {
    title: "Open Source by Our Team",
    paragraph: `${siteConfig.name} publishes the tools it builds for its own work under the MIT license. Anyone can use them, read every line and send a fix. Each project has its documentation on this site, a public repository on GitHub and automated tests that run on every change.`,
  },
  reasons: [
    {
      title: "Real project problems",
      content: "Each one removes a common pain: CRUD code repeated for every NestJS table, and the path permissions GitLab Free lacks.",
    },
    {
      title: "Code you can inspect",
      content: "The source, the tests and the release history are public, so you can judge the work before you hire us.",
    },
    {
      title: "Free to use",
      content: "Both projects are MIT licensed. Use them in commercial work without asking us first.",
    },
  ],
  cta: {
    title: "Hire the Team Behind Them",
    paragraph:
      "The engineers who build and maintain these projects work on client projects too: APIs, custom software, cloud infrastructure and testing.",
    button: "Talk to Our Team",
  },
};
