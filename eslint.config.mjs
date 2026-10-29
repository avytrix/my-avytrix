import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

// eslint-config-next 16 ships flat configs; `next lint` is gone in Next 16, so `pnpm lint` runs `eslint .`
const config = [...coreWebVitals, ...typescript, { ignores: [".next/", "out/", "next-env.d.ts"] }];

export default config;
