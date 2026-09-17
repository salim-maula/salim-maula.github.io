/**
 * Post-processing for the GitHub Pages static export.
 *
 * Next emits metadata image routes as extensionless files (`out/opengraph-image`).
 * GitHub Pages picks Content-Type from the file extension, so an extensionless
 * file is served as application/octet-stream and social crawlers may reject it.
 * This renames them to real .png files and rewrites every reference, then drops
 * in .nojekyll so Pages stops hiding the underscore-prefixed `_next` directory.
 */
import { readdir, rename, readFile, writeFile, stat, access } from "node:fs/promises";
import { join, extname } from "node:path";

const OUT = new URL("../out/", import.meta.url).pathname;
const IMAGE_ROUTES = ["opengraph-image", "twitter-image"];

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const renamed = [];
for (const route of IMAGE_ROUTES) {
  const src = join(OUT, route);
  if (!(await exists(src))) continue;
  if (!(await stat(src)).isFile()) continue;
  await rename(src, `${src}.png`);
  renamed.push(route);
}

if (renamed.length === 0) {
  console.log("pages-postbuild: no extensionless metadata images found, nothing to do");
} else {
  const files = (await walk(OUT)).filter((f) => [".html", ".txt", ".json"].includes(extname(f)));
  let touched = 0;
  for (const file of files) {
    const before = await readFile(file, "utf8");
    let after = before;
    for (const route of renamed) {
      // /opengraph-image?hash  ->  /opengraph-image.png   (never double-suffix)
      after = after.replaceAll(new RegExp(`/${route}(?!\\.png)(\\?[A-Za-z0-9]+)?`, "g"), `/${route}.png`);
    }
    if (after !== before) {
      await writeFile(file, after);
      touched += 1;
    }
  }
  console.log(`pages-postbuild: renamed ${renamed.join(", ")} -> .png, rewrote ${touched} file(s)`);
}

await writeFile(join(OUT, ".nojekyll"), "");
console.log("pages-postbuild: wrote .nojekyll");
