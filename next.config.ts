import type { NextConfig } from "next";

/**
 * GitHub Pages serves plain static files: no Node server, so no on-demand image
 * optimisation and no `next start`. `npm run build:pages` sets NEXT_EXPORT to
 * switch the build into static-export mode; a plain `npm run build` stays a
 * normal server build so Vercel or any Node host still works.
 */
const isExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  ...(isExport
    ? {
        output: "export" as const,
        // No image optimisation server exists on Pages, so ship the files as-is.
        images: { unoptimized: true },
        // Emit /about/index.html style paths, which Pages resolves without config.
        trailingSlash: true,
      }
    : {}),

  /**
   * `next dev` and `next build` both write to the same folder by default, so a
   * verification build run while the dev server is up overwrites the chunks it
   * is serving and the dev server starts throwing MODULE_NOT_FOUND.
   * `npm run build:check` sets NEXT_DIST_DIR so the two never collide.
   */
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
