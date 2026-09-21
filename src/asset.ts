/**
 * Resolves a file in `public/` against the build's base URL.
 *
 * Writing `src="/images/x.jpg"` hard-codes the site root, which only works when
 * the site is served from `/`. Under any sub-path — a preview link, a project
 * page, a hosted artifact — that absolute path escapes to the real domain root
 * and 404s, so every image silently disappears.
 *
 * `import.meta.env.BASE_URL` is whatever `vite build --base=...` was given:
 * `/` for a root deploy, `./` for a relocatable one. Going through it keeps the
 * same code correct in both.
 */
const BASE = import.meta.env.BASE_URL;

export function asset(path: string): string {
  return BASE + path.replace(/^\/+/, '');
}

export default asset;
