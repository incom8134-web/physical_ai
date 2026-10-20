/**
 * URL of a file in `public/`, resolved against the build's base path.
 *
 * Use `asset('images/x.jpg')` rather than `'/images/x.jpg'`, so images keep
 * working if the site is ever served from a sub-path instead of the domain root.
 */
const BASE = import.meta.env.BASE_URL;

export function asset(path: string): string {
  return BASE + path.replace(/^\/+/, '');
}
